<template>
  <div class="d-flex">
    <img src="@/assets/img/wrong.svg" alt="" />
    <div class="flex-column align-items-center">
      <h3>您的檔案無法上傳</h3>
      <p>
        請重新上傳檔案。確認檔案大小在10Mb以內，檔案格式為PDF、IMG。
        若還是無法上傳檔案，請聯繫123456@gmail.com
      </p>
      <button type="button" class="bg-success">
        <RouterLink to="/" class="text-white">返回首頁</RouterLink>
      </button>
    </div>
  </div>
</template>
