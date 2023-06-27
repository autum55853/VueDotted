import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import domtoimage from "dom-to-image";
import router from "./router";
import VuePdf from "vue3-pdfjs";
import { fabric } from "fabric";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { initFirebase } from "./config/firebaseConfiguration";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faPen,
  faTrashCan,
  faGripVertical,
  faEllipsisVertical,
  faCircleCheck,
  faUserSecret,
  faPlus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faPen,
  faTrashCan,
  faGripVertical,
  faEllipsisVertical,
  faUserSecret,
  faCircleCheck,
  faPlus,
  faUserPlus
);

const app = createApp(App);
const pinia = createPinia();
const env = import.meta.env;

app.use(pinia);
app.use(router);
app.use(env);
app.use(VueAxios, axios);
app.use(VuePdf);
app.use(domtoimage);
app.use(fabric);
app.component("font-awesome-icon", FontAwesomeIcon);
initFirebase();
app.mount("#app");
