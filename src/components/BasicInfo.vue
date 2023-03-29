<template>
  <div class="mb-5">
    <h4>基本資料</h4>
    <input
      type="text"
      class="basicInfo w-300 guestBorder"
      placeholder="請輸入您的姓名"
    />
    <input
      type="email"
      class="basicInfo w-300 guestBorder"
      placeholder="請輸入您的電子信箱"
    />
  </div>
</template>
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
