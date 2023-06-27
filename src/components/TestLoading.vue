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
      <div class="w-360 selectFile">
        <div
          class="loadingBar py-2"
          :class="[isLoading === true ? 'activeLoading' : '']"
        >
          <label
            @change="toggleActive"
            for="file"
            class="w-360"
            v-text="loadingText"
          ></label>
          <!--  <span class="hide loadingFile py-2" :class="{ show: isLoading }">
          上傳中...
        </span> -->
        </div>
      </div>

      <!--:style="{ width: loadingWidth + '%' }"-->
      <button
        @click="toggleLoading"
        class="uploadInput"
        id="file"
        type="file"
        accept="text/jpg,.pdf,.png"
      />
      <p class="text-success">
        檔案大小10MB以內，檔案格式為PDF、JPG 或 PNG<br />且PDF不得有密碼設定
      </p>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const isActive = ref(false);
    const isLoading = ref(false);
    const loadingWidth = ref(0);
    const loadingText = ref("選擇檔案");
    const toggleActive = () => {
      isActive.value = !isActive.value;
    };
    const toggleLoading = () => {
      isLoading.value = true;
      loadingText.value = "上傳中";
      loadingWidth.value = window.setInterval(() => {
        loadingWidth.value += 30;
        console.log(loadingWidth.value);
        if (loadingWidth.value >= 100) {
          loadingWidth.value = 0;
        }
      }, 1000);
    };

    return {
      isActive,
      toggleActive,
      isLoading,
      toggleLoading,
      loadingWidth,
      loadingText,
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
  border-radius: 10px;
  background-color: #0b7d77;
}
.loadingBar {
  border-radius: 10px;
  color: white;
}

.activeLoading {
  display: block;
  height: 40px;
  padding: 8px 0px;
  background-color: #096561;
  animation: loading linear 3s;
}
.selectFile label :hover {
  cursor: pointer;
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

.uploadInput {
  display: none;
}
@keyframes loading {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>
