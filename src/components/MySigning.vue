<template>
  <template>
    <div class="modal fade" ref="myModalRef" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">aaa</div>
        </div>
      </div>
    </div>
  </template>
</template>

<script>
import { onMounted, ref } from "vue";
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
