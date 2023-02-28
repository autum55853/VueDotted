<template>
  <h1>進入會員頁面</h1>
  <Reviewfile>
    <template v-slot:memember>
      <div class="container-fluid d-flex">
        <RouterLink to="/dashboard" class="text-success"
          >←返回檔案總管</RouterLink
        >
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">個人與偏好設定</a></li>
            <li><a class="dropdown-item" href="#">簽屬人清單</a></li>
            <li><a class="dropdown-item" href="#">登出</a></li>
          </ul>
        </div>
      </div>
    </template>
  </Reviewfile>
</template>

<script>
import Reviewfile from "@/components/ReviewFile.vue";
export default {
  components: { Reviewfile },
};
</script>
