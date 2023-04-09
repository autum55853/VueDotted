import { defineStore } from "pinia";

export const useDataStore = defineStore("dataStore", () => {
  //ref,function,computed
  //state,actions,getters

  const fontFamily = [
    { id: 1, fontName: "思源黑體", content: "notoSans" },
    { id: 2, fontName: "思源宋體", content: "notoSerif" },
    { id: 3, fontName: "辰於落燕體", content: "chenYuluoyan" },
  ];

  return { fontFamily };
});
