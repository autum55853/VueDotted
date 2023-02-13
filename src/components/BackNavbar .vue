<template>
  <nav class="navbar">
    <div class="container-fluid">
      <RouterLink to="member" class="navbar-brand">
        <img src="@/assets/Logo.svg" alt="" width="100" height="80" />
      </RouterLink>
      <div>
        <a href="@/assets/Large.svg"></a>
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
