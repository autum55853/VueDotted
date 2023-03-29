<template>
  <div
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="handleDrop"
    :class="{ 'active-dropzone': isActive }"
    class="uploadFile d-flex flex-column my-5 pt-5 mx-auto"
  >
    <div class="mx-auto">
      <img src="@/assets/img/Addfile.svg" alt="" />
    </div>
    <div class="mx-auto text-center">
      <p>將檔案拖曳至這裡，或</p>
      <div class="w-360 selectFile position-relative">
        <label
          @change="toggleActive(), handleDrop(e)"
          for="file"
          class="w-360 py-2"
          :class="{ hide: isLoading }"
          >選擇檔案</label
        >
        <div class="hide w-360" :class="{ show: isLoading }">
          <span
            :style="{ width: loadingWidth + '%' }"
            :class="{ 'active-loading': isLoading }"
          >
          </span>
          <p class="p-2 position-absolute top-50 start-50 translate-middle">
            上傳中...
          </p>
        </div>
      </div>

      <input
        class="uploadInput"
        id="file"
        type="file"
        accept="text/jpg,.pdf,.png"
      />
      <p class="text-success">檔案大小10MB以內，檔案格式為PDF、JPG 或 PNG</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "DropZone",
  setup() {
    const isActive = ref(false);
    const isLoading = ref(false);
    const loadingWidth = ref(0);
    const router = useRouter();
    const toggleActive = () => {
      isActive.value = !isActive.value;
    };
    const toggleLoading = () => {
      isLoading.value = !isLoading.value;
      console.log("上傳中");
      loadingWidth.value = window.setInterval(() => {
        loadingWidth.value += 20;
        console.log(loadingWidth.value);
        if (loadingWidth.value >= 100) {
          handleRouter();
          loadingWidth.value = 0;
        }
      }, 3000);
    };

    const handleRouter = () => {
      window.clearInterval(loadingWidth);
      setTimeout(() => {
        router.push("/guest");
      }, 2000);
    };
    const handleDrop = (e) => {
      console.log(e);
      //const file = e.dataTransfer.files[0];
      /* const fileSize = file.size / 1024 / 1024;
      if (fileSize < 10) {
        toggleLoading();
      } else {
        console.log("Error");
        console.log(`${fileSize / 1048576}`);
        alert("檔案大小超出限制的10MB");
      } */
    };

    return {
      isActive,
      toggleActive,
      handleDrop,
      isLoading,
      toggleLoading,
      loadingWidth,
    };
  },
};
</script>

<style lang="scss">
.uploadFile {
  width: 80%;
  padding: 50px;
  margin: 0 auto;
  border: 5px dashed #0b7d77;
}
.w-360 {
  width: 360px;
}
.selectFile {
  width: 360px;
  background-color: #0b7d77;
  border-radius: 8px;
  color: white;
}
.selectFile label :hover {
  cursor: pointer;
}
.selectFile span {
  padding: 10px;
}
.hide {
  display: none;
}
.show {
  display: block;
}

.active-dropzone {
  background: #cee5e4;
}
.selectFile label {
  cursor: pointer;
}
.active-loading {
  display: block;
  color: white;
  background: #096561;
}

.uploadInput {
  display: none;
}
</style>
