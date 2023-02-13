<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">
        <img src="@/assets/Logo.svg" alt="" width="150" height="100" />
      </RouterLink>
      <h2>快速省時的電子簽署工具</h2>
      <div>
        <RouterLink to="login" class="px-3">登入</RouterLink>
        <RouterLink to="regist" class="px-3">註冊</RouterLink>
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
