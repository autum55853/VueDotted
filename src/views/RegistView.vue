<template>
  <div class="registPage d-flex">
    <div class="d-flex flex-column w-50">
      <section class="mx-auto w-70">
        <div class="text-center border-gray w-80 mx-auto">
          <img
            class="mb-4"
            src="@/assets/Logo.svg"
            alt="logo"
            width="150"
            height="100"
          />
          <div class="mx-auto d-flex justify-content-evenly">
            <btn-from-others></btn-from-others>
          </div>
        </div>

        <form class="mx-auto py-3">
          <div class="mb-1 w-70 mx-auto border-top py-3 border-2">
            <input
              type="text"
              class="form-control mb-3"
              id="InputName"
              placeholder="請輸入姓名"
            />
            <input
              type="email"
              class="form-control mb-3"
              id="InputEmail"
              aria-describedby="emailHelp"
              placeholder="請輸入電子郵件"
            />
            <input
              type="password"
              class="form-control mb-3"
              id="InputPassword"
              placeholder="請輸入密碼"
            />
          </div>
          <button type="submit" class="btn btn-success w-60 mb-2">註冊</button>
          <div>已經有帳戶了? <RouterLink to="Login">登入</RouterLink></div>
        </form>
      </section>
    </div>
    <div class="w-50 bg-light">
      <section class="mx-auto">
        <h3 class="text-center">為高效率的您，提供快速的服務。</h3>
        <img
          src="@/assets/img/Businessdeal.svg"
          alt="為高效率的您，提供快速的服務。"
        />
      </section>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.registPage {
  margin: auto;
  height: 100vh;
}
.registPage section {
  padding: 10% 0;
}
section {
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
import BtnFromOthers from "@/components/BtnFromOthers.vue";
export default {
  components: {
    BtnFromOthers,
  },
};
</script>
