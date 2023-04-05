<template>
  <div>
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-home"
          type="button"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        >
          輸入
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-profile"
          type="button"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
        >
          手寫
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-contact-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-contact"
          type="button"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >
          上傳
        </button>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        <div class="mb-3">
          <button type="button" class="fontSelect notoSans">思源黑體</button>
          <button type="button" class="fontSelect notoSerif">思源宋體</button>
          <button type="button" class="fontSelect chenYuluoyan">
            辰於落燕體
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
        id="pills-profile"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
      >
        手寫的內容
        <div class="mb-3">
          <button type="button">清除</button>
        </div>

        <div class="mb-1"><canvas-draw></canvas-draw>></div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-contact"
        role="tabpanel"
        aria-labelledby="pills-contact-tab"
      >
        上傳的內容
      </div>
    </div>
  </div>
</template>

<script>
import CanvasDraw from "@/components/CanvasFun.vue";
export default {
  components: {
    CanvasDraw,
  },
};
</script>
<style lang="scss">
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
</style>
