import{R as x,_ as u,r as c,o as _,c as i,a as t,b as e,w as n,d as a,e as $,F as b,t as p,m as y,p as F,f as S}from"./index-25409e90.js";import{_ as w}from"./Logo-6ad6ddf9.js";import{U as k}from"./UploadFile-6ee99b14.js";const N={components:{RouterLink:x}},C={class:"border-bottom border-3"},L={class:"navbar navbar-light"},R={class:"container-fluid"},D=t("img",{src:w,alt:"",width:"150",height:"100"},null,-1),I=t("h2",{class:"fw-bold"},"快速省時的電子簽署工具",-1),V={type:"button",class:"login mx-2 bg-white border-0"},T={type:"button",class:"mx-2 p-2 register"},U={type:"button",class:"mx-2 p-2 register"};function B(o,m,d,r,f,g){const s=c("RouterLink");return _(),i("div",C,[t("nav",L,[t("div",R,[e(s,{to:"/",class:"navbar-brand"},{default:n(()=>[D]),_:1}),I,t("div",null,[t("button",V,[e(s,{to:"login",class:"btnText clearDecoration fs-6 m-3 p-2"},{default:n(()=>[a("登入")]),_:1})]),t("button",T,[e(s,{to:"regist",class:"btnText fs-6 px-3 clearDecoration"},{default:n(()=>[a("註冊")]),_:1})]),t("button",U,[e(s,{to:"canvas",class:"btnText fs-6 px-3 clearDecoration"},{default:n(()=>[a("Canvas功能頁")]),_:1})])])])])])}const P=u(N,[["render",B]]);const j={props:{steps:{type:Array}}},A={class:"card-body"},E={class:"text-success text-center border-success"},G={class:"card-title my-3 fw-bold"},M={class:"card-text"},q=["src"];function z(o,m,d,r,f,g){return _(!0),i(b,null,$(d.steps,(s,l)=>(_(),i("div",{class:"card border-0",key:l},[t("div",A,[t("span",E,p(s.id),1),t("h5",G,p(s.title),1),t("p",M,p(s.content),1)]),t("img",{src:s.image,class:"card-img-top",alt:"..."},null,8,q)]))),128)}const H=u(j,[["render",z]]);const J={components:{FrontNavbar:P,UploadFile:k,StepsCard:H},setup(){return{steps:[{id:1,title:"上傳檔案",content:"選擇PDF或是IMG檔案",image:"/src/assets/img/File-upload.svg"},{id:2,title:"加入簽名檔",content:"手寫、輸入或是上傳簽名檔",image:"/src/assets/img/Signing.svg"},{id:3,title:"下載與傳送",content:"完成簽署可立即傳送檔案給對方",image:"/src/assets/img/Sending.svg"}]}}},K=o=>(F("data-v-48600fc4"),o=o(),S(),o),O={class:"stepContainer"},Q=K(()=>t("h3",{class:"text-center mb-5"},"輕鬆幾步驟，完成您的簽署",-1)),W={class:"step d-flex justify-content-around"};function X(o,m,d,r,f,g){const s=c("FrontNavbar"),l=c("Upload-file"),v=c("Steps-card"),h=c("RouterLink");return _(),i(b,null,[e(s),e(l),t("div",O,[Q,t("div",W,[e(v,y(r.steps,{steps:r.steps}),null,16,["steps"])])]),e(h,{to:"uploaderror",class:"text-success"},{default:n(()=>[a("檔案上傳錯誤")]),_:1}),e(h,{to:"connecterror",class:"text-success"},{default:n(()=>[a("連線錯誤")]),_:1})],64)}const st=u(J,[["render",X],["__scopeId","data-v-48600fc4"]]);export{st as default};