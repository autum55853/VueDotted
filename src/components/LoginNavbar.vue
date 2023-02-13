<template>
  <nav class="navbar">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand text-success"> 回首頁 </RouterLink>
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
