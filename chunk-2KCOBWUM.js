import{a as C}from"./chunk-6G2YFK5F.js";import{E as A,b as k,c as L,j as h,k as x,m as I,o as R,r as D,t as _}from"./chunk-ZXZHUFDG.js";import{$a as o,Fb as g,Gb as M,Hb as y,Ia as e,Ib as E,Ja as t,Ka as l,Qa as d,Wb as S,ab as c,bb as u,hb as v,ib as b,ja as n,na as r,sa as s,zb as f}from"./chunk-PZLIYHRI.js";import"./chunk-2NFLSA4Y.js";var T=class m{constructor(p,i){this.empSrv=p;this.router=i}isEditMode;Logout(){sessionStorage.clear(),this.router.navigate([""])}static \u0275fac=function(i){return new(i||m)(r(C),r(M))};static \u0275cmp=s({type:m,selectors:[["app-dashboard"]],decls:25,vars:4,consts:[[1,"container-fluid"],[1,"row"],[1,"py-3","text-center"],[1,"col-12"],[1,"navbar","navbar-expand-lg","bg-info"],["routerLink","layout",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page","routerLink","create-employee","routerLinkActive","activeClass",1,"nav-link","active"],["aria-current","page","routerLink","view-employee","routerLinkActive","activeClass",1,"nav-link","active"],["mat-stroked-button","",1,"activeLogout",3,"click"]],template:function(i,a){i&1&&(e(0,"div",0)(1,"div",1)(2,"h2",2),o(3,"Employee Management App"),t(),e(4,"div",3)(5,"nav",4)(6,"div",0)(7,"a",5),o(8,"Emplyee Management"),t(),e(9,"button",6),l(10,"span",7),t(),e(11,"div",8)(12,"ul",9)(13,"li",10)(14,"a",11),o(15),t()(),e(16,"li",10)(17,"a",12),o(18,"View Emplyee List"),t()()(),e(19,"button",13),d("click",function(){return a.Logout()}),o(20,"Logout"),t()()()()(),e(21,"div"),o(22),v(23,"json"),t()()(),l(24,"router-outlet")),i&2&&(n(15),c(a.isEditMode?"Edit Employee":"Add Employee"),n(7),u(" ",b(23,2,a.empSrv.employees())," "))},dependencies:[g,y,E,L,k,h,x,I,R,D,_,A,S,f],styles:[".activeClass[_ngcontent-%COMP%]{font-size:large;font-style:italic;color:red!important}.activeLogout[_ngcontent-%COMP%]{color:#000!important}"]})};export{T as DashboardComponent};
