<template>
  <FrontNavbar></FrontNavbar>
  <Upload-file></Upload-file>
  <div class="stepContainer">
    <h3 class="text-center mb-5">輕鬆幾步驟，完成您的簽署</h3>

    <Steps-card class="step" v-bind="steps" :steps="steps"></Steps-card>
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
    const FileUpload = new URL(
      "/src/assets/img/FileUpload.svg",
      import.meta.url
    );
    const SigningStep = new URL(
      "/src/assets/img/SigningStep.svg",
      import.meta.url
    );
    const SendingStep = new URL(
      "/src/assets/img/SendingStep.svg",
      import.meta.url
    );
    const steps = [
      {
        id: 1,
        title: "上傳檔案",
        content: "選擇PDF或是IMG檔案",
        image: `${FileUpload}`,
      },
      {
        id: 2,
        title: "加入簽名檔",
        content: "手寫、輸入或是上傳簽名檔",
        image: `${SigningStep}`,
      },
      {
        id: 3,
        title: "下載與傳送",
        content: "完成簽署可立即傳送檔案給對方",
        image: `${SendingStep}`,
      },
    ];

    return { steps, FileUpload, SigningStep, SendingStep };
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 30px;
}
.step {
  margin: 0 auto;
  max-width: 70%;
}
</style>
