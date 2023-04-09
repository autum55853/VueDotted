<template>
  <div class="drawArea">
    <canvas ref="canvas" @mousedown="draw(e)"></canvas>
    <img
      ref="showImage"
      class="show-img"
      width="250"
      height="150"
      style="border: 1px solid"
    />
    <button type="button" @click="saveImage" @push-Image="getNewImg">
      轉成image
    </button>
  </div>

  <!-- <img class="show-img" width="250" height="150" style="border: 1px solid" />

  <div class="btn-group">
    <button class="clear">Clear</button>
    <button class="save">Save</button>
  </div> -->
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  setup(props, { emit }) {
    const canvas = ref(null);
    let ctx;

    // 設置狀態來確認滑鼠 / 手指是否按下或在畫布範圍中
    let isPainting = ref(false); // 用來判斷是否正在畫圖

    onMounted(() => {
      ctx = canvas.value.getContext("2d");
      canvas.value.addEventListener("mousedown", startPosition);
      canvas.value.addEventListener("mouseup", finishedPosition);
      canvas.value.addEventListener("mouseleave", finishedPosition);
      canvas.value.addEventListener("mousemove", draw);
    });
    // 取得滑鼠

    const getPaintPosition = (e) => {
      //console.log(canvasSize);
      const canvasSize = canvas.value.getBoundingClientRect();
      if (e.type === "mousemove") {
        return {
          x: e.clientX - canvasSize.left,
          y: e.clientY - canvasSize.top,
        };
      }
    };

    // 開始繪圖時，將狀態開啟
    const startPosition = (e) => {
      e.preventDefault();
      // 設定線條的相關數值
      ctx.lineWidth = 3;
      isPainting.value = true;
    };

    // 結束繪圖時，將狀態關閉，並產生新路徑
    const finishedPosition = () => {
      isPainting.value = false;
      ctx.beginPath();
    };

    // 繪圖過程
    const draw = (e) => {
      // 滑鼠移動過程中，若非繪圖狀態，則跳出
      if (!isPainting.value) return;

      // 取得滑鼠 / 手指在畫布上的 x, y 軸位置位置
      const paintPosition = getPaintPosition(e);

      // 移動滑鼠位置並產生圖案
      ctx.lineTo(paintPosition.x, paintPosition.y);
      ctx.stroke();
    };

    //preview signature, cover to img
    const showImage = ref(null);
    let newImg;
    const saveImage = () => {
      newImg = canvas.value.toDataURL("image/png");
      // 圖片儲存的類型選擇 png ，並將值放入 img 的 src

      showImage.value.src = newImg;
      //console.log(newImg);
      //localStorage.setItem("img", newImg);
      emitImage(newImg);
    };
    function emitImage() {
      emit("push-Image", newImg);
      console.log(newImg);
    }

    return {
      canvas,
      ctx,
      draw,
      startPosition,
      finishedPosition,
      getPaintPosition,
      showImage,
      saveImage,
      emitImage,
    };
  },
};
</script>
<style lang="scss">
.drawAread {
  max-width: 100%;
  margin: 0 auto;
}
canvas {
  background-color: #ffd3ab;
  width: 500px;
  height: 300px;
  position: absolute; /*重要的一步是設定絕對定位*/
  margin: auto; /*將四周邊距都設為auto自動*/
  left: 0; /*離包含元素的距離均設為零*/
  right: 0;
  top: 0;
  bottom: 0;
  border: 1px solid #000;
}
</style>
