<template>
  <div class="mb-5">
    <h4>我的簽名</h4>
    <div v-if="mySign">
      <img :src="mySign" class="yourSign" alt="" />
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
import { ref, watch } from "vue";
export default {
  components: {
    ModalMySigning,
  },
  setup() {
    const signStore = useSignature();
    const mySign = ref("");
    let signStatus;
    const changeStatus = () => {
      signStatus = signStore.isSave;
      //console.log(signStatus);
    };
    //監聽pinia的mySign
    watch(
      () => signStore.isSave,
      (e1, e2) => {
        console.log(e1, e2);
        changeStatus();
        mySign.value = signStore.mySign;
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
<style lang="scss">
.isShow {
  display: block;
}
.isHide {
  display: none;
}
.yourSign {
  max-width: 100%;
}
</style>
