<template>
  <div class="mb-5">
    <h4>我的簽名</h4>
    <div v-if="signStatus">
      <img :src="signStore.mySign" alt="" />
      {{ mySign }}
    </div>
    <div v-else>
      {{ signStatus }}
      <modal-my-signing></modal-my-signing>
    </div>
  </div>
</template>

<script>
import ModalMySigning from "@/components/ModalMySigning.vue";
import { useSignature } from "@/stores/signatureStore.js";
import { watch } from "vue";
export default {
  components: {
    ModalMySigning,
  },
  setup() {
    const signStore = useSignature();
    let mySign;
    let signStatus;
    const changeStatus = () => {
      signStatus = signStore.isSign;
      console.log(signStatus);
    };
    //監聽pinia的mySign
    watch(
      () => signStore.mySign,
      (e1, e2) => {
        console.log(e1, e2);
        changeStatus();
      }
    );

    return {
      mySign,
      signStatus,
      changeStatus,
    };
  },
};
</script>
