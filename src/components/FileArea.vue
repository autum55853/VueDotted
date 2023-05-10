<template>
  <div v-if="showPicture" class="showSign">
    <div class="btnChange d-flex justify-content-end">
      <span>更正</span>
      <span>清除</span>
    </div>
    <img :src="showPicture" alt="" />
  </div>
  <div class="d-flex flex-column" v-else>
    <div class="mx-auto">
      <img src="@/assets/img/Addfile.svg" alt="" />
    </div>
    <div class="mx-auto text-center">
      <div class="w-360 selectFile position-relative">
        <label
          @change="toggleActive(), handleDrop(e)"
          @click="uploadSign"
          for="file"
          class="w-360 py-2"
          >選擇檔案</label
        >
      </div>

      <input
        class="uploadInput"
        id="file"
        type="file"
        ref="inputDOM"
        accept="image/*"
        @change="previewImage"
      />
      <p class="text-success">檔案大小10MB以內，檔案格式為JPG 或 PNG</p>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useSignature } from "@/stores/signatureStore.js";
export default {
  name: "FileArea",
  setup() {
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

    //showImage預覽上傳的簽名檔
    const showPicture = ref(null);
    let file;
    let sign = useSignature();
    const previewImage = (data) => {
      file = data.target.files[0];
      //console.log(file);
      const reader = new FileReader();
      // 轉換成 DataURL
      reader.readAsDataURL(file);
      reader.onload = async function () {
        //console.log("Your Image:", reader.result);
        showPicture.value = reader.result;
        sign.mySign = reader.result;
        sign.isSign = true;
      }; //end: onloadend
    };

    return {
      handleDrop,
      showPicture,
      previewImage,
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

.selectFile label {
  cursor: pointer;
}

.uploadInput {
  display: none;
}
.btnChange span {
  color: #0b7d77;
  margin: 0px 5px;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
}
</style>
