<template>
  <div class="border-bottom border-3">
    <nav class="navbar navbar-light">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand">
          <img src="@/assets/Logo.svg" alt="" width="150" height="100" />
        </RouterLink>
        <h2 class="fw-bold">快速省時的電子簽署工具</h2>
        <div>
          <button type="button" class="login mx-2 bg-white border-0">
            <RouterLink to="login" class="btnText clearDecoration fs-6 m-3 p-2"
              >登入</RouterLink
            >
          </button>
          <button type="button" class="mx-2 p-2 register">
            <RouterLink to="regist" class="btnText fs-6 px-3 clearDecoration"
              >註冊</RouterLink
            >
          </button>
          <button type="button" class="mx-2 p-2 register">
            <RouterLink to="canvas" class="btnText fs-6 px-3 clearDecoration"
              >Canvas功能頁</RouterLink
            >
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
.navbar {
  max-width: 80%;
  margin: 0 auto;
}
.navbar h2 {
  color: #676879;
}
.login .btnText {
  color: #0b7d77;
}
.register .btnText {
  color: white;
}
.clearDecoration {
  text-decoration: none;
}
.login:hover {
  background: #0b7d77;
  border-radius: 4px;
  border: 0px;
  font-weight: bold;
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

<script>
import { RouterLink } from "vue-router";
export default {
  components: { RouterLink },
};
</script>
