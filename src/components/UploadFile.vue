<template>
  <div
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="handleDrop"
    :class="{ 'active-dropzone': isActive }"
    mulitple
    class="uploadFile d-flex flex-column my-5 pt-5 mx-auto"
  >
    <div class="mx-auto">
      <img src="@/assets/img/Addfile.svg" alt="" />
    </div>
    <div class="mx-auto text-center">
      <p>將檔案拖曳至這裡，或</p>
      <label
        for="file"
        class="selectFile text-white border border-3 bg-success rounded-3 p-2"
        >選擇檔案</label
      >
      <input id="file" type="file" accept="text/jpg,.pdf,.png" />
      <p class="text-success">檔案大小10MB以內，檔案格式為PDF、JPG 或 PNG</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DropZone",
  setup() {
    const isActive = ref(false);
    const toggleActive = () => {
      isActive.value = !isActive.value;
    };
    const handleDrop = (e) => {
      console.log(e.dataTransfer.files[0]);
      const file = e.dataTransfer.files[0];
      if (file) {
        console.log(`你上傳的檔案名稱為:${file.name}`);
      }
    };

    return { isActive, toggleActive, handleDrop };
  },
};
</script>

<style lang="scss">
.uploadFile {
  width: 80%;
  padding: 50px;
  margin: 0 auto;
}
.selectFile {
  width: 360px;
  &:hover {
    cursor: pointer;
  }
}
.active-dropzone {
  background: #cee5e4;
  border: 5px dashed #0b7d77;
}

input {
  display: none;
}
</style>
