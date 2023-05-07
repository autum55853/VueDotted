import { defineStore } from "pinia";
import { ref } from "vue";

export const useSignature = defineStore("signatureStore", {
  //ref,function,computed
  //state,actions,getters

  state: () => {
    const mySign = ref("");
    const isSign = false;
    const isHide = false;
    return {
      // all these properties will have their type inferred automatically
      mySign,
      isSign,
      isHide,
    };
  },
  actions: {
    //確認已完成簽名製作
    checkSign: (state) => {
      if (state.mySign.value != "") {
        console.log("確認有簽名");
        state.isHide = true;
      } else {
        state.isSign.value = false;
        state.isHide.value = false;
      }
    },
  },
});
