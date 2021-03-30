(this.webpackJsonpdual_track_frontend=this.webpackJsonpdual_track_frontend||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(18),i=n.n(c),s=n(9),o=n(4),l=(n(25),n(26),n(2)),u=n(8),d=n.n(u),h=n(11),j="//127.0.0.1:4000",b={success:!0},v={success:!1};function p(e,t){return m.apply(this,arguments)}function m(){return(m=Object(h.a)(d.a.mark((function e(t,n){var a,r,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)},e.prev=1,t({type:"REQUEST_LOGIN"}),e.next=5,fetch("".concat(j,"/login"),a);case 5:return r=e.sent,e.next=8,r.json();case 8:if(!(c=e.sent).email){e.next=16;break}return i=r.headers.get("Authorization"),t({type:"LOGIN_SUCCESS",payload:{email:c.email,token:i}}),localStorage.setItem("currentUserEmail",c.email),localStorage.setItem("currentUserToken",i),e.abrupt("return",b);case 16:return t({type:"LOGIN_ERROR",error:c.message}),e.abrupt("return",v);case 20:return e.prev=20,e.t0=e.catch(1),t({type:"LOGIN_ERROR",error:"Unhandled error while logging in :("}),e.abrupt("return",v);case 24:case"end":return e.stop()}}),e,null,[[1,20]])})))).apply(this,arguments)}function f(){return(f=Object(h.a)(d.a.mark((function e(t){var n,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("currentUserToken")||"",a={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:n}},e.prev=2,t({type:"REQUEST_AUTH"}),e.next=6,fetch("".concat(j,"/users/check"),a);case 6:return r=e.sent,e.next=9,r.json();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}function O(){return(O=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT"}),localStorage.removeItem("currentUserEmail"),localStorage.removeItem("currentUserToken");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=n(13),x={email:localStorage.getItem("currentUserEmail")||"",token:localStorage.getItem("currentUserToken")||"",loading:!1,errorMessage:null},w=function(e,t){switch(t.type){case"REQUEST_LOGIN":case"REQUEST_AUTH":return Object(o.a)(Object(o.a)({},e),{},{loading:!0});case"LOGIN_SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{email:t.payload.email,token:t.payload.token,loading:!1,errorMessage:null});case"LOGOUT":return Object(o.a)(Object(o.a)({},e),{},{email:"",token:"",errorMessage:null});case"LOGIN_ERROR":return Object(o.a)(Object(o.a)({},e),{},{loading:!1,errorMessage:t.error});default:throw new Error("Unhandled action type: ".concat(t.type))}},N=n(0),k=Object(a.createContext)(),y=Object(a.createContext)();function E(){var e=Object(a.useContext)(k);if(void 0===e)throw new Error("useAuthState must be used within a AuthProvider");return e}function S(){var e=Object(a.useContext)(y);if(void 0===e)throw new Error("useAuthDispatch must be used within a AuthProvider");return e}var C=function(e){var t=e.children,n=Object(a.useReducer)(w,x),r=Object(g.a)(n,2),c=r[0],i=r[1];return Object(N.jsx)(k.Provider,{value:c,children:Object(N.jsx)(y.Provider,{value:i,children:t})})},T=function(){var e=E();return Object(N.jsxs)("nav",{className:"navbar is-light",role:"navigation","aria-label":"main navigation",children:[Object(N.jsxs)("div",{className:"navbar-brand",children:[Object(N.jsx)("div",{className:"has-text-primary is-size-3 p-2",children:"DualTrack"}),Object(N.jsxs)("div",{role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",children:[Object(N.jsx)("span",{"aria-hidden":"true"}),Object(N.jsx)("span",{"aria-hidden":"true"}),Object(N.jsx)("span",{"aria-hidden":"true"})]})]}),Object(N.jsxs)("div",{id:"navbar-menu",className:"navbar-menu",children:[Object(N.jsx)("div",{className:"navbar-start",children:Boolean(e.email)&&Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(s.b,{to:"/dashboard",className:"navbar-item",activeClassName:"is-active",children:"Dashboard"})})}),Object(N.jsx)("div",{className:"navbar-end",children:Object(N.jsx)("div",{className:"navbar-item",children:Object(N.jsx)("div",{className:"buttons",children:Object(N.jsx)(s.b,{to:"/login",className:"button is-light",activeClassName:"is-active",children:"Login"})})})})]})]})},U=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(g.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(""),o=Object(g.a)(s,2),l=o[0],u=o[1],j=S(),b=function(){var e=Object(h.a)(d.a.mark((function e(n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a={user:{password:l,email:c}},e.prev=2,e.next=5,p(j,a);case 5:if(e.sent.success){e.next=8;break}return e.abrupt("return");case 8:t.push("/dashboard"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),v=E(),m=v.loading,f=v.errorMessage;return Object(N.jsx)("div",{className:"columns is-centered",children:Object(N.jsxs)("div",{className:"column is-half",children:[f&&Object(N.jsx)("p",{className:"notification is-danger",children:f}),Object(N.jsxs)("form",{children:[Object(N.jsxs)("div",{className:"",children:[Object(N.jsxs)("div",{className:"field",children:[Object(N.jsx)("label",{className:"label",htmlFor:"email",children:"Email"}),Object(N.jsx)("div",{className:"control",children:Object(N.jsx)("input",{className:"input",type:"text",id:"email",disabled:m,value:c,onChange:function(e){return i(e.target.value)}})})]}),Object(N.jsxs)("div",{className:"field",children:[Object(N.jsx)("label",{className:"label",htmlFor:"password",children:"Password"}),Object(N.jsx)("div",{className:"control",children:Object(N.jsx)("input",{className:"input",type:"password",id:"password",disabled:m,value:l,onChange:function(e){return u(e.target.value)}})})]})]}),Object(N.jsx)("button",{className:"button is-primary mt-5",onClick:b,disabled:m,children:"Login"})]})]})})},L=[{path:"/",component:U,isPrivate:!1},{path:"/login",component:U,isPrivate:!1},{path:"/dashboard",component:function(e){var t=e.history,n=S(),a=E();return Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:"",children:[Object(N.jsx)("h1",{children:"Dashboard"}),Object(N.jsx)("button",{className:"",onClick:function(){!function(e){O.apply(this,arguments)}(n),t.push("/login")},children:"Logout"}),Object(N.jsx)("button",{className:"",onClick:function(){return function(e){return f.apply(this,arguments)}(n)},children:"Check Auth"})]}),Object(N.jsx)("p",{children:"Welcome to the dashboard ".concat(a.email,"!")})]})},isPrivate:!0},{path:"/*",component:function(){return Object(N.jsx)("div",{className:"",children:Object(N.jsx)("h1",{children:"Page not found"})})},isPrivate:!1}],I=n(20),R=function(e){var t=e.component,n=e.path,a=e.isPrivate,r=Object(I.a)(e,["component","path","isPrivate"]),c=E();return Object(N.jsx)(l.b,Object(o.a)({path:n,render:function(e){return a&&!Boolean(c.email)?Object(N.jsx)(l.a,{to:{pathname:"/login"}}):Object(N.jsx)(t,Object(o.a)({},e))}},r))};var _=function(){return Object(N.jsxs)("div",{className:"app-container",children:[Object(N.jsx)(T,{}),Object(N.jsx)("div",{className:"container is-widescreen pt-5",children:Object(N.jsx)(l.d,{children:L.map((function(e,t){return Object(N.jsx)(R,Object(o.a)({exact:!0},e),t)}))})}),Object(N.jsx)("div",{className:"is-hidden",id:"new-version-refresh-notification",children:Object(N.jsxs)("div",{className:"notification is-info is-light is-flex is-align-items-center",children:["A new version of DualTrack is available!",Object(N.jsx)("div",{className:"button is-light ml-2",id:"new-version-refresh-button",children:"REFRESH"})]})})]})};function P(e,t){var n;navigator.serviceWorker.addEventListener("controllerchange",(function(){n||(window.location.reload(),n=!0)})),navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(document.getElementById("new-version-refresh-button").addEventListener("click",(function(){n.postMessage({action:"skipWaiting"})})),n.onstatechange=function(){if("installed"===n.state)if(navigator.serviceWorker.controller){var a=document.getElementById("new-version-refresh-notification");a&&a.classList.remove("is-hidden")}else console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(C,{children:Object(N.jsx)(s.a,{children:Object(N.jsx)(_,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/dual_track_frontend",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/dual_track_frontend","/service-worker.js");A?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):P(t,e)}))}}(),G()}},[[37,1,2]]]);
//# sourceMappingURL=main.a0cc1ffd.chunk.js.map