"use strict";(self.webpackChunktask_management=self.webpackChunktask_management||[]).push([[942],{7942:(I,m,e)=>{e.r(m),e.d(m,{AuthenticationModule:()=>N});var g=e(9808),a=e(2382),d=e(520),c=e(9826),n=e(5e3);let h=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["internal-app-authentication"]],decls:1,vars:0,template:function(o,i){1&o&&n._UZ(0,"router-outlet")},dependencies:[c.lC],encapsulation:2}),t})();var v=e(5861),z=e(3905),p=e(5973),E=e(5017),C=e(6042),x=e(2683),T=e(2643),l=e(1047),y=e(6114),f=e(1894),u=e(4546),A=e(2359);function M(t,r){if(1&t&&(n.ynx(0),n._UZ(1,"nz-alert",20),n.BQk()),2&t){const o=n.oxw();n.xp6(1),n.Q6J("nzMessage",o.messageError)}}function Z(t,r){1&t&&(n.ynx(0),n._uU(1," M\u1ee5c n\xe0y kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng "),n.BQk())}function J(t,r){1&t&&n.YNc(0,Z,2,0,"ng-container",5),2&t&&n.Q6J("ngIf",r.$implicit.hasError("required"))}function _(t,r){1&t&&(n.ynx(0),n._uU(1," M\u1ee5c n\xe0y kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng "),n.BQk())}function L(t,r){1&t&&n.YNc(0,_,2,0,"ng-container",5),2&t&&n.Q6J("ngIf",r.$implicit.hasError("required"))}function F(t,r){if(1&t){const o=n.EpF();n.TgZ(0,"i",21),n.NdJ("click",function(){n.CHM(o);const s=n.oxw();return n.KtG(s.passwordVisible=!s.passwordVisible)}),n.qZA()}if(2&t){const o=n.oxw();n.Q6J("nzType",o.passwordVisible?"eye-invisible":"eye")}}const B=[{path:"",component:h,children:[{path:"login",component:(()=>{class t{constructor(o,i,s){this.fb=o,this.authService=i,this.router=s,this.Error=!0,this.passwordVisible=!1,this.messageError=""}formBuilder(){this.loginForm=this.fb.group({username:["",[a.kI.required]],password:["",[a.kI.required]],rememberMe:[null,[]]})}ngOnInit(){this.formBuilder(),console.log("init form login")}login(){var o=this;return(0,v.Z)(function*(){try{const i=o.loginForm.value;let s=yield(0,z.z)(o.authService.login(i));s&&s.accessToken?(localStorage.setItem("access_token",s.accessToken),setTimeout(()=>{o.router.navigate(["pages"])},300)):(o.Error=!1,o.messageError="T\xean \u0111\u0103ng nh\u1eadp ho\u1eb7c m\u1eadt kh\u1ea9u kh\xf4ng \u0111\xfang")}catch(i){console.log(i),o.Error=!1,o.messageError="T\xean \u0111\u0103ng nh\u1eadp ho\u1eb7c m\u1eadt kh\u1ea9u kh\xf4ng \u0111\xfang"}})()}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(a.qu),n.Y36(p.$),n.Y36(c.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["internal-app-login"]],decls:37,vars:6,consts:[[1,"main-wrapper"],[1,"login-form"],[1,"login-content"],[1,"login-title","mb-4","mt-3"],[1,"login-eror"],[4,"ngIf"],["nz-form","",3,"formGroup"],[3,"nzErrorTip"],["for","username"],["nz-input","","type","text","name","username","id","username","formControlName","username"],["Username",""],["for","password"],[3,"nzSuffix"],["nz-input","","name","password","id","password","formControlName","password",3,"type"],["Password",""],["suffixTemplate",""],["nz-checkbox","","name","rememberMe","formControlName","rememberMe"],[1,"form-group"],[1,"mt-3"],["type","button","nz-button","","nzBlock","","nzType","primary",3,"click"],["nzType","error",1,"my-3",3,"nzMessage"],["id","eye","nz-icon","",3,"nzType","click"]],template:function(o,i){if(1&o&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"section")(4,"div",3)(5,"h4"),n._uU(6,"\u0110\u0103ng nh\u1eadp h\u1ec7 th\u1ed1ng"),n.qZA()()(),n.TgZ(7,"section"),n._UZ(8,"div",4),n.qZA(),n.TgZ(9,"section"),n.YNc(10,M,2,1,"ng-container",5),n.TgZ(11,"form",6)(12,"nz-form-item")(13,"nz-form-control",7)(14,"nz-form-label",8),n._uU(15,"T\xean \u0111\u0103ng nh\u1eadp"),n.qZA(),n._UZ(16,"input",9),n.YNc(17,J,1,1,"ng-template",null,10,n.W1O),n.qZA()(),n.TgZ(19,"nz-form-item")(20,"nz-form-control",7)(21,"nz-form-label",11),n._uU(22,"M\u1eadt kh\u1ea9u"),n.qZA(),n.TgZ(23,"nz-input-group",12),n._UZ(24,"input",13),n.YNc(25,L,1,1,"ng-template",null,14,n.W1O),n.qZA(),n.YNc(27,F,1,1,"ng-template",null,15,n.W1O),n.qZA()(),n.TgZ(29,"nz-form-item")(30,"nz-form-control")(31,"label",16),n._uU(32,"Ghi nh\u1edb \u0111\u0103ng nh\u1eadp"),n.qZA()()(),n.TgZ(33,"div",17)(34,"div",18)(35,"button",19),n.NdJ("click",function(){return i.login()}),n._uU(36," \u0110\u0103ng nh\u1eadp "),n.qZA()()()()()()()()),2&o){const s=n.MAs(18),k=n.MAs(26),D=n.MAs(28);n.xp6(10),n.Q6J("ngIf",!i.Error),n.xp6(1),n.Q6J("formGroup",i.loginForm),n.xp6(2),n.Q6J("nzErrorTip",s),n.xp6(7),n.Q6J("nzErrorTip",k),n.xp6(3),n.Q6J("nzSuffix",D),n.xp6(1),n.Q6J("type",i.passwordVisible?"text":"password")}},dependencies:[g.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,E.Ls,C.ix,x.w,T.dQ,l.Zp,l.gB,l.ke,y.Ie,f.t3,f.SK,u.Lr,u.Nx,u.iK,u.Fd,A.r],styles:[".main-wrapper[_ngcontent-%COMP%]{height:100vh;width:100vw;position:relative;display:flex;justify-content:center;align-items:center}.login-form[_ngcontent-%COMP%]{width:30%}.login-form[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]{margin-top:5%;border:none;box-shadow:0 2px 4px #0000001a,0 8px 16px #0000001a;padding:30px}.login-form[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-title[_ngcontent-%COMP%]{text-transform:uppercase;text-align:center}#eye[_ngcontent-%COMP%]{cursor:pointer}"]}),t})()}]}];let O=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[c.Bz.forChild(B),c.Bz]}),t})();var Q=e(9923),U=e(9201);let N=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[p.$],imports:[g.ez,a.u5,a.UX,O,d.JF,Q.v.forRoot(),U.V.forRoot()]}),t})()}}]);