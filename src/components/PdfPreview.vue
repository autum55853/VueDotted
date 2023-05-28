<template>
  <canvas id="canvas" width="900" height="800"></canvas>
</template>
<script>
import { useSignature } from "@/stores/signatureStore.js";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import * as pdfjsWorker from "pdfjs-dist/build/pdf.worker";
import { fabric } from "fabric";
import { watch } from "vue";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
export default {
  setup() {
    const sign = useSignature();
    const myData = sign.myData;

    const printPDF = async (myData) => {
      //let pdfData = myData.value.substring(Base64Prefix.value.length);
      //console.log(atob(pdfData));
      // 將檔案處理成 base64

      // 將 base64 中的前綴刪去，並進行解碼

      //console.log(pdfData.substring(Base64Prefix.length).replaceAll(, ""));
      /*  const data = await atob(
        pdfData
          .substring(Base64Prefix.length)
          .replaceAll("/", "")
          .replaceAll("+", "")
      ); */
      console.log(myData);
      const data = atob(myData.substring(myData.indexOf(",") + 1));

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

    const pdfToImage = async (myData) => {
      // 設定 PDF 轉為圖片時的比例
      const scale = 1 / window.devicePixelRatio;

      // 回傳圖片
      return new fabric.Image(myData, {
        id: "renderPDF",
        scaleX: scale,
        scaleY: scale,
      });
    };

    // 此處 canvas 套用 fabric.js
    const canvas = new fabric.Canvas("canvas");
    const renderCanvas = async (e) => {
      canvas.requestRenderAll();
      const pdfData = await printPDF(myData);
      const pdfImage = await pdfToImage(pdfData);

      // 透過比例設定 canvas 尺寸
      canvas.setWidth(pdfImage.width / window.devicePixelRatio);
      canvas.setHeight(pdfImage.height / window.devicePixelRatio);

      // 將 PDF 畫面設定為背景
      canvas.setBackgroundImage(pdfImage, canvas.renderAll.bind(canvas));
    };
    //監聽pinia的myData
    watch(
      () => sign.myData, //如果修改/刪除簽名, store的狀態也要改變
      (e1, e2) => {
        console.log(e1, e2);
        renderCanvas();
      }
    );
    return {};
  },
};
</script>

<style lang="scss" scoped>
#canvas {
  border: 3px solid black;
}
</style>
