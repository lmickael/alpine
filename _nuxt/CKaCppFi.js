import{u as d}from"./DH9npBgL.js";import{d as l,av as v,I as f,q as p,V as m,ax as g,aw as h,a8 as y,N as r,E as _}from"./Bck1TDhw.js";const q=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:t}=v(u),n=f(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&p("dd-navigation").value){const{navigation:a}=m();return{navigation:a}}const{data:o}=await d(`content-navigation-${h(n.value)}`,()=>g(n.value));return{navigation:o}},render(u){const t=y(),{navigation:n}=u,o=e=>r(_,{to:e._path},()=>e.title),a=(e,i)=>r("ul",i?{"data-level":i}:null,e.map(s=>s.children?r("li",null,[o(s),a(s.children,i+1)]):r("li",null,o(s)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),x=q;export{x as default};
