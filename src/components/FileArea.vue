<template>
  <div class="d-flex flex-column">
    <div class="mx-auto">
      <img src="@/assets/img/Addfile.svg" alt="" />
    </div>
    <div class="mx-auto text-center">
      <p>將檔案拖曳至這裡，或</p>
      <div class="w-360 selectFile position-relative">
        <label
          @change="toggleActive(), handleDrop(e)"
          @click="uploadSign"
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
        ref="inputDOM"
        accept="image/*"
        @change="previewSign"
      />
      <p class="text-success">檔案大小10MB以內，檔案格式為PDF、JPG 或 PNG</p>
      <img ref="showSign" width="250" height="150" style="border: 1px solid" />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "FileArea",
  setup() {
    const isActive = ref(false);
    const isLoading = ref(false);
    const loadingWidth = ref(0);
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
          loadingWidth.value = 0;
        }
      }, 1000);
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
    //預覽上傳的簽名檔
    const inputDOM = ref(null);
    const uploadSign = (e) => {
      //console.log(e.target);
    };
    const showSign = ref(null);
    let newSign;
    const previewSign = (e) => {
      console.log(e.target);
      //showSign.value.src = newSign;
    };

    return {
      isActive,
      toggleActive,
      handleDrop,
      isLoading,
      toggleLoading,
      loadingWidth,
      previewSign,
      uploadSign,
      inputDOM,
    };
  },
};
</script>
<style lang="scss">
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
