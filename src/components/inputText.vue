<template>
  <div class="showImage">
    <img :src="showText" alt="" />
  </div>
  <div class="inputText">
    <div id="home" v-if="tabID == 'one'">
      <div class="mb-3">
        <button
          type="button"
          class="fontSelect"
          :class="{ 'active-font': fontID == '思源黑體' }"
          @click="selectFont('思源黑體')"
        >
          思源黑體
        </button>
        <button
          type="button"
          class="fontSelect"
          :class="{ 'active-font': fontID == '思源宋體' }"
          @click="selectFont('思源宋體')"
        >
          思源宋體
        </button>
        <button
          type="button"
          class="fontSelect"
          :class="{ 'active-font': fontID == '辰於落燕體' }"
          @click="selectFont('辰於落燕體')"
        >
          辰於落燕體
        </button>
      </div>

      <div class="mb-1" id="node">
        <input
          @change="getTextUrl"
          type="text"
          class="inputName text-center"
          :class="[
            {
              red: colorSelect === 'red',
              blue: colorSelect === 'blue',
              black: colorSelect === 'black',
              notoSans: fontSelect === '思源黑體',
              notoSerif: fontSelect === '思源宋體',
              chenYuluoyan: fontSelect === '辰於落燕體',
            },
          ]"
          placeholder="請在這裡輸入您的簽名"
        />
      </div>
      <div class="d-flex justify-content-end">
        <button
          type="button"
          class="colorPicker bg-black"
          @click="selectColor('black')"
        ></button>
        <button
          type="button"
          class="colorPicker bg-blue"
          @click="selectColor('blue')"
        ></button>
        <button
          type="button"
          class="colorPicker bg-red"
          @click="selectColor('red')"
        ></button>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import domtoimage from "dom-to-image";
import { useSignature } from "@/stores/signatureStore.js";
export default {
  setup() {
    const currentIndex = ref(0);
    const tabID = ref("one");
    const ActiveBtn = ref(false);
    const toggleBtn = () => {
      ActiveBtn.value = !ActiveBtn.value;
    };
    const toggleSelect = (index) => {
      currentIndex.value = index;
    };
    const showTabs = (tab) => {
      tabID.value = tab;
    };
    //
    //輸入選擇字體的顏色
    const colorSelect = ref("black");
    const selectColor = (color) => {
      colorSelect.value = color;
    };
    //輸入選擇字體的樣式
    const fontID = ref("思源黑體");
    const fontSelect = ref("思源黑體");
    const selectFont = (font) => {
      fontID.value = font;
      fontSelect.value = font;
    };
    //將輸入的文字轉成圖片Url
    let sign = useSignature();
    const showText = ref(null);
    const getTextUrl = () => {
      domtoimage
        .toPng(document.getElementById("node"))
        .then(function (dataUrl) {
          const img = new Image();
          img.src = dataUrl;
          sign.mySign = dataUrl;
          sign.isSign = true;
          showText.value = dataUrl;
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
    };
    //控制是否show/hide 簽名
    sign.$subscribe((args, state) => {
      console.log("args", args);
      console.log("state", state);
    });

    return {
      ActiveBtn,
      toggleBtn,
      toggleSelect,
      showTabs,
      tabID,
      selectColor,
      colorSelect,
      selectFont,
      fontSelect,
      fontID,
      getTextUrl,
      showText,
    };
  },
};
</script>
<style lang="scss">
.inputText {
  max-width: 40%;
  margin: 5% auto;
}
.tabs ul {
  padding: 0px;
}
.tab {
  border: none;
  color: #323338;
  width: 33.3333333333%;
  margin-bottom: 10px;
  text-align: center;
  & :hover {
    color: #0b7d77;
  }
}
.tab button {
  background: white;
  border: none;
  margin: 0 auto;
  margin-bottom: 10px;
}

.active-tab {
  border-bottom: 2px solid #0b7d77;
}
.active-text {
  color: #0b7d77;
}
.inputName {
  width: 100%;
  min-height: 150px;
  border: 2px solid #e6e9ef;
  border-radius: 5px;
  font-size: 30px;
}

.notoSans {
  font-family: "Noto Sans TC";
}
.notoSerif {
  font-family: sans-serif;
}
.chenYuluoyan {
  font-family: "ChenYuluoyan";
  src: asset_path("fonts/ChenYuluoyan-Thin.ttf");
  font-size: 56px;
}
.fontSelect {
  background: #ffffff;
  border: 2px solid #c5c7d0;
  border-radius: 4px;
  margin: 3px;
}
.colorPicker {
  margin: 3px;
  height: 16px;
  border: 3px solid #c5c7d0;
  border-radius: 99px;
}
.bg-black {
  background-color: #323338;
}
.bg-blue {
  background-color: #0073ea;
}
.bg-red {
  background-color: #d83a52;
}
.black {
  color: #323338;
}
.blue {
  color: #0073ea;
}
.red {
  color: #d83a52;
}
.active-font {
  background: #cee5e4;
  border-color: #0b7d77;
}
</style>
