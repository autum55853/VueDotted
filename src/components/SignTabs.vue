<template>
  <div>
    <ul class="nav nav-tabs mb-3" id="tab" role="tablist">
      <li class="nav-item" ref="tab" role="presentation">
        <button
          class="nav-link"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="true"
          @click="ActiveBtn"
          :class="{ 'active-btn': ActiveBtn }"
        >
          輸入
        </button>
      </li>
      <li class="nav-item" ref="tab" role="presentation">
        <button
          class="nav-link tabButton"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
          @click="ActiveBtn"
          :class="{ 'active-btn': ActiveBtn }"
        >
          手寫
        </button>
      </li>
      <li class="nav-item" ref="tab" role="presentation">
        <button
          class="nav-link tabButton"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#contact"
          type="button"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
          @click="ActiveBtn"
          :class="{ 'active-btn': ActiveBtn }"
        >
          上傳
        </button>
      </li>
    </ul>
    <div class="tab-content" id="tabContent">
      <div
        class="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <div class="mb-3">
          <button
            type="button"
            class="fontSelect"
            @click="toggleSelect(index)"
            :class="{ activeSelect: currentIndex == index }"
            v-for="(font, index) in fontFamily"
            :key="font.id"
          >
            {{ font.fontName }}
          </button>
        </div>

        <div class="mb-1">
          <input
            type="text"
            class="inputName text-center"
            placeholder="請在這裡輸入您的簽名"
          />
        </div>
        <div class="d-flex justify-content-end">
          <button type="button" class="colorPicker black"></button>
          <button type="button" class="colorPicker blue"></button>
          <button type="button" class="colorPicker red"></button>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        手寫的內容
        <div class="mb-3">
          <button type="button">清除</button>
        </div>

        <div class="mb-1"><canvas-draw></canvas-draw>></div>
      </div>
      <div
        class="tab-pane fade"
        id="contact"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        上傳的內容
        <upload-file></upload-file>
      </div>
    </div>
  </div>
</template>

<script>
import CanvasDraw from "@/components/CanvasFun.vue";
import UploadFile from "@/components/UploadFile.vue";
import Tab from "bootstrap/js/dist/tab";
import { onMounted, ref } from "vue";
export default {
  components: {
    CanvasDraw,
    UploadFile,
  },
  setup() {
    const fontFamily = [
      { id: 1, fontName: "思源黑體", content: "notoSans" },
      { id: 2, fontName: "思源宋體", content: "notoSerif" },
      { id: 3, fontName: "辰於落燕體", content: "chenYuluoyan" },
    ];
    const currentIndex = ref(0);

    const tab = ref(null);
    const ActiveBtn = ref(false);
    const toggleBtn = () => {
      ActiveBtn.value = !ActiveBtn.value;
    };
    const toggleSelect = (index) => {
      console.log("成功點擊");
      currentIndex.value = index;
    };
    let tabs;

    onMounted(() => {
      tabs = new Tab(tab.value);
    });

    return {
      ActiveBtn,
      toggleBtn,
      currentIndex,
      fontFamily,
      toggleSelect,
      tabs,
      tab,
    };
  },
};
</script>
<style lang="scss">
.nav-tabs .nav-link {
  background: white;
  border: none;
  color: #323338;
}
.nav-link:hover {
  color: #0b7d77;
}
.nav-item {
  width: 33.3333%;
}

.active-btn {
  border-bottom: 2px solid #0b7d77;
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
.black {
  background-color: #323338;
}
.blue {
  background-color: #0073ea;
}
.red {
  background-color: #d83a52;
}
.activeSelect {
  background: #cee5e4;
  border-color: #0b7d77;
}
</style>
