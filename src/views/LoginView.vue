<template>
  <div class="accountPage d-flex">
    <div class="d-flex flex-column w-50">
      <section class="mx-auto w-70">
        <div class="text-center border-gray mx-auto m-2">
          <RouterLink to="/" class="navbar-brand">
            <img
              src="@/assets/Logo.svg"
              alt="返回首頁"
              width="150"
              height="100"
            />
          </RouterLink>
          <div class="mx-auto d-flex justify-content-evenly">
            <btn-from-others></btn-from-others>
          </div>
        </div>
        <form @submit.prevent="userLogin" class="mx-auto py-3">
          <div class="mb-2 w-70 mx-auto border-top py-3 border-2">
            <input
              type="email"
              class="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
              placeholder="請輸入電子郵件"
              v-model="user.email"
            />
            <div id="emailHelp" class="form-text mb-3">
              We'll never share your email with anyone else.
            </div>

            <input
              type="password"
              class="form-control"
              id="InputPassword"
              placeholder="請輸入密碼"
              v-model="user.password"
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
    </div>
    <div class="w-50 bg-light">
      <section class="mx-auto">
        <h3 class="text-center">登入至您的檔案總管</h3>
        <img src="@/assets/img/Management.svg" alt="登入至您的檔案總管" />
      </section>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import BtnFromOthers from "@/components/BtnFromOthers.vue";

//引入firebase
//import { firebaseAuth } from "../config/firebaseConfiguration";
export default {
  components: {
    BtnFromOthers,
  },
  setup() {
    const user = ref({});

    //修正this.user.email&password&router per composition API 格式
    /*  const userLogin = () => {
      firebaseAuth
        .signInWithEmailAndPassword(user.value.email, user.value.password)
        .then(() => {
          //this.$router.push("/admin");
          console.log("登入成功");
        })
        .catch((error) => {
          alert(error.message);
        });
    }; */
    return { user };
  },
};
</script>
<style lang="scss">
section {
  height: 100%;
  text-align: center;
}
.w-50 {
  width: 50%;
}
.w-60 {
  width: 60%;
}
.w-70 {
  width: 70%;
}
.w-80 {
  width: 80%;
}
.accountPage {
  margin: auto;
  height: 100vh;
}
.accountPage section {
  padding: 10% 0;
}

a {
  text-decoration: none;
  &:hover {
    color: #0b7d77;
    font-weight: bold;
  }
}
</style>
