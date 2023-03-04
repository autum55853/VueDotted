<template>
  <FrontNavbar></FrontNavbar>
  <upload-file></upload-file>
  <div class="stepContainer">
    <h3 class="text-center">輕鬆幾步驟，完成您的簽署</h3>
    <div class="step d-flex justify-content-around">
      <steps-card :props="steps"></steps-card>
    </div>
  </div>

  <RouterLink to="uploaderror" class="text-success">檔案上傳錯誤</RouterLink>
  <RouterLink to="connecterror" class="text-success">連線錯誤</RouterLink>
</template>

<script>
//匯入 被封裝的元件
import FrontNavbar from "@/components/FrontNavbar.vue";
import UploadFile from "@/components/UploadFile.vue";
import StepsCard from "@/components/StepsCard.vue";

export default {
  components: {
    FrontNavbar,
    UploadFile,
    StepsCard,
  },
  setup() {
    const steps = [
      {
        id: 1,
        title: "上傳檔案",
        content: "選擇PDF或是IMG檔案",
        image: "@/assets/img/File-upload.svg",
      },
      {
        id: 2,
        title: "加入簽名檔",
        content: "手寫、輸入或是上傳簽名檔",
        image: "@/assets/img/Signing.svg",
      },
      {
        id: 3,
        title: "下載與傳送",
        content: "完成簽署可立即傳送檔案給對方",
        image: "@/assets/img/Sending.svg",
      },
    ];

    return { steps };
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 30px;
}
</style>
