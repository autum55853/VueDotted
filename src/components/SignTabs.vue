<template>
  <div class="tabs">
    <ul class="d-flex mb-3">
      <li class="tab" :class="{ 'active-tab': tabID == 'one' }">
        <button
          @click="showTabs('one')"
          :class="{ 'active-text': tabID == 'one' }"
        >
          輸入
        </button>
      </li>
      <li class="tab" :class="{ 'active-tab': tabID == 'two' }">
        <button
          @click="showTabs('two')"
          :class="{ 'active-text': tabID == 'two' }"
        >
          手寫
        </button>
      </li>
      <li class="tab" :class="{ 'active-tab': tabID == 'three' }">
        <button
          @click="showTabs('three')"
          :class="{ 'active-text': tabID == 'three' }"
        >
          上傳
        </button>
      </li>
    </ul>
    <div class="tab-content" id="tabContent">
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

        <div class="mb-1">
          <input
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
      <div id="profile" v-if="tabID == 'two'">
        手寫的內容
        <div class="mb-3">
          <button type="button">清除</button>
        </div>

        <div class="mb-1"><canvas-draw></canvas-draw>></div>
      </div>
      <div id="contact" v-if="tabID == 'three'">
        <file-area></file-area>
      </div>
    </div>
  </div>
</template>

<script>
import CanvasDraw from "@/components/CanvasFun.vue";
import FileArea from "@/components/FileArea.vue";
import { ref } from "vue";

export default {
  components: {
    CanvasDraw,
    FileArea,
  },
  setup() {
    const currentIndex = ref(0);
    const tabID = ref("one");
    const ActiveBtn = ref(false);
    const toggleBtn = () => {
      ActiveBtn.value = !ActiveBtn.value;
    };
    const toggleSelect = (index) => {
      console.log("成功點擊");
      currentIndex.value = index;
    };
    const showTabs = (tab) => {
      console.log(tab);
      tabID.value = tab;
    };
    //手寫輸入選擇字體的顏色
    const colorSelect = ref("black");
    const selectColor = (color) => {
      console.log("你選擇的顏色是" + color);
      colorSelect.value = color;
    };
    //手寫輸入選擇字體的樣式
    const fontID = ref("思源黑體");
    const fontSelect = ref("思源黑體");
    const selectFont = (font) => {
      console.log("你選擇的字體是" + font);
      fontID.value = font;
      fontSelect.value = font;
    };
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
    };
  },
};
</script>
<style lang="scss">
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
