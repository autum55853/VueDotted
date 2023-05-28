<template>
  <Reviewfile>
    <template v-slot:guest>
      <RouterLink to="/" class="backToMain"
        ><img src="@/assets/Logo.svg" alt="回首頁" width="100" height="80"
      /></RouterLink>
      <button type="button" class="mx-2 p-2 register">
        <RouterLink to="regist" class="btnText fs-6 px-3 clearDecoration"
          >註冊</RouterLink
        >
      </button>
    </template>
  </Reviewfile>
</template>

<script>
import Reviewfile from "@/components/ReviewFile.vue";

export default {
  components: { Reviewfile },
};
</script>
<style lang="scss">
a:hover {
  color: #0b7d77;
  font-weight: bold;
  text-decoration: none;
}
.backToMain {
  color: #0b7d77;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
}
.register {
  background: #0b7d77;
  border-radius: 4px;
  border: 0px;
  &:hover {
    font-weight: bold;
  }
}
</style>
