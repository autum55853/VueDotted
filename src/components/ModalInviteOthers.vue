<template>
  <button type="button" class="wh-50 bg-white guestBorder" @click="openModal()">
    <font-awesome-icon icon="fa-solid fa-user-plus" />
  </button>
  <!--Modal-InviteOthers-->
  <div
    class="modal fade show"
    ref="modalRef"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
        <div class="modal-header border-bottom border-success">
          <h5 class="modal-title text-success">邀請簽署人</h5>
        </div>
        <div class="modal-body d-flex flex-column">
          <label for="othersEmail">簽署人信箱*</label>
          <input
            id="othersEmail"
            type="email"
            class="basicInfo guestBorder"
            placeholder="請輸入您的電子信箱"
          />
          <div class="d-flex">
            <div>
              <label for="othersFirstName">姓氏*</label>
              <input
                id="othersFirstName"
                type="text"
                class="basicInfo guestBorder"
                placeholder="請輸入簽署人姓氏"
              />
            </div>
            <div>
              <label for="othersLastName">名字</label>
              <input
                id="othersLastName"
                type="email"
                class="basicInfo othersName"
                placeholder="請輸入簽署人名字"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
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
export default {
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
    return { modalRef, deleteModal, openModal };
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
