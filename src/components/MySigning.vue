<template>
  <div class="mb-5">
    <h4>我的簽名</h4>
    <div v-if="mySign" class="yourSign d-flex">
      <div class="sign" draggable="true">
        <font-awesome-icon
          icon="fa-solid fa-grip-vertical"
          size="xl"
          style="color: #c5c7d0"
        />
        <img :src="mySign" alt="" />
      </div>

      <div class="align-self-center modify" @click="clickModify">
        <font-awesome-icon
          icon="fa-solid fa-ellipsis-vertical"
          size="xl"
          style="color: #c5c7d0"
        />
      </div>
      <div class="modify-list" ref="isModify">
        <ul>
          <li
            class="py-2 border-bottom border-gray-700 border-2"
            @click="modifySign"
          >
            <font-awesome-icon icon="fa-solid fa-pen" />修改簽名檔
          </li>
          <li class="py-2" @click="deleteSign">
            <font-awesome-icon icon="fa-solid fa-trash-can" />刪除
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      {{ signStatus }}
      <modal-my-signing></modal-my-signing>
    </div>
  </div>
</template>

<script>
import ModalMySigning from "@/components/ModalMySigning.vue";
import { useSignature } from "@/stores/signatureStore.js";
import { ref, watch } from "vue";
export default {
  components: {
    ModalMySigning,
  },
  setup() {
    const signStore = useSignature();
    const mySign = ref("");
    let signStatus;

    //監聽pinia的mySign
    watch(
      () => signStore.isSave, //如果修改/刪除簽名, store的狀態也要改變
      (e1, e2) => {
        console.log(e1, e2);
        signStatus = signStore.isSave;
        mySign.value = signStore.mySign;
      }
    );

    //切換"修改簽名檔"
    const isModify = ref(false);
    const clickModify = () => {
      console.log("要修改簽名");
      isModify.value = true;
    };
    const modifySign = () => {
      console.log("修改簽名");
    };
    const deleteSign = () => {
      console.log("刪除簽名");
    };

    return {
      mySign,
      signStatus,
      clickModify,
      modifySign,
      deleteSign,
    };
  },
};
</script>
<style lang="scss" scoped>
.isShow {
  display: block;
}
.isHide {
  display: none;
}
.yourSign {
  border: 3px solid #cee5e4;
  width: 70%;
  padding: 0px 8px;
  border-radius: 5%;
}
.sign:hover {
  cursor: pointer;
}
.sign img {
  width: 90%;
}
.modify {
  position: relative;
  &:hover {
    cursor: pointer;
  }
}
.modify-list {
  display: block;
  position: absolute;
  top: 30px;
  left: -50px;
  width: 200px;
  height: 100px;
  border: 2px solid #e6e9ef;
  border-radius: 8px;
  background-color: white;
  > ul {
    padding: 10px 20px;
  }
}
</style>
