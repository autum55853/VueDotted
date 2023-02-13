<template>
  <nav class="navbar">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">
        <img
          src="@/assest/img/arrow_back_FILL0_wght400_GRAD0_opsz48.svg"
          alt=""
        />
      </RouterLink>
      <div>
        <button type="button" class="btn btn-success">
          <RouterLink to="regist" class="px-3">註冊</RouterLink>
        </button>
      </div>
    </div>
  </nav>
</template>

<style>
@import "bootstrap";
</style>

<script>
import { RouterLink } from "vue-router";
export default {
  components: { RouterLink },
};
</script>
