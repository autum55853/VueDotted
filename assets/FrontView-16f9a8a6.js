import{R as b,_ as g,r as i,o as d,c as p,a as n,b as a,w as l,d as u,e as F,f as _,n as D,g as y,h as A,F as h,t as f,p as N,i as k}from"./index-6a2dd504.js";import{_ as w}from"./Logo-899c8973.js";const S={components:{RouterLink:b}},V={class:"navbar navbar-light bg-light"},L={class:"container-fluid"},R=n("img",{src:w,alt:"",width:"150",height:"100"},null,-1),C=n("h2",null,"快速省時的電子簽署工具",-1);function I(t,o,r,e,c,v){const s=i("RouterLink");return d(),p("nav",V,[n("div",L,[a(s,{to:"/",class:"navbar-brand"},{default:l(()=>[R]),_:1}),C,n("div",null,[a(s,{to:"login",class:"px-3"},{default:l(()=>[u("登入")]),_:1}),a(s,{to:"regist",class:"px-3"},{default:l(()=>[u("註冊")]),_:1})])])])}const B=g(S,[["render",I]]),P="/VueDotted/assets/Addfile-d604731e.svg";const G={name:"DropZone",setup(){const t=F(!1);return{isActive:t,toggleActive:()=>{t.value=!t.value},handleDrop:e=>{console.log(e)}}}},M=y('<div class="mx-auto"><img src="'+P+'" alt=""></div><div class="mx-auto text-center"><p>將檔案拖曳至這裡，或</p><label for="file" class="selectFile text-white border border-3 bg-success rounded-3 p-2">選擇檔案</label><input id="file" type="file" accept="text/jpg,.pdf,.png"><p class="text-success">檔案大小10MB以內，檔案格式為PDF、JPG 或 PNG</p></div>',2),j=[M];function z(t,o,r,e,c,v){return d(),p("div",{onDragenter:o[0]||(o[0]=_((...s)=>e.toggleActive&&e.toggleActive(...s),["prevent"])),onDragleave:o[1]||(o[1]=_((...s)=>e.toggleActive&&e.toggleActive(...s),["prevent"])),onDragover:o[2]||(o[2]=_(()=>{},["prevent"])),onDrop:o[3]||(o[3]=_((...s)=>e.handleDrop&&e.handleDrop(...s),["prevent"])),class:D([{"active-dropzone":e.isActive},"uploadFile d-flex flex-column my-5 pt-5 mx-auto"])},j,34)}const U=g(G,[["render",z]]),E={setup(){return{steps:{props:["props"],setup(o){const{step1:r,step2:e,step3:c}=o;return console.log(r,e,c),{step1:r,step2:e,step3:c}}}}}},J={class:"card-body"},T={class:"card-title"},Z={class:"card-text"},q=["src"];function H(t,o,r,e,c,v){return d(!0),p(h,null,A(e.steps,s=>(d(),p("div",{class:"card",key:s[t.i].id},[n("div",J,[n("p",null,f(s[t.i].id),1),n("h5",T,f(s[t.i].title),1),n("p",Z,f(s[t.i].content),1)]),n("img",{src:s[t.i].image,class:"card-img-top",alt:"..."},null,8,q)]))),128)}const K=g(E,[["render",H]]);const O={components:{FrontNavbar:B,UploadFile:U,StepsCard:K},setup(){return{steps:[{id:1,title:"上傳檔案",content:"選擇PDF或是IMG檔案",image:"@/assets/img/File-upload.svg"},{id:2,title:"加入簽名檔",content:"手寫、輸入或是上傳簽名檔",image:"@/assets/img/Signing.svg"},{id:3,title:"下載與傳送",content:"完成簽署可立即傳送檔案給對方",image:"@/assets/img/Sending.svg"}]}}},Q=t=>(N("data-v-2c199917"),t=t(),k(),t),W={class:"stepContainer"},X=Q(()=>n("h3",{class:"text-center"},"輕鬆幾步驟，完成您的簽署",-1)),Y={class:"step d-flex justify-content-around"};function tt(t,o,r,e,c,v){const s=i("FrontNavbar"),$=i("upload-file"),x=i("steps-card"),m=i("RouterLink");return d(),p(h,null,[a(s),a($),n("div",W,[X,n("div",Y,[a(x,{props:e.steps},null,8,["props"])])]),a(m,{to:"uploaderror",class:"text-success"},{default:l(()=>[u("檔案上傳錯誤")]),_:1}),a(m,{to:"connecterror",class:"text-success"},{default:l(()=>[u("連線錯誤")]),_:1})],64)}const ot=g(O,[["render",tt],["__scopeId","data-v-2c199917"]]);export{ot as default};
