<template>
  <div class="mb-5">
    <h4>我的簽名</h4>
    <button type="button" class="w-300 bg-white guestBorder p-3">
      <font-awesome-icon class="px-2" icon="fa-solid fa-plus" />創建簽名檔
    </button>
    <div class="modal fade" ref="myModalRef" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">aaa</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { Modal } from "bootstrap";
export default {
  data() {
    return {
      modalShow: false,
    };
  },
  methods: {
    setup() {
      const deleteModalRef = ref(null);
      let deleteModal;
      onMounted(() => {
        deleteModal = new Modal(deleteModalRef.value, {});
      });
      return { deleteModal };
    },
  },
};
</script>
