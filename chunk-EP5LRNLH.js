import{A as S,D as h,F as x,k as M,n as y,o as C,v as E,w as k,y as L}from"./chunk-C2XBZ53K.js";import{Eb as c,Fb as v,Gb as b,Hb as g,Ka as e,La as t,Ma as i,Sa as d,Vb as f,bb as o,cb as u,la as m,pa as s,ua as p}from"./chunk-FX5X7RSP.js";var R=class n{constructor(r){this.router=r}isEditMode;Logout(){sessionStorage.clear(),this.router.navigate([""])}static \u0275fac=function(a){return new(a||n)(s(v))};static \u0275cmp=p({type:n,selectors:[["app-dashboard"]],decls:22,vars:1,consts:[[1,"container-fluid"],[1,"row"],[1,"py-3","text-center"],[1,"col-12"],[1,"navbar","navbar-expand-lg","bg-info"],["routerLink","layout",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page","routerLink","create-employee","routerLinkActive","activeClass",1,"nav-link","active"],["aria-current","page","routerLink","view-employee","routerLinkActive","activeClass",1,"nav-link","active"],["mat-stroked-button","",1,"activeLogout",3,"click"]],template:function(a,l){a&1&&(e(0,"div",0)(1,"div",1)(2,"h2",2),o(3,"Employee Management App"),t(),e(4,"div",3)(5,"nav",4)(6,"div",0)(7,"a",5),o(8,"Emplyee Management"),t(),e(9,"button",6),i(10,"span",7),t(),e(11,"div",8)(12,"ul",9)(13,"li",10)(14,"a",11),o(15),t()(),e(16,"li",10)(17,"a",12),o(18,"View Emplyee List"),t()()(),e(19,"button",13),d("click",function(){return l.Logout()}),o(20,"Logout"),t()()()()()()(),i(21,"router-outlet")),a&2&&(m(15),u(l.isEditMode?"Edit Employee":"Add Employee"))},dependencies:[c,b,g,C,y,E,k,L,S,h,x,M,f],styles:[".activeClass[_ngcontent-%COMP%]{font-size:large;font-style:italic;color:red!important}.activeLogout[_ngcontent-%COMP%]{color:#000!important}"]})};export{R as DashboardComponent};
