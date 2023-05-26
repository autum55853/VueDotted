import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  //ref,function,computed
  //state,actions,getters
  state: () => {
    const guestUser = {};
    return { guestUser };
  },
});
