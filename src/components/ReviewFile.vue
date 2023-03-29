<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid d-flex">
      <slot name="guest"></slot>
      <slot name="memember"></slot>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">個人與偏好設定</a></li>
        <li><a class="dropdown-item" href="#">簽屬人清單</a></li>
        <li><a class="dropdown-item" href="#">登出</a></li>
      </ul>
    </div>
  </nav>
  <div class="bannerStep border border-2 my-4">
    <ul class="m-3 mx-auto d-flex justify-content-between w-60">
      <li>
        <span class="mx-2 p-1 text-success">
          <font-awesome-icon icon="fa-solid fa-circle-check" size="xl" />
        </span>
        成功上傳檔案
      </li>
      <hr class="separateLine" />
      <li>
        <span
          class="mx-2 text-secondary border border-2 rounded-circle border-secondary px-2"
          >2</span
        >加入簽名檔
      </li>
      <hr class="separateLine" />
      <li>
        <span
          class="mx-2 text-secondary border border-2 rounded-circle border-secondary px-2"
          >3</span
        >確認檔案
      </li>
      <hr class="separateLine" />
      <li>
        <span
          class="mx-2 text-secondary border border-2 rounded-circle border-secondary px-2"
          >4</span
        >下載檔案
      </li>
    </ul>
  </div>
  <div class="d-flex">
    <div class="w-70">
      <div class="pdfpreview">
        <pdf-preview></pdf-preview>
      </div>
    </div>

    <div class="w-30">
      <aside>
        <div class="w-60 mx-0">
          <basic-info></basic-info>
          <!-- Button trigger modal -->
          <my-signing></my-signing>
          <invite-others></invite-others>
        </div>
      </aside>
    </div>
  </div>
</template>
<style lang="scss">
li {
  list-style: none;
}
.bannerStep {
  max-width: 100%;
  height: 100%;
}

.separateLine {
  position: relative;
  padding: 0 30px;
  border-top: 2px solid;
  ::before {
    content: "";
    position: absolute;
    height: 3px;
    top: 50%;
    border-left: 9999px solid #ccc;
    border-right: 9999px solid #ccc;
    right: -9999px;
    left: -9999px;
  }
}
.w-30 {
  width: 30%;
}
.w-70 {
  width: 70%;
}
.w-60 {
  max-width: 80%;
}
.pdfpreview {
  margin: 0 50px;
  height: 100%;
  overflow: auto;
}
</style>
<script>
import MySigning from "@/components/MySigning.vue";
import BasicInfo from "@/components/BasicInfo.vue";
import InviteOthers from "@/components/InviteOthers.vue";
import PdfPreview from "@/components/PdfPreview.vue";
export default {
  components: {
    MySigning,
    BasicInfo,
    InviteOthers,
    PdfPreview,
  },
};
</script>
