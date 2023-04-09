import { ref } from "vue";
import { defineStore } from "pinia";

export const useSignature = defineStore("signatureStore", () => {
  //ref,function,computed
  //state,actions,getters

  const signature = ref(null);
  function showSignature() {
    console.log(signature);
  }
  return { signature, showSignature };
});
