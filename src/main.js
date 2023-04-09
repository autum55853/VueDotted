import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faCircleCheck,
  faUserSecret,
  faPlus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faCircleCheck, faPlus, faUserPlus);

import App from "./App.vue";
import router from "./router";
import VuePdf from "vue3-pdfjs";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(VueAxios, axios);
app.use(VuePdf);
app.use(ElementPlus);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
