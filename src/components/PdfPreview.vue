<template>
  <canvas id="canvas"></canvas>
</template>
<script>
import { useSignature } from "@/stores/signatureStore.js";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import * as pdfjsWorker from "pdfjs-dist/build/pdf.worker";
import { fabric } from "fabric";
import { onMounted } from "vue";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
export default {
  setup() {
    const sign = useSignature();
    let myData;
    onMounted(() => {
      myData = sign.myPDF;
      renderCanvas(myData);
    });
    const Base64Prefix = "data:application/pdf;base64,";
    const printPDF = async (myData) => {
      //const data = await atob(myData.substring(myData.indexOf(",") + 1));
      let data;
      //抓取myData=PDF or PNG
      if (Base64Prefix === "data:application/pdf;base64,") {
        console.log("PDF");
        data = await atob(myData.substring(Base64Prefix.length));
      } else {
        console.log("PNG or JPG");
        data = await atob(myData.substring(myData.indexOf(",") + 1));
      }

      // 利用解碼的檔案，載入 PDF 檔及第一頁
      const pdfDoc = await pdfjsLib.getDocument({ data }).promise;
      const pdfPage = await pdfDoc.getPage(1);

      // 設定尺寸及產生 canvas
      const viewport = pdfPage.getViewport({
        scale: window.devicePixelRatio,
      });
      const canvas = document.getElementById("canvas");
      const context = canvas.getContext("2d");
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
      const scale = 2.0 / window.devicePixelRatio;

      // 回傳圖片
      return new fabric.Image(myData, {
        id: "renderPDF",
        scaleX: scale,
        scaleY: scale,
      });
    };

    // 此處 canvas 套用 fabric.js
    const canvas = new fabric.Canvas("canvas");
    const renderCanvas = async (myData) => {
      canvas.requestRenderAll();
      let pdfData;
      //判斷myData為圖片格式orPDF
      if (Base64Prefix === "data:application/pdf;base64,") {
        pdfData = await printPDF(myData);
      }

      const pdfImage = await pdfToImage(pdfData);

      // 透過比例設定 canvas 尺寸
      canvas.setWidth(pdfImage.width / window.devicePixelRatio);
      canvas.setHeight(pdfImage.height / window.devicePixelRatio);

      // 將 PDF 畫面設定為背景
      canvas.setBackgroundImage(pdfImage, canvas.renderAll.bind(canvas));
    };

    return {};
  },
};
</script>

<style lang="scss" scoped></style>
