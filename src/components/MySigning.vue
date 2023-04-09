<template>
  <div class="mb-5">
    <h4>我的簽名</h4>
    <img class="mySignature" ref="showSignature" />
    <modal-my-signing></modal-my-signing>
  </div>
</template>

<script>
import ModalMySigning from "@/components/ModalMySigning.vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useSignature } from "../stores/signatureStore";
export default {
  components: {
    ModalMySigning,
  },
  setup() {
    /* const store = useSignature();
    const mySignature = storeToRefs(store);
    const { showSignature } = store; */
    const showSignature = ref(null);
    //let mySignature;
    /* const getSignature = () => {
      console.log(localStorage.getItem("img"));
      mySignature = localStorage.getItem("img");
      showSignature.value.src = mySignature;
    }; */

    function getNewImg(newImg) {
      console.log(newImg);
    }
    return {
      showSignature,
      getNewImg,
    };
  },
};
</script>
