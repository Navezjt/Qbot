var F=Object.defineProperty;var _=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var b=(e,o,t)=>o in e?F(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,w=(e,o)=>{for(var t in o||(o={}))y.call(o,t)&&b(e,t,o[t]);if(_)for(var t of _(o))C.call(o,t)&&b(e,t,o[t]);return e};import{_ as E,b as h}from"./index.667ceb38.js";import{v as x}from"./formExtend.1e201d8e.js";import{k as D,y as m,z as S,F as V,H as s,C as a,B as r,b as g,r as k,j as A,N as j,O as N,S as d}from"./element-plus.5733ce57.js";const I=()=>{const{login:e}=h();let o=g({name:"admin",pwd:"admin"});const t=k(null),c=u=>{u.key==="Enter"&&p()},p=async()=>{let{name:u,pwd:n}=o;!await x(t)||(await e({username:u,password:n}),A({title:"\u6B22\u8FCE",message:"\u6B22\u8FCE\u56DE\u6765",type:"success"}))},f=g({name:[{validator:(u,n,l)=>{if(!n)return l(new Error("\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A"));l()},trigger:"blur"}],pwd:[{validator:(u,n,l)=>{if(!n)return l(new Error("\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"));l()},trigger:"blur"}]});return{form:o,onSubmit:p,enterSubmit:c,rules:f,ruleForm:t}},L=D({name:"Login",setup(){return w({labelCol:{span:4},wrapperCol:{span:14}},I())}}),v=e=>(j("data-v-65e2cbf6"),e=e(),N(),e),$={class:"w-screen h-screen bg-gray-800"},U=v(()=>s("h3",{class:"text-2xl font-semibold text-gray-100 text-center mb-6"},"\u7CFB\u7EDF\u767B\u9646",-1)),z=d("\u767B\u5F55"),H={class:"flex justify-between"},K=v(()=>s("div",{class:"text-gray-300"},[s("p",{class:"leading-6 text-sm"},[s("span",{class:"w-24 inline-block"},"\u8D26\u53F7: admin"),d(" \u5BC6\u7801: admin")]),s("p",{class:"leading-6 text-sm"},[s("span",{class:"w-24 inline-block"},"\u8D26\u53F7: dev"),d(" \u5BC6\u7801: dev")]),s("p",{class:"leading-6 text-sm"},[s("span",{class:"w-24 inline-block"},"\u8D26\u53F7: test"),d(" \u5BC6\u7801: test")])],-1)),O=d("\u7B2C\u4E09\u65B9\u767B\u5F55");function R(e,o,t,c,p,f){const u=m("el-input"),n=m("el-form-item"),l=m("el-button"),B=m("el-form");return S(),V("div",$,[s("div",{class:"layout-login",onKeyup:o[2]||(o[2]=(...i)=>e.enterSubmit&&e.enterSubmit(...i))},[U,a(B,{ref:"ruleForm","label-position":"right","label-width":"80px",model:e.form,rules:e.rules},{default:r(()=>[a(n,{class:"mb-6 -ml-20",prop:"name"},{default:r(()=>[a(u,{modelValue:e.form.name,"onUpdate:modelValue":o[0]||(o[0]=i=>e.form.name=i),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D","prefix-icon":"el-icon-user"},null,8,["modelValue"])]),_:1}),a(n,{class:"mb-6 -ml-20",prop:"pwd"},{default:r(()=>[a(u,{modelValue:e.form.pwd,"onUpdate:modelValue":o[1]||(o[1]=i=>e.form.pwd=i),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801","prefix-icon":"el-icon-lock","show-password":""},null,8,["modelValue"])]),_:1}),a(n,{class:"mb-6 -ml-20"},{default:r(()=>[a(l,{type:"primary",class:"w-full",onClick:e.onSubmit},{default:r(()=>[z]),_:1},8,["onClick"])]),_:1}),s("div",H,[K,s("div",null,[a(l,{type:"primary"},{default:r(()=>[O]),_:1})])])]),_:1},8,["model","rules"])],32)])}var M=E(L,[["render",R],["__scopeId","data-v-65e2cbf6"]]);export{M as default};