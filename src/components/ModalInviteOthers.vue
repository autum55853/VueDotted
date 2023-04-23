<template>
  <button type="button" class="wh-50 bg-white guestBorder" @click="openModal()">
    <font-awesome-icon icon="fa-solid fa-user-plus" />
  </button>
  <!--Modal-InviteOthers-->
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

        <div class="modal-header border-bottom border-success">
          <h5 class="modal-title text-success">邀請簽署人</h5>
        </div>
        <div class="modal-body d-flex flex-column">
          <label for="othersEmail">簽署人信箱*</label>
          <input
            id="othersEmail"
            type="email"
            v-model="inviteEmail"
            class="basicInfo guestBorder"
            placeholder="請輸入您的電子信箱"
            @change="checkInvite"
          />
          <div class="d-flex">
            <div>
              <label for="othersFirstName">姓氏*</label>
              <input
                id="othersFirstName"
                v-model="inviteFirstname"
                type="text"
                class="basicInfo guestBorder"
                placeholder="請輸入簽署人姓氏"
                @change="checkInvite"
              />
            </div>
            <div>
              <label for="othersLastName">名字</label>
              <input
                id="othersLastName"
                type="text"
                v-model="inviteLastname"
                class="basicInfo othersName"
                placeholder="請輸入簽署人名字"
                @change="checkInvite"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex flex-column">
          <button
            type="submit"
            class="btn btn-secondary px-5"
            data-bs-dismiss="modal"
            :disabled="!isInvite"
            @submit.prevent="saveInviter"
          >
            儲存被邀請人資訊
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
    //確認已完成邀約他人
    const isInvite = ref(false);
    const checkInvite = () => {
      if (
        inviteEmail.value != "" &&
        inviteFirstname.value != "" &&
        inviteLastname.value != ""
      ) {
        isInvite.value = !isInvite.value;
      }
    };

    const inviteEmail = ref("");
    const inviteFirstname = ref("");
    const inviteLastname = ref("");
    const saveInviter = () => {
      console.log(inviteEmail.value);
      console.log(inviteFirstname.value);
      console.log(inviteLastname.value);
    };
    return {
      modalRef,
      deleteModal,
      openModal,
      saveInviter,
      inviteEmail,
      inviteFirstname,
      inviteLastname,
      isInvite,
      checkInvite,
    };
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
