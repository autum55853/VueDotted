<template>
  <button
    type="button"
    @click="openModal"
    class="w-300 bg-white guestBorder p-3"
  >
    <font-awesome-icon class="px-2" icon="fa-solid fa-plus" />創建簽名檔
  </button>
  <!--Modal-Mysigning-->
  <div
    class="modal fade"
    ref="modalRef"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="p-2 d-flex justify-content-end">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body d-flex flex-column">
          <sign-tabs></sign-tabs>
        </div>
        <div class="modal-footer d-flex flex-column">
          <p>我了解這是一個具法律效力的本人簽名</p>
          <button
            type="button"
            class="btn btn-secondary px-5"
            data-bs-dismiss="modal"
            :disabled="!sign.isSign"
            @click="checkSign"
          >
            儲存
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Modal from "bootstrap/js/dist/modal";
import SignTabs from "@/components/SignTabs.vue";
import { useSignature } from "@/stores/signatureStore.js";
export default {
  components: {
    SignTabs,
  },
  setup() {
    const modalRef = ref(null);
    let deleteModal;
    onMounted(() => {
      //console.log(modalRef.value);
      deleteModal = new Modal(modalRef.value);
    });

    const openModal = () => {
      deleteModal.show();
    };
    const sign = useSignature();
    const checkSign = () => {
      console.log("確認已儲存簽名");
      sign.isSign = true;
      console.log(sign.isSign);
    };

    return { modalRef, deleteModal, openModal, sign, checkSign };
  },
};
</script>
<style lang="scss">
.othersName {
  width: 100%;
  border-radius: 4px;
  border-color: #c5c7d0;
}
.modal-title {
  margin: 0 auto;
}
.modal-body {
  border: none;
}
</style>
