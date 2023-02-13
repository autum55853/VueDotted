<template>
  <h1>進入後台頁面</h1>
  <Uploadfile></Uploadfile>
  <router-view></router-view>
</template>

<script>
import Uploadfile from "@/components/UploadFile.vue";
export default {
  components: { Uploadfile },
};
</script>
