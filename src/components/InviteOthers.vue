<template>
  <div class="w-300 mb-5 d-flex justify-content-between">
    <div>
      <h4>邀請簽署人</h4>
      <div class="form-check form-switch">
        <div class="d-flex justify-content-between">
          <span class="px-1">無簽署順序</span>
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />

          <span class="px-1">有簽署順序</span>
        </div>
        <div class="d-flex justify-content-between">
          <span>無期限</span>
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />

          <span>指定簽署期限</span>
        </div>
      </div>
    </div>
    <modal-invite-others></modal-invite-others>
  </div>
</template>
<style lang="scss">
.wh-50 {
  width: 50px;
  height: 50px;
}

.form-switch .form-check-input {
  margin-left: 0em;
}
.form-switch {
  padding-left: 0px;
}
</style>
<script>
import ModalInviteOthers from "@/components/ModalInviteOthers.vue";

export default {
  components: {
    ModalInviteOthers,
  },
  setup() {},
};
</script>
