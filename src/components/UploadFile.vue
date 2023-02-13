<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid d-flex">
      <div>←返回檔案總管</div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">個人與偏好設定</a></li>
          <li><a class="dropdown-item" href="#">簽屬人清單</a></li>
          <li><a class="dropdown-item" href="#">登出</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="bannerStep my-4">
    <ul class="mx-auto d-flex justify-content-around w-60">
      <li class="mx-2"><span class="mx-2">1</span> 成功上傳檔案</li>
      <li class="mx-2"><span class="mx-2">2</span>加入簽名檔</li>
      <li class="mx-2"><span class="mx-2">3</span>確認檔案</li>
      <li class="mx-2"><span class="mx-2">4</span>下載檔案</li>
    </ul>
  </div>
  <div class="d-flex">
    <section class="pdfpreview w-70">PDF檔案預覽頁面</section>
    <aside class="w-30 mx-auto">
      <h5>我的簽名</h5>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-white border border-2 p-2 w-70"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        創建簽名檔
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>
<style lang="scss">
li {
  list-style: none;
}
.bannerStep {
  width: 100%;
}
.w-30 {
  width: 30%;
}
.w-70 {
  width: 70%;
}
.w-60 {
  max-width: 60%;
}
</style>
<script></script>
