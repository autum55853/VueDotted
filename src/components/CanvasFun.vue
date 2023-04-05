<template>
  <div class="drawArea">
    <canvas ref="canvas" @mousedown="draw(e)"></canvas>
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
  setup() {
    const canvas = ref(null);
    let ctx;
    // 設置狀態來確認滑鼠 / 手指是否按下或在畫布範圍中
    let isPainting = ref(false);
    onMounted(() => {
      ctx = canvas.value.getContext("2d");
      console.log(canvas);
      //console.log(ctx);
      canvas.value.addEventListener("mousedown", startPosition);
      canvas.value.addEventListener("mouseup", finishedPosition);
      canvas.value.addEventListener("mouseleave", finishedPosition);
      canvas.value.addEventListener("mousemove", draw);
    });
    // 取得滑鼠
    function getPaintPosition(e) {
      const canvasSize = canvas.value.getBoundingClientRect();
      console.log(e.clientX);
      console.log(canvasSize.left);
      if (e.type === "mousemove") {
        return {
          x: e.clientX - canvasSize.left,
          y: e.clientY - canvasSize.top,
        };
      }
    }

    // 開始繪圖時，將狀態開啟
    function startPosition(e) {
      e.preventDefault();
      isPainting.value = true;
    }

    // 結束繪圖時，將狀態關閉，並產生新路徑
    function finishedPosition() {
      isPainting.value = false;
      ctx.beginPath();
    }

    // 繪圖過程
    function draw(e) {
      // 滑鼠移動過程中，若非繪圖狀態，則跳出
      if (!isPainting.value) return;

      // 取得滑鼠 / 手指在畫布上的 x, y 軸位置位置
      const paintPosition = getPaintPosition(e);
      console.log(paintPosition);

      // 移動滑鼠位置並產生圖案
      ctx.lineTo(paintPosition.x, paintPosition.y);
      ctx.stroke();
    }

    /*     const draw = () => {
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(30, 50);
      ctx.lineTo(150, 100);
      ctx.stroke();
    }; */

    return {
      canvas,
      ctx,
      draw,
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
  background-color: #eab383;
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
