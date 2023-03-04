<template>
  <div class="accountPage">
    <div>
      <LoginNavbar></LoginNavbar>
    </div>
    <div class="d-flex">
      <section>
        <div class="text-center border-gray w-60 mx-auto m-2">
          <img class="mb-4" src="@/assets/Logo.svg" alt="logo" />
          <div class="w-70 mx-auto d-flex justify-content-evenly">
            <button>FaceBook Login</button>
            <button>Google login</button>
          </div>
        </div>
        <form class="mx-auto w-60 py-3">
          <div class="mb-2 w-70 mx-auto border-top py-3 border-2">
            <input
              type="email"
              class="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
              placeholder="請輸入電子郵件"
            />
            <div id="emailHelp" class="form-text mb-3">
              We'll never share your email with anyone else.
            </div>

            <input
              type="password"
              class="form-control"
              id="InputPassword"
              placeholder="請輸入密碼"
            />
          </div>
          <RouterLink to="forgotpassword" class="text-success"
            >忘記密碼</RouterLink
          >
          <div class="py-2">
            <button type="submit" class="btn btn-success w-70">登入</button>
          </div>
          <RouterLink to="dashboard/memember" class="text-success"
            >假裝登入成功，進入後台頁面</RouterLink
          >
          還沒有帳戶?<RouterLink to="regist" class="text-success"
            >註冊</RouterLink
          >
          or<RouterLink to="guest" class="text-success"
            >進入訪客頁面</RouterLink
          >
        </form>
      </section>
      <section class="bg-light">
        <h3 class="text-center">登入至您的檔案總管</h3>
        <img src="@/assets/img/Management.svg" alt="登入至您的檔案總管" />
      </section>
    </div>
  </div>
</template>
<style lang="scss">
section {
  width: 50%;
  height: 100%;
  text-align: center;
}
.w-60 {
  width: 60%;
}
.w-70 {
  width: 70%;
}
</style>
<script>
import LoginNavbar from "@/components/LoginNavbar.vue";
export default {
  components: {
    LoginNavbar,
  },
};
</script>
