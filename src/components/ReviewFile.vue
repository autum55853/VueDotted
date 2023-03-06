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
  <div class="bannerStep border my-4">
    <ul class="mx-auto d-flex justify-content-around w-60">
      <li class="mx-2">
        <span class="mx-2 text-success">
          <font-awesome-icon icon="fa-solid fa-circle-check" size="xl" />
        </span>
        成功上傳檔案
      </li>
      <li class="mx-2">
        <span
          class="mx-2 text-secondary border border-2 rounded-circle border-secondary px-2"
          >2</span
        >加入簽名檔
      </li>
      <li class="mx-2">
        <span
          class="mx-2 text-secondary border border-2 rounded-circle border-secondary px-2"
          >3</span
        >確認檔案
      </li>
      <li class="mx-2">
        <span
          class="mx-2 text-secondary border border-2 rounded-circle border-secondary px-2"
          >4</span
        >下載檔案
      </li>
    </ul>
  </div>
  <div class="d-flex">
    <section class="pdfpreview w-70">PDF檔案預覽頁面</section>
    <div class="w-30">
      <aside>
        <div class="w-60 border">
          <h5 class="text-center">我的簽名</h5>
          <!-- Button trigger modal -->
          <my-signing></my-signing>
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
  width: 100%;
}
.w-30 {
  width: 30%;
}
.w-70 {
  width: 70%;
}
.w-60 {
  max-width: 60%;
}
</style>
<script>
import MySigning from "@/components/MySigning.vue";

export default {
  components: {
    MySigning,
  },
};
</script>
