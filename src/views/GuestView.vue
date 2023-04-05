<template>
  <h1>進入訪客頁面</h1>
  <Reviewfile>
    <template v-slot:guest>
      <RouterLink to="/" class="text-success">返回首頁</RouterLink>
    </template>
  </Reviewfile>
</template>

<script>
import Reviewfile from "@/components/ReviewFile.vue";

export default {
  components: { Reviewfile },
};
</script>
