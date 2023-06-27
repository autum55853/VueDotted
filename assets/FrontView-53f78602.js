import{R as k,_ as y,r as m,o as p,c as u,a as e,b as l,w as h,d as g,e as b,n as A,t as $,f as x,u as E,p as B,g as P,F as I,h as N,m as T}from"./index-b28abf5e.js";import{_ as z}from"./Logo-6ad6ddf9.js";import{u as M,_ as V}from"./Addfile-40feab0a.js";const G={components:{RouterLink:k}},j={class:"border-bottom border-3"},J={class:"navbar navbar-light"},O={class:"container-fluid"},W=e("img",{src:z,alt:"",width:"150",height:"100"},null,-1),q=e("h2",{class:"fw-bold"},"快速省時的電子簽署工具",-1),H={type:"button",class:"login mx-2 bg-white border-0"},K={type:"button",class:"mx-2 p-2 register"};function Q(t,s,a,o,f,v){const n=m("RouterLink");return p(),u("div",j,[e("nav",J,[e("div",O,[l(n,{to:"/",class:"navbar-brand"},{default:h(()=>[W]),_:1}),q,e("div",null,[e("button",H,[l(n,{to:"login",class:"btnText clearDecoration fs-6 m-3 p-2"},{default:h(()=>[g("登入")]),_:1})]),e("button",K,[l(n,{to:"regist",class:"btnText fs-6 px-3 clearDecoration"},{default:h(()=>[g("註冊")]),_:1})])])])])])}const X=y(G,[["render",Q]]);const Y={setup(){const t=M(),s=b(!1),a=b(!1),o=b("選擇檔案"),f=b(0),v=E(),n=()=>{s.value=!s.value},c=()=>{a.value=!a.value,o.value="上傳中",w()},w=()=>{v.push("/guest")};return{isActive:s,toggleActive:n,handleDrop:d=>{let i,_,U;console.log(d),d.type=="change"?(i=d.target.files[0],U=d.target.files[0].type.split("/"),console.log(U),_=i.size/1024/1024,_<10?(c(),(D=>new Promise((F,R)=>{const r=new FileReader;r.addEventListener("load",()=>F(t.myPDF=r.result)),r.addEventListener("error",R),r.readAsDataURL(D),t.isUpload=!0,t.myData=r.result}))(i)):(console.log("Error"),console.log(`${_/1048576}`),alert("檔案大小超出限制的10MB"))):d.type=="drop"&&(i=d.dataTransfer.files[0],console.log(i),_=i.size/1024/1024,_<10?(c(),(D=>new Promise((F,R)=>{const r=new FileReader;r.addEventListener("load",()=>F(t.myPDF=r.result)),r.addEventListener("error",R),r.readAsDataURL(D),t.isUpload=!0,t.myData=r.result}))(i)):(console.log("Error"),console.log(`${_/1048576}`),alert("檔案大小超出限制的10MB")))},isLoading:a,toggleLoading:c,loadingWidth:f,loadingText:o}}},S=t=>(B("data-v-09e93b29"),t=t(),P(),t),Z=S(()=>e("div",{class:"mx-auto"},[e("img",{src:V,alt:""})],-1)),ee={class:"mx-auto text-center"},te=S(()=>e("p",null,"將檔案拖曳至這裡，或",-1)),se={class:"w-360 selectFile"},oe=["textContent"],ne=S(()=>e("p",{class:"text-success"},[g(" 檔案大小10MB以內，檔案格式為PDF、JPEG、JPG 或 PNG"),e("br"),g("且PDF不得有密碼設定 ")],-1));function ae(t,s,a,o,f,v){return p(),u("div",{onDragenter:s[1]||(s[1]=x((...n)=>o.toggleActive&&o.toggleActive(...n),["prevent"])),onDragleave:s[2]||(s[2]=x((...n)=>o.toggleActive&&o.toggleActive(...n),["prevent"])),onDragover:s[3]||(s[3]=x(()=>{},["prevent"])),onDrop:s[4]||(s[4]=x((...n)=>o.handleDrop&&o.handleDrop(...n),["prevent"])),class:A([{"active-dropzone":o.isActive},"uploadFile d-flex flex-column my-5 pt-5 mx-auto"])},[Z,e("div",ee,[te,e("div",se,[e("div",{class:A(["loadingBar py-2",[o.isLoading===!0?"activeLoading":""]])},[e("label",{for:"file",class:"w-360",textContent:$(o.loadingText)},null,8,oe)],2)]),e("input",{onChange:s[0]||(s[0]=(...n)=>o.handleDrop&&o.handleDrop(...n)),class:"uploadInput",id:"file",type:"file",accept:"image/*,.pdf"},null,32),ne])],34)}const re=y(Y,[["render",ae],["__scopeId","data-v-09e93b29"]]);const le={inheritAttrs:!1,props:{steps:{type:Array}},setup(t){return{props:t,getImageUrl:a=>new URL(Object.assign({})[`./dir/${a.image}.svg`],self.location).href}}},ce={class:"d-flex justify-content-around"},ie={class:"card-body"},de={class:"text-success text-center border-success"},_e={class:"card-title my-3 fw-bold"},pe={class:"card-text"},ue=["src"];function ge(t,s,a,o,f,v){return p(),u("div",ce,[(p(!0),u(I,null,N(a.steps,(n,c)=>(p(),u("div",{class:"card border-0",key:c+1},[e("div",ie,[e("span",de,$(n.id),1),e("h5",_e,$(n.title),1),e("p",pe,$(n.content),1)]),e("img",{src:n.image,class:"card-img-top",alt:"..."},null,8,ue)]))),128))])}const fe=y(le,[["render",ge]]);const ve={components:{FrontNavbar:X,UploadFile:re,StepsCard:fe},setup(){const t=new URL(""+new URL("FileUpload-3697dc6c.svg",import.meta.url).href,self.location),s=new URL(""+new URL("SigningStep-b30d324f.svg",import.meta.url).href,self.location),a=new URL(""+new URL("SendingStep-4dc2bbe4.svg",import.meta.url).href,self.location);return{steps:[{id:1,title:"上傳檔案",content:"選擇PDF或是IMG檔案",image:`${t}`},{id:2,title:"加入簽名檔",content:"手寫、輸入或是上傳簽名檔",image:`${s}`},{id:3,title:"下載與傳送",content:"完成簽署可立即傳送檔案給對方",image:`${a}`}],FileUpload:t,SigningStep:s,SendingStep:a}}},me=t=>(B("data-v-bace733d"),t=t(),P(),t),he={class:"stepContainer"},be=me(()=>e("h3",{class:"text-center mb-5"},"輕鬆幾步驟，完成您的簽署",-1));function xe(t,s,a,o,f,v){const n=m("FrontNavbar"),c=m("Upload-file"),w=m("Steps-card"),L=m("RouterLink");return p(),u(I,null,[l(n),l(c),e("div",he,[be,l(w,T({class:"step"},o.steps,{steps:o.steps}),null,16,["steps"])]),l(L,{to:"uploaderror",class:"text-success"},{default:h(()=>[g("檔案上傳錯誤")]),_:1}),l(L,{to:"connecterror",class:"text-success"},{default:h(()=>[g("連線錯誤")]),_:1})],64)}const Le=y(ve,[["render",xe],["__scopeId","data-v-bace733d"]]);export{Le as default};
