import{R as w,_ as f,r,o as _,c as p,a as t,b as c,w as d,d as m,e as x,n as g,f as D,g as v,u as F,h as L,F as y,t as b,m as S,p as A,i as R}from"./index-b22b3926.js";import{_ as k}from"./Logo-6ad6ddf9.js";const I={components:{RouterLink:w}},N={class:"border-bottom border-3"},C={class:"navbar navbar-light"},P={class:"container-fluid"},U=t("img",{src:k,alt:"",width:"150",height:"100"},null,-1),V=t("h2",{class:"fw-bold"},"快速省時的電子簽署工具",-1),B={type:"button",class:"login mx-2 bg-white border-0"},T={type:"button",class:"mx-2 p-2 register"};function z(n,o,a,e,i,l){const s=r("RouterLink");return _(),p("div",N,[t("nav",C,[t("div",P,[c(s,{to:"/",class:"navbar-brand"},{default:d(()=>[U]),_:1}),V,t("div",null,[t("button",B,[c(s,{to:"login",class:"btnText clearDecoration fs-6 m-3 p-2"},{default:d(()=>[m("登入")]),_:1})]),t("button",T,[c(s,{to:"regist",class:"btnText fs-6 px-3 clearDecoration"},{default:d(()=>[m("註冊")]),_:1})])])])])])}const G=f(I,[["render",z]]),M=""+new URL("Addfile-d604731e.svg",import.meta.url).href;const j={name:"DropZone",setup(){const n=x(!1),o=x(!1),a=x(0),e=F(),i=()=>{n.value=!n.value},l=()=>{o.value=!o.value,console.log("上傳中"),a.value=window.setInterval(()=>{a.value+=20,console.log(a.value),a.value>=100&&(s(),a.value=0)},3e3)},s=()=>{window.clearInterval(a),setTimeout(()=>{e.push("/guest")},2e3)};return{isActive:n,toggleActive:i,handleDrop:h=>{console.log(h)},isLoading:o,toggleLoading:l,loadingWidth:a}}},W=t("div",{class:"mx-auto"},[t("img",{src:M,alt:""})],-1),E={class:"mx-auto text-center"},J=t("p",null,"將檔案拖曳至這裡，或",-1),Z={class:"w-360 selectFile position-relative"},q=t("p",{class:"p-2 position-absolute top-50 start-50 translate-middle"}," 上傳中... ",-1),H=t("input",{class:"uploadInput",id:"file",type:"file",accept:"text/jpg,.pdf,.png"},null,-1),K=t("p",{class:"text-success"},"檔案大小10MB以內，檔案格式為PDF、JPG 或 PNG",-1);function O(n,o,a,e,i,l){return _(),p("div",{onDragenter:o[1]||(o[1]=v((...s)=>e.toggleActive&&e.toggleActive(...s),["prevent"])),onDragleave:o[2]||(o[2]=v((...s)=>e.toggleActive&&e.toggleActive(...s),["prevent"])),onDragover:o[3]||(o[3]=v(()=>{},["prevent"])),onDrop:o[4]||(o[4]=v((...s)=>e.handleDrop&&e.handleDrop(...s),["prevent"])),class:g([{"active-dropzone":e.isActive},"uploadFile d-flex flex-column my-5 pt-5 mx-auto"])},[W,t("div",E,[J,t("div",Z,[t("label",{onChange:o[0]||(o[0]=s=>(e.toggleActive(),e.handleDrop(n.e))),for:"file",class:g(["w-360 py-2",{hide:e.isLoading}])},"選擇檔案",34),t("div",{class:g(["hide w-360",{show:e.isLoading}])},[t("span",{style:D({width:e.loadingWidth+"%"}),class:g({"active-loading":e.isLoading})},null,6),q],2)]),H,K])],34)}const Q=f(j,[["render",O]]);const X={props:{steps:{type:Array}}},Y={class:"card-body"},tt={class:"text-success text-center border-success"},et={class:"card-title my-3 fw-bold"},st={class:"card-text"},ot=["src"];function nt(n,o,a,e,i,l){return _(!0),p(y,null,L(a.steps,(s,u)=>(_(),p("div",{class:"card border-0",key:u},[t("div",Y,[t("span",tt,b(s.id),1),t("h5",et,b(s.title),1),t("p",st,b(s.content),1)]),t("img",{src:s.image,class:"card-img-top",alt:"..."},null,8,ot)]))),128)}const at=f(X,[["render",nt]]);const ct={components:{FrontNavbar:G,UploadFile:Q,StepsCard:at},setup(){return{steps:[{id:1,title:"上傳檔案",content:"選擇PDF或是IMG檔案",image:"./src/assets/img/File-upload.svg"},{id:2,title:"加入簽名檔",content:"手寫、輸入或是上傳簽名檔",image:"./src/assets/img/Signing.svg"},{id:3,title:"下載與傳送",content:"完成簽署可立即傳送檔案給對方",image:"./src/assets/img/Sending.svg"}]}}},it=n=>(A("data-v-c3e4e9fa"),n=n(),R(),n),lt={class:"stepContainer"},rt=it(()=>t("h3",{class:"text-center mb-5"},"輕鬆幾步驟，完成您的簽署",-1)),dt={class:"step d-flex justify-content-around"};function _t(n,o,a,e,i,l){const s=r("FrontNavbar"),u=r("Upload-file"),h=r("Steps-card"),$=r("RouterLink");return _(),p(y,null,[c(s),c(u),t("div",lt,[rt,t("div",dt,[c(h,S(e.steps,{steps:e.steps}),null,16,["steps"])])]),c($,{to:"uploaderror",class:"text-success"},{default:d(()=>[m("檔案上傳錯誤")]),_:1}),c($,{to:"connecterror",class:"text-success"},{default:d(()=>[m("連線錯誤")]),_:1})],64)}const gt=f(ct,[["render",_t],["__scopeId","data-v-c3e4e9fa"]]);export{gt as default};
