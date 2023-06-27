<template>
  <button type="button" class="btnFromOthers" @click="loginWithGoogle">
    <img src="../assets/img/Google.jpg" alt="" />
    透過 Google 註冊
  </button>
  <button type="button" class="btnFromOthers" @click="loginWithFacebook">
    <img src="../assets/img/Facebook.jpg" alt="" />
    透過 facebook 註冊
  </button>
</template>
<script>
//import { loginWithGoogle } from "../config/googleFirebase";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
export default {
  setup() {
    const firebaseAuth = getAuth();
    console.log(firebaseAuth);
    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
      return new Promise((solve, reject) => {
        console.log("loginWithGoogle");
        signInWithPopup(firebaseAuth, googleProvider)
          .then((res) => {
            console.log(res);
            solve(res.user);
          })
          .catch((err) => {
            reject(err);
          });
      });
    };
    const facebookProvider = new FacebookAuthProvider();
    const loginWithFacebook = () => {
      return new Promise((solve, reject) => {
        console.log("loginWithFacebook");
        signInWithPopup(firebaseAuth, facebookProvider)
          .then((res) => {
            console.log(res);
            solve(res.user);
          })
          .catch((err) => {
            reject(err);
          });
      });
    };
    return { loginWithGoogle, loginWithFacebook };
  },
};
</script>
<style lang="scss">
.btnFromOthers {
  background: #ffff;
  font-size: 14px;
  padding: 10px 8px;
  border: 2px solid #4285f4;
  border-radius: 4px;
}
.btnFromOthers img {
  width: 20px;
  height: 20px;
}
</style>
