<template>
  <div class="py-2">
    <button type="submit" @click="logOut" class="btn btn-success w-70">
      登入
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

//引入firebase
//import { firebaseAuth } from "../config/firebaseConfiguration";
export default {
  setup() {
    const user = ref({});

    //修正this.user.email&password&router per composition API 格式
    /* const logOut = () => {
      firebaseAuth.signOut().then(() => {
        firebaseAuth.onAuthStateChanged(() => {
          //this.$router.push('/login')
          console.log("成功登出帳號");
        });
      });
    }; */
    return { user };
  },
};
</script>
