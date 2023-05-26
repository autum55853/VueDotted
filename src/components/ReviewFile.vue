<template>
  <div class="bg-light">
    <nav class="navbar navbar-light">
      <div class="container-fluid d-flex">
        <slot name="guest"></slot>
        <slot name="memember"></slot>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">個人與偏好設定</a></li>
          <li><a class="dropdown-item" href="#">簽屬人清單</a></li>
          <li><a class="dropdown-item" href="#">登出</a></li>
        </ul>
      </div>
    </nav>
  </div>

  <div class="bannerStep border border-2 my-4">
    <ul class="m-3 mx-auto d-flex justify-content-between w-60">
      <li>
        <span class="mx-2 p-1 text-success">
          <font-awesome-icon icon="fa-solid fa-circle-check" size="xl" />
        </span>
        成功上傳檔案
      </li>
      <hr class="separateLine" />
      <li><span class="steps active-step">2</span>加入簽名檔</li>
      <hr class="separateLine" />
      <li><span class="steps">3</span>確認檔案</li>
      <hr class="separateLine" />
      <li><span class="steps">4</span>下載檔案</li>
    </ul>
  </div>
  <div class="reviewContent">
    <div class="d-flex justify-content-around">
      <div
        class="pdfpreview w-70"
        @dragenter="checkDrag"
        @dragleave="closDrag"
        @drop.prevent="putDownSign"
        @dragover.prevent
      >
        <pdf-preview></pdf-preview>
      </div>
      <div class="p-5 w-30 d-flex flex-column">
        <basic-info></basic-info>
        <!-- Button trigger modal -->
        <my-signing></my-signing>
        <invite-others></invite-others>
        <div class="nextStep d-flex align-items-end">
          <button
            type="button"
            class="btn btn-secondary"
            :disabled="!isAble"
            @submit.prevent="completedSign"
          >
            下一步
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import MySigning from "@/components/MySigning.vue";
import BasicInfo from "@/components/BasicInfo.vue";
import InviteOthers from "@/components/InviteOthers.vue";
import PdfPreview from "@/components/PdfPreview.vue";
import { storeToRefs } from "pinia";
import { useSignature } from "@/stores/signatureStore.js";

import { useRouter } from "vue-router";
export default {
  components: {
    MySigning,
    BasicInfo,
    InviteOthers,
    PdfPreview,
  },
  setup() {
    const isAble = ref(false);
    const signatureStore = useSignature;
    const { isComplete } = storeToRefs(signatureStore);

    const checkSignandBackInfo = () => {
      if (isComplete) {
        isAble.value = true;
      } else {
        isAble.value = false;
      }
    };

    //拖曳簽名檔到PDF
    const checkDrag = () => {
      console.log("成功drag");
    };
    const putDownSign = () => {
      console.log("完成簽名檔托放");
    };

    //點擊"下一步", 跳轉到完成頁面
    const router = useRouter();
    const completedSign = () => {
      router.push("/guest");
    };
    return {
      isAble,
      checkSignandBackInfo,
      completedSign,
      putDownSign,
      checkDrag,
    };
  },
};
</script>
<style lang="scss">
li {
  list-style: none;
}
.bannerStep {
  max-width: 100%;
  height: 100%;
}

.separateLine {
  position: relative;
  padding: 0 30px;
  width: 80px;
  border-top: 2px solid;
  ::before {
    content: "";
    position: absolute;
    top: 50%;
    border-left: 9999px solid #ccc;
    border-right: 9999px solid #ccc;
    right: -9999px;
    left: -9999px;
  }
}
.steps {
  display: inline-block;
  color: #676879;
  width: 28px;
  height: 28px;
  border: 3px solid #c5c7d0;
  border-radius: 99px;
  text-align: center;
  margin: 0px 5px;
}

.w-30 {
  width: 30%;
}
.w-70 {
  width: 70%;
}
.w-60 {
  max-width: 80%;
}
.reviewContent {
  max-width: 90%;
  margin: 0 auto;
}
.pdfpreview {
  max-height: 800px;
  overflow: scroll;
}
.nextStep {
  height: 200px;
  margin: 0 auto;
}
.nextStep button {
  padding: 8px 80px;
  &:hover {
    font-weight: bold;
  }
}
.active-step {
  background: #0b7d77;
  border-color: #cee5e4;
  color: #ffffff;
}
</style>
