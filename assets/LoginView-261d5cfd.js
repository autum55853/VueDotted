import{_ as p,e as f,r as c,o as b,c as h,a as s,b as e,w as n,f as v,k as d,v as m,d as o}from"./index-89554e87.js";import{L as x}from"./LoginNavbar-d75e726f.js";import{B as g}from"./BtnFromOthers-ad0f9ed6.js";import{_ as w}from"./Logo-6ad6ddf9.js";const y=""+new URL("Management-c48e19c5.svg",import.meta.url).href;const L={components:{LoginNavbar:x,BtnFromOthers:g},setup(){return{user:f({})}}},V={class:"accountPage d-flex"},N={class:"d-flex flex-column w-50"},k={class:"mx-auto w-70"},B={class:"text-center border-gray mx-auto m-2"},M=s("img",{src:w,alt:"",width:"150",height:"100"},null,-1),R={class:"mx-auto d-flex justify-content-evenly"},U={class:"mb-2 w-80 mx-auto border-top py-3 border-2"},C=s("div",{id:"emailHelp",class:"form-text mb-3"}," We'll never share your email with anyone else. ",-1),E=s("div",{class:"py-2"},[s("button",{type:"submit",class:"btn btn-success w-70"},"登入")],-1),H=s("div",{class:"w-50 bg-light"},[s("section",{class:"mx-auto"},[s("h3",{class:"text-center"},"登入至您的檔案總管"),s("img",{src:y,alt:"登入至您的檔案總管"})])],-1);function I(l,t,P,i,T,j){const u=c("LoginNavbar"),a=c("RouterLink"),_=c("btn-from-others");return b(),h("div",V,[s("div",N,[e(u),s("section",k,[s("div",B,[e(a,{to:"/",class:"navbar-brand"},{default:n(()=>[M]),_:1}),s("div",R,[e(_)])]),s("form",{onSubmit:t[2]||(t[2]=v((...r)=>l.userLogin&&l.userLogin(...r),["prevent"])),class:"mx-auto py-3"},[s("div",U,[d(s("input",{type:"email",class:"form-control",id:"InputEmail","aria-describedby":"emailHelp",placeholder:"請輸入電子郵件","onUpdate:modelValue":t[0]||(t[0]=r=>i.user.email=r)},null,512),[[m,i.user.email]]),C,d(s("input",{type:"password",class:"form-control",id:"InputPassword",placeholder:"請輸入密碼","onUpdate:modelValue":t[1]||(t[1]=r=>i.user.password=r)},null,512),[[m,i.user.password]])]),e(a,{to:"forgotpassword",class:"text-success"},{default:n(()=>[o("忘記密碼")]),_:1}),E,e(a,{to:"dashboard/memember",class:"text-success"},{default:n(()=>[o("假裝登入成功，進入後台頁面")]),_:1}),o(" 還沒有帳戶?"),e(a,{to:"regist",class:"text-success"},{default:n(()=>[o("註冊")]),_:1}),o(" or"),e(a,{to:"guest",class:"text-success"},{default:n(()=>[o("進入訪客頁面")]),_:1})],32)])]),H])}const W=p(L,[["render",I]]);export{W as default};
