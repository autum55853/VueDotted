<template>
  <div>
    <div>
      <LoginNavbar></LoginNavbar>
    </div>
    <div class="d-flex">
      <section>
        <div class="text-center border-gray w-60 mx-auto m-3">
          <img
            class="mb-4"
            src="@/assets/Logo.svg"
            alt=""
            width="100"
            height="80"
          />
          <p>
            輸入你的電子郵箱,
            然後檢查你的收件箱，以查看我們發送的說明。如果沒有收到確認郵件，請檢查你的垃圾郵件。
          </p>
        </div>

        <form class="mx-auto w-60">
          <div class="mb-3 w-60 mx-auto border-top py-3 border-2">
            <input
              type="email"
              class="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
              placeholder="請輸入電子郵件"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <button type="submit" class="btn btn-primary">傳送</button>
          <div>
            <RouterLink to="Login">返回登入</RouterLink>
          </div>
        </form>
      </section>
      <section class="bg-light">
        <h3 class="text-center">重新設定您的密碼</h3>
        <img src="@/assets/img/Forgotpassword.svg" alt="登入至您的檔案總管" />
      </section>
    </div>
  </div>
</template>
<style>
@import "bootstrap";
section {
  width: 50%;
  height: 100%;
  text-align: center;
}
.w-60 {
  max-width: 60%;
}
.w-70 {
  max-width: 70%;
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
