<template>
  <FrontNavbar></FrontNavbar>
  <div class="uploadFile d-flex flex-column my-5 pt-5 mx-auto">
    <div class="mx-auto">
      <img src="@/assets/img/Addfile.svg" alt="" />
    </div>
    <div class="mx-auto text-center">
      <p>將檔案拖曳至這裡，或</p>
      <button
        type="button"
        class="selectFile btn btn-success text-white"
        @click="$refs.file.click()"
      >
        選擇檔案
      </button>
      <input
        ref="file"
        type="file"
        v-show="false"
        v-on:change="handleFileUpload()"
        accept="text/jpg,.pdf,.png"
      />
      <p class="text-success">檔案大小10MB以內，檔案格式為PDF、JPG 或 PNG</p>
    </div>
  </div>

  <div class="stepContainer">
    <h3 class="text-center">輕鬆幾步驟，完成您的簽署</h3>
    <div class="step d-flex justify-content-around">
      <div class="card">
        <div class="card-body">
          <p>1</p>
          <h5 class="card-title">上傳檔案</h5>
          <p class="card-text">選擇PDF檔或是IMG檔</p>
        </div>
        <img
          src="@/assets/img/File-upload.svg"
          class="card-img-top"
          alt="..."
        />
      </div>
      <div class="card">
        <div class="card-body">
          <p>2</p>
          <h5 class="card-title">加入簽名檔</h5>
          <p class="card-text">手寫、輸入或是上傳簽名檔</p>
        </div>
        <img src="@/assets/img/Signing.svg" class="card-img-top" alt="..." />
      </div>
      <div class="card">
        <div class="card-body">
          <p>3</p>
          <h5 class="card-title">下載與傳送</h5>
          <p class="card-text">完成簽署可立即傳送檔案給對方</p>
        </div>
        <img src="@/assets/img/Sending.svg" class="card-img-top" alt="..." />
      </div>
    </div>
  </div>
</template>

<script>
//匯入 被封裝的元件
import FrontNavbar from "@/components/FrontNavbar.vue";

export default {
  components: {
    FrontNavbar,
  },
  methods: {
    handleFileUpload: function () {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>

<style scoped lang="scss">
@import "bootstrap";
h1 {
  font-size: 30px;
}
.uploadFile {
  width: 80%;
  padding: 50px;
  margin: 0 auto;
  &:hover {
    border: 5px;
    border-color: #0b8652;
    border-style: dashed;
    background-color: #cee5e4;
  }
}
.selectFile {
  width: 420px;
}
</style>
