<template>
  <div class="w-300 mb-5 d-flex justify-content-between">
    <div>
      <h4>邀請簽署人</h4>
      <div class="form-check form-switch">
        <div class="d-flex justify-content-between">
          <span class="px-1">無簽署順序</span>
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />

          <span class="px-1">有簽署順序</span>
        </div>
        <div class="d-flex justify-content-between">
          <span>無期限</span>
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />

          <span>指定簽署期限</span>
        </div>
      </div>
    </div>

    <button type="button" class="wh-50 bg-white guestBorder" @click="showModal">
      <font-awesome-icon icon="fa-solid fa-user-plus" />
    </button>
    <!-- Modal -->
    <div
      class="modal fade show"
      ref="modalRef"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.wh-50 {
  width: 50px;
  height: 50px;
}

.form-switch .form-check-input {
  margin-left: 0em;
}
.form-switch {
  padding-left: 0px;
}
</style>
<script>
import { onMounted, ref } from "vue";
import Modal from "bootstrap/js/dist/modal";
export default {
  setup() {
    const modalRef = ref(null);
    onMounted(() => {
      const openModal = () => Modal.getInstance(modalRef.value)?.show();
      const closeModal = () => Modal.getInstance(modalRef.value)?.hide();
    });

    return {
      closeModal,
      openModal,
    };
  },
};
</script>
