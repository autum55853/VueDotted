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
          <label for="file" class="w-360" v-text="loadingText"></label>
        </div>
      </div>

      <!--:style="{ width: loadingWidth + '%' }"-->
      <input
        @change="handleDrop"
        class="uploadInput"
        id="file"
        type="file"
        accept="image/*,.pdf"
      />
      <p class="text-success">
        檔案大小10MB以內，檔案格式為PDF、JPEG、JPG 或 PNG<br />且PDF不得有密碼設定
      </p>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSignature } from "@/stores/signatureStore.js";

export default {
  setup() {
    const sign = useSignature();
    const isActive = ref(false);
    const isLoading = ref(false);
    const loadingText = ref("選擇檔案");
    const loadingWidth = ref(0);
    const router = useRouter();
    const toggleActive = () => {
      isActive.value = !isActive.value;
    };
    const toggleLoading = () => {
      isLoading.value = !isLoading.value;
      loadingText.value = "上傳中";
      handleRouter();
    };

    const handleRouter = () => {
      router.push("/guest");
    };

    /* const handleDrop = (e) => {
      let file;
      let fileSize;
      let type = e.target.files[0].type.split("/");
      if (
        type[1] == "png" ||
        type[1] == "pdf" ||
        type[1] == "jpeg" ||
        type[1] == "jpg"
      ) {
        if (e.type == "change") {
          file = e.target.files[0];
          console.log(file);
          fileSize = file.size / 1024 / 1024;
          if (fileSize < 10) {
            toggleLoading();

            const readBlob = (file) => {
              return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.addEventListener("load", () =>
                  resolve((sign.myPDF = reader.result))
                );
                //console.log(reader.result);
                reader.addEventListener("error", reject);
                reader.readAsDataURL(file);
                sign.isUpload = true;
                sign.myData = reader.result;
                //console.log(reader.result);
              });
            };
            readBlob(file);
          } else {
            console.log("Error");
            console.log(`${fileSize / 1048576}`);
            alert("檔案大小超出限制的10MB");
          }
        } else if (e.type == "drop") {
          file = e.dataTransfer.files[0];
          console.log(file);
          fileSize = file.size / 1024 / 1024;
          if (fileSize < 10) {
            toggleLoading();
            const readBlob = (file) => {
              return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.addEventListener("load", () =>
                  resolve((sign.myPDF = reader.result))
                );
                //console.log(reader.result);
                reader.addEventListener("error", reject);
                reader.readAsDataURL(file);
                sign.isUpload = true;
                sign.myData = reader.result;
                //console.log(reader.result);
              });
            };
            readBlob(file);
          } else {
            console.log("Error");
            console.log(`${fileSize / 1048576}`);
            alert("檔案大小超出限制的10MB");
          }
        }
      } else {
        console.log("請確認檔案格式為PDF 或PNG");
      }
    }; */
    const handleDrop = (e) => {
      let file;
      let fileSize;
      let type;
      console.log(e);
      if (e.type == "change") {
        file = e.target.files[0];
        type = e.target.files[0].type.split("/");

        console.log(type);
        fileSize = file.size / 1024 / 1024;
        if (fileSize < 10) {
          toggleLoading();

          const readBlob = (file) => {
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.addEventListener("load", () =>
                resolve((sign.myPDF = reader.result))
              );
              //console.log(reader.result);
              reader.addEventListener("error", reject);
              reader.readAsDataURL(file);
              sign.isUpload = true;
              sign.myData = reader.result;
              //console.log(reader.result);
            });
          };
          readBlob(file);
        } else {
          console.log("Error");
          console.log(`${fileSize / 1048576}`);
          alert("檔案大小超出限制的10MB");
        }
      } else if (e.type == "drop") {
        file = e.dataTransfer.files[0];
        console.log(file);
        fileSize = file.size / 1024 / 1024;
        if (fileSize < 10) {
          toggleLoading();
          const readBlob = (file) => {
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.addEventListener("load", () =>
                resolve((sign.myPDF = reader.result))
              );
              //console.log(reader.result);
              reader.addEventListener("error", reject);
              reader.readAsDataURL(file);
              sign.isUpload = true;
              sign.myData = reader.result;
              //console.log(reader.result);
            });
          };
          readBlob(file);
        } else {
          console.log("Error");
          console.log(`${fileSize / 1048576}`);
          alert("檔案大小超出限制的10MB");
        }
      }
    };

    return {
      isActive,
      toggleActive,
      handleDrop,
      isLoading,
      toggleLoading,
      loadingWidth,
      loadingText,
    };
  },
};
</script>
<style lang="scss" scoped>
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
