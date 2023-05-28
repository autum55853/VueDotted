<template>
  <div class="d-flex flex-row">
    <div>
      <div>
        <input @change="renderCanvas" type="file" accept="application/pdf" />
      </div>
      <!--pdf.js官網範例-->
      <canvas id="canvas" width="500" height="300"></canvas>
    </div>
    <div>
      <my-signing></my-signing>
    </div>
  </div>
</template>
<script>
import MySigning from "@/components/MySigning.vue";
import { useSignature } from "@/stores/signatureStore.js";
import { ref, watch } from "vue";

import * as pdfjsLib from "pdfjs-dist/build/pdf";
import * as pdfjsWorker from "pdfjs-dist/build/pdf.worker";
import { fabric } from "fabric";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
export default {
  components: {
    MySigning,
  },
  setup() {
    let sign = useSignature();

    //let Base64Prefix = "data:application/pdf;base64,";
    //let file;
    /* const handlePDF = (data) => {
      console.log(data.target.files[0]);
      file = data.target.files[0];
      const reader = new FileReader();
      // 轉換成 DataURL
      reader.readAsDataURL(file);
      reader.onload = () => {
        //console.log("Your Data:", reader.result.split("base64,")[1]);
        sign.isUpload = true;
        sign.myPDF = reader.result;
      }; //end: onloadend
      //showPDF(file);
    }; */
    const readBlob = (blob) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener("load", () =>
          resolve((sign.myPDF = reader.result))
        );
        //console.log(reader.result);
        reader.addEventListener("error", reject);
        reader.readAsDataURL(blob);
        sign.isUpload = true;
        sign.myData = reader.result;
        //console.log(reader.result);
      });
    };

    const myData = ref("");

    //監聽pinia的myPDF
    /* watch(
      () => sign.isUpload, //如果修改/刪除簽名, store的狀態也要改變
      (e1, e2) => {
        //console.log(e1, e2);
        myData.value = sign.myPDF;
      }
    ); */

    const printPDF = async (pdfData) => {
      //let pdfData = myData.value.substring(Base64Prefix.value.length);
      //console.log(atob(pdfData));
      // 將檔案處理成 base64
      pdfData = await readBlob(pdfData);
      // 將 base64 中的前綴刪去，並進行解碼

      //console.log(pdfData.substring(Base64Prefix.length).replaceAll(, ""));
      /*  const data = await atob(
        pdfData
          .substring(Base64Prefix.length)
          .replaceAll("/", "")
          .replaceAll("+", "")
      ); */
      const data = atob(pdfData.substring(pdfData.indexOf(",") + 1));
      console.log(data);
      // 利用解碼的檔案，載入 PDF 檔及第一頁
      const pdfDoc = await pdfjsLib.getDocument({ data }).promise;
      const pdfPage = await pdfDoc.getPage(1);

      // 設定尺寸及產生 canvas
      const viewport = pdfPage.getViewport({
        scale: window.devicePixelRatio,
      });
      const canvas = document.getElementById("canvas");
      console.log(canvas);
      const context = canvas.getContext("2d");
      console.log(context);
      // 設定 PDF 所要顯示的寬高及渲染
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const renderContext = {
        canvasContext: context,
        viewport,
      };
      const renderTask = pdfPage.render(renderContext);

      // 回傳做好的 PDF canvas
      return renderTask.promise.then(() => canvas);
    };

    const pdfToImage = async (pdfData) => {
      // 設定 PDF 轉為圖片時的比例
      const scale = 1 / window.devicePixelRatio;

      // 回傳圖片
      return new fabric.Image(pdfData, {
        id: "renderPDF",
        scaleX: scale,
        scaleY: scale,
      });
    };

    // 此處 canvas 套用 fabric.js
    const canvas = new fabric.Canvas("canvas");
    const renderCanvas = async (e) => {
      canvas.requestRenderAll();
      const pdfData = await printPDF(e.target.files[0]);
      const pdfImage = await pdfToImage(pdfData);

      // 透過比例設定 canvas 尺寸
      canvas.setWidth(pdfImage.width / window.devicePixelRatio);
      canvas.setHeight(pdfImage.height / window.devicePixelRatio);

      // 將 PDF 畫面設定為背景
      canvas.setBackgroundImage(pdfImage, canvas.renderAll.bind(canvas));
    };

    const signStore = useSignature();
    const mySign = ref("");
    let signStatus;

    //監聽pinia的mySign
    watch(
      () => signStore.isSave, //如果修改/刪除簽名, store的狀態也要改變
      (e1, e2) => {
        console.log(e1, e2);
        signStatus = signStore.isSave;
        mySign.value = signStore.mySign;
      }
    );

    //切換"修改簽名檔"
    const isModify = ref(false);
    const clickModify = () => {
      console.log("要修改簽名");
      isModify.value = true;
    };
    const modifySign = () => {
      console.log("修改簽名");
    };
    const deleteSign = () => {
      console.log("刪除簽名");
    };

    return {
      signStatus,
      clickModify,
      modifySign,
      deleteSign,
      renderCanvas,
      myData,
    };
  },
};
</script>
<style lang="scss" scoped>
#canvas {
  border: 3px solid black;
}
.isShow {
  display: block;
}
.isHide {
  display: none;
}
.yourSign {
  border: 3px solid #cee5e4;
  width: 70%;
  padding: 0px 8px;
  border-radius: 5%;
}
.sign:hover {
  cursor: pointer;
}
.sign img {
  width: 90%;
}
.modify {
  position: relative;
  &:hover {
    cursor: pointer;
  }
}
.modify-list {
  display: block;
  position: absolute;
  top: 30px;
  left: -50px;
  width: 200px;
  height: 100px;
  border: 2px solid #e6e9ef;
  border-radius: 8px;
  background-color: white;
  > ul {
    padding: 10px 20px;
  }
}
</style>
