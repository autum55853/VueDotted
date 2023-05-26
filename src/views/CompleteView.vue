<template>
  <div class="completeOuter">
    <div class="d-flex completeInner">
      <img src="@/assets/img/SharedGoals.svg" alt="檔案已就緒" />
      <div class="align-self-center">
        <h3 class="text-success fw-bold">恭喜您！檔案已就緒</h3>
        <p>現在您可以下載檔案或註冊會員，以體驗更多功能。</p>
        <div class="d-flex flex-column">
          <a download>
            <button
              type="button"
              class="btnText textWhite py-3 border rounded bg-success"
              @click="downloadData"
            >
              下載檔案
            </button>
          </a>

          <button type="button" class="mx-2 p-2 border-0 bg-white">
            <RouterLink to="regist" class="regist clearDecoration"
              >註冊</RouterLink
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useSignature } from "@/stores/signatureStore.js";
export default {
  setup() {
    const downloadData = ref(null);
    const data = useSignature;
    downloadData.value = data.mySign;
    return {
      downloadData,
    };
  },
};
</script>
<style lang="scss">
.completeOuter {
  position: relative;
  height: 100px;
}
.completeInner {
  position: absolute;
  top: 100%;
  left: 20%;
}
.btnText:hover {
  font-weight: bold;
}
.regist {
  color: #0b7d77;
}

.textWhite {
  color: white;
}
</style>
