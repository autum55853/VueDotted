import{_,e as p,r as c,o as f,c as h,a as s,b as t,w as n,f as x,k as d,v as m,d as o}from"./index-5c09f3b2.js";import{B as b}from"./BtnFromOthers-a20b0ef5.js";import{_ as v}from"./Logo-6ad6ddf9.js";const w=""+new URL("Management-c48e19c5.svg",import.meta.url).href;const g={components:{BtnFromOthers:b},setup(){return{user:p({})}}},y={class:"accountPage d-flex"},L={class:"d-flex flex-column w-50"},V={class:"mx-auto w-70"},k={class:"text-center border-gray mx-auto m-2"},B=s("img",{src:v,alt:"返回首頁",width:"150",height:"100"},null,-1),M={class:"mx-auto d-flex justify-content-evenly"},N={class:"mb-2 w-70 mx-auto border-top py-3 border-2"},R=s("div",{id:"emailHelp",class:"form-text mb-3"}," We'll never share your email with anyone else. ",-1),U=s("div",{class:"py-2"},[s("button",{type:"submit",class:"btn btn-success w-70"},"登入")],-1),C=s("div",{class:"w-50 bg-light"},[s("section",{class:"mx-auto"},[s("h3",{class:"text-center"},"登入至您的檔案總管"),s("img",{src:w,alt:"登入至您的檔案總管"})])],-1);function E(i,e,H,l,I,P){const a=c("RouterLink"),u=c("btn-from-others");return f(),h("div",y,[s("div",L,[s("section",V,[s("div",k,[t(a,{to:"/",class:"navbar-brand"},{default:n(()=>[B]),_:1}),s("div",M,[t(u)])]),s("form",{onSubmit:e[2]||(e[2]=x((...r)=>i.userLogin&&i.userLogin(...r),["prevent"])),class:"mx-auto py-3"},[s("div",N,[d(s("input",{type:"email",class:"form-control",id:"InputEmail","aria-describedby":"emailHelp",placeholder:"請輸入電子郵件","onUpdate:modelValue":e[0]||(e[0]=r=>l.user.email=r)},null,512),[[m,l.user.email]]),R,d(s("input",{type:"password",class:"form-control",id:"InputPassword",placeholder:"請輸入密碼","onUpdate:modelValue":e[1]||(e[1]=r=>l.user.password=r)},null,512),[[m,l.user.password]])]),t(a,{to:"forgotpassword",class:"text-success"},{default:n(()=>[o("忘記密碼")]),_:1}),U,t(a,{to:"dashboard/memember",class:"text-success"},{default:n(()=>[o("假裝登入成功，進入後台頁面")]),_:1}),o(" 還沒有帳戶?"),t(a,{to:"regist",class:"text-success"},{default:n(()=>[o("註冊")]),_:1}),o(" or"),t(a,{to:"guest",class:"text-success"},{default:n(()=>[o("進入訪客頁面")]),_:1})],32)])]),C])}const F=_(g,[["render",E]]);export{F as default};
