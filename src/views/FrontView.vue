<template>
  <FrontNavbar></FrontNavbar>
  <upload-file></upload-file>
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
import UploadFile from "@/components/UploadFile.vue";

export default {
  components: {
    FrontNavbar,
    UploadFile,
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 30px;
}
</style>
