<template>
  <div class="mb-5">
    <h4>**基本資料(必填)</h4>
    <input
      v-model="guestName"
      type="text"
      class="basicInfo w-300 guestBorder"
      placeholder="請輸入您的姓名"
      @change="saveUser"
    />
    <input
      v-model="guestEmail"
      type="email"
      class="basicInfo w-300 guestBorder"
      placeholder="請輸入您的電子信箱"
      @change="saveUser"
    />
  </div>
</template>
<script>
import { useUserStore } from "@/stores/userStore.js";
import { ref } from "vue";
export default {
  setup() {
    const userStore = useUserStore();
    const guestName = ref("");
    const guestEmail = ref("");
    const saveUser = () => {
      userStore.$patch({
        name: guestName.value,
        email: guestEmail.value,
      });
    };

    return {
      guestName,
      guestEmail,
      saveUser,
    };
  },
};
</script>
<style lang="scss">
.basicInfo {
  padding: 9px 12px;
  margin-bottom: 20px;
}
.guestBorder {
  border-radius: 4px;
  border-color: #c5c7d0;
}
.w-300 {
  width: 300px;
}
</style>
