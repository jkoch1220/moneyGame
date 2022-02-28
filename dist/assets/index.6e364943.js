import{j as t,T as b,P as h,a as o,b as B,c as x,d as p,e as i,f as y,C,V as g,A as N,g as m,B as v,r as c,h as T,R as F,i as S}from"./vendor.645e1787.js";const k=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};k();const U=a=>t(b,{component:h,children:o(B,{sx:{minWidth:650},"aria-label":"simple table",children:[t(x,{children:o(p,{children:[t(i,{children:"Beschreibung"}),t(i,{align:"right",children:"Menge"}),t(i,{align:"right",children:"Kategorie"}),t(i,{align:"right",children:"Transaction"}),t(i,{align:"right",children:"Meta Kategorie"}),t(i,{align:"right",children:"Datum"})]})}),t(y,{children:a.data.map(e=>o(p,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[t(i,{component:"th",scope:"row",children:e.description}),t(i,{align:"right",children:e.amount}),t(i,{align:"right",children:e.category}),t(i,{align:"right",children:e.transaction}),t(i,{align:"right",children:e.metaCategory}),t(i,{align:"right",children:e.date})]},e.description))})]})});var A=a=>t(h,{children:o(C,{data:a.data,children:[t(g,{name:"sale"}),t(g,{name:"total"}),t(N,{}),t(m,{scaleName:"sale",showGrid:!1,showLine:!0,showTicks:!0}),t(m,{scaleName:"total",position:"right",showGrid:!1,showLine:!0,showTicks:!0}),t(v,{name:"Units Sold",valueField:"sale",argumentField:"categories",scaleName:"sale",color:"green"})]})});const L="_uploadButtonWrapper_jozf5_1",_="_fileUploadButton_jozf5_1",w="_uploadButton_jozf5_1",M="_uploadButtonLabel_jozf5_12";var u={uploadButtonWrapper:L,fileUploadButton:_,uploadButton:w,uploadButtonLabel:M};function E(a){const e=c.exports.useRef(null),n=r=>{r!=null&&r[0]!=null&&a.onChange(r[0])},l=()=>{e!==null&&e.current!==null&&e.current.click()};return t("div",{className:u.uploadButtonWrapper,children:o("div",{className:u.fileUploadButton,children:[t("input",{hidden:!0,id:a.name,ref:e,type:"file",onChange:r=>n(r.target.files),accept:".csv"}),t(T,{className:u.uploadButton,onClick:l,classes:{label:u.uploadButtonLabel},children:a.text})]})})}const O=a=>new Promise((e,n)=>{const l=new FileReader;l.readAsText(a),l.onload=()=>{typeof l.result=="string"&&e(l.result)},l.onerror=r=>n(r)});var f=a=>{let e=[],n=a.split(";"),l;for(let r=1;r<n.length;r++)if(n[r]!=""){l=n[r].split(",");const s={description:l[0],amount:l[1],category:l[2],transaction:l[3],metaCategory:l[4],date:l[5]};e.push(s)}return e},W=a=>{const e=[{categories:"Transport",sale:0},{categories:"Essen",sale:0},{categories:"Reisen u. Freizeit",sale:0},{categories:"Miete",sale:0},{categories:"Weiterbildung",sale:0},{categories:"Business-Expenses",sale:0},{categories:"Unterhaltung",sale:0},{categories:"Materialistische W\xFCnsche",sale:0},{categories:"Andere",sale:0}];for(let n=0;n<a.length;n++)switch(a[n].category){case"Transport":e[0].sale+=Number(a[n].amount);break;case"Essen":e[1].sale+=Number(a[n].amount);break;case"Reisen u. Freizeit":e[2].sale+=Number(a[n].amount);break;case"Miete":e[3].sale+=Number(a[n].amount);break;case"Weiterbildung":e[4].sale+=Number(a[n].amount);break;case"Business-Expenses":e[5].sale+=Number(a[n].amount);break;case"Unterhaltung":e[6].sale+=Number(a[n].amount);break;case"Materialistische W\xFCnsche":e[7].sale+=Number(a[n].amount);break;default:e[8].sale+=Number(a[n].amount)}return e};function j(){const[a,e]=c.exports.useState(),[n,l]=c.exports.useState(),r=async s=>{s&&e(await O(s))};return c.exports.useEffect(()=>{a&&l(f(a))},[a]),t("div",{className:"App",children:o("header",{children:[t("h1",{children:"MONEYGAME"}),t(E,{name:"UPLOAD CSV",onChange:r,text:"Upload CSV File"}),t("h1",{children:"Overview BarChart"}),n?t(A,{data:W(n)}):"Upload CSV",t("h1",{children:"Overview Table"}),a?t(U,{data:f(a)}):"Upload CSV"]})})}F.render(t(S.StrictMode,{children:t(j,{})}),document.getElementById("root"));