import{E,c as v,e as C,j as R,k as D,m as I,o as F,r as x,t as y}from"./chunk-M354BQWM.js";import{Ab as M,Cb as g,Db as p,Gb as h,K as e,Ka as c,N as r,Tb as A,jb as f,sa as l,zb as d}from"./chunk-2H23VUCR.js";import{a as u,b as s}from"./chunk-2NFLSA4Y.js";var L=(o,i)=>{let t=e(p);return sessionStorage.getItem("Employee")!=null?!0:(t.navigate(["/"]),!1)};var T=(o,i)=>{let t=e(p);return sessionStorage.getItem("Employee")==null?!0:(t.navigate(["layout"]),!1)};var P=[{path:"",redirectTo:"auth",pathMatch:"full"},{path:"auth",loadChildren:()=>import("./chunk-U55OU3MF.js").then(o=>o.authRoutes),canActivate:[T]},{path:"layout",loadChildren:()=>import("./chunk-QJXREZ6O.js").then(o=>o.layoutRoutes),canActivate:[L]}];var b=[v,R,D,I,F,x,y,E,A],S=[r(...b),C()];var m={providers:[h(P),S]};var a=class o{title="Angular19";constructor(){console.log("App Component Render")}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=l({type:o,selectors:[["app-root"]],decls:1,vars:0,template:function(t,n){t&1&&c(0,"router-outlet")},dependencies:[g],encapsulation:2})};M(a,s(u({},m),{providers:[...m.providers,r(d),f()]})).catch(o=>console.error(o));
