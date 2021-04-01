(this.webpackJsonpdual_track_frontend=this.webpackJsonpdual_track_frontend||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(19),s=n.n(c),i=n(11),o=n(6),l=(n(28),n(29),n(3)),u=n(4),d=n.n(u),j=n(7),h="//127.0.0.1:4000",b={success:!0},v={success:!1},m="Unhandled error while logging in :(";function p(e,t){return O.apply(this,arguments)}function O(){return(O=Object(j.a)(d.a.mark((function e(t,n){var a,r,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)},e.prev=1,t({type:"REQUEST_LOGIN"}),e.next=5,!1;case 5:if(!e.sent){e.next=9;break}e.t0={json:function(){return{email:"test@test.com"}},headers:{get:function(e){return"Bearer n345123fds23rgb"}}},e.next=10;break;case 9:e.t0=fetch("".concat(h,"/login"),a);case 10:return r=e.t0,e.next=13,r.json();case 13:if(!(c=e.sent).email){e.next=20;break}return s=r.headers.get("Authorization"),t({type:"LOGIN_SUCCESS",payload:{email:c.email,token:s}}),localStorage.setItem("currentUserEmail",c.email),localStorage.setItem("currentUserToken",s),e.abrupt("return",b);case 20:return t({type:"LOGIN_ERROR",error:c.message||m}),e.abrupt("return",v);case 24:return e.prev=24,e.t1=e.catch(1),t({type:"LOGIN_ERROR",error:m}),e.abrupt("return",v);case 28:case"end":return e.stop()}}),e,null,[[1,24]])})))).apply(this,arguments)}function f(){return(f=Object(j.a)(d.a.mark((function e(t){var n,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("currentUserToken")||"",a={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:n}},e.prev=2,t({type:"REQUEST_AUTH"}),e.next=6,fetch("".concat(h,"/users/check"),a);case 6:return r=e.sent,e.next=9,r.json();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}function x(){return(x=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT"}),localStorage.removeItem("currentUserEmail"),localStorage.removeItem("currentUserToken");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=n(12),N={email:localStorage.getItem("currentUserEmail")||"",token:localStorage.getItem("currentUserToken")||"",loading:!1,errorMessage:null},w=function(e,t){switch(t.type){case"REQUEST_LOGIN":case"REQUEST_AUTH":return Object(o.a)(Object(o.a)({},e),{},{loading:!0});case"LOGIN_SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{email:t.payload.email,token:t.payload.token,loading:!1,errorMessage:null});case"LOGOUT":return Object(o.a)(Object(o.a)({},e),{},{email:"",token:"",errorMessage:null});case"LOGIN_ERROR":return Object(o.a)(Object(o.a)({},e),{},{loading:!1,errorMessage:t.error});default:throw new Error("Unhandled action type: ".concat(t.type))}},k=n(0),y=Object(a.createContext)(),S=Object(a.createContext)();function E(){var e=Object(a.useContext)(y);if(void 0===e)throw new Error("useAuthState must be used within a AuthProvider");return e}function C(){var e=Object(a.useContext)(S);if(void 0===e)throw new Error("useAuthDispatch must be used within a AuthProvider");return e}var T=function(e){var t=e.children,n=Object(a.useReducer)(w,N),r=Object(g.a)(n,2),c=r[0],s=r[1];return Object(k.jsx)(y.Provider,{value:c,children:Object(k.jsx)(S.Provider,{value:s,children:t})})},U=function(){var e=E();return Object(k.jsxs)("nav",{className:"navbar is-light",role:"navigation","aria-label":"main navigation",children:[Object(k.jsxs)("div",{className:"navbar-brand",children:[Object(k.jsx)("div",{className:"has-text-primary is-size-3 p-2",children:"DualTrack"}),Object(k.jsxs)("div",{role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",children:[Object(k.jsx)("span",{"aria-hidden":"true"}),Object(k.jsx)("span",{"aria-hidden":"true"}),Object(k.jsx)("span",{"aria-hidden":"true"})]})]}),Object(k.jsxs)("div",{id:"navbar-menu",className:"navbar-menu",children:[Object(k.jsx)("div",{className:"navbar-start",children:Boolean(e.email)&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(i.b,{to:"/dashboard",className:"navbar-item",activeClassName:"is-active",children:"Dashboard"}),Object(k.jsx)(i.b,{to:"/settings",className:"navbar-item",activeClassName:"is-active",children:"Settings"})]})}),Object(k.jsx)("div",{className:"navbar-end",children:Object(k.jsx)("div",{className:"navbar-item",children:Object(k.jsx)("div",{className:"buttons",children:!Boolean(e.email)&&Object(k.jsx)(i.b,{to:"/login",className:"button is-light",activeClassName:"is-active",children:"Login"})})})})]})]})},I=function(e){var t=e.history,n=C(),a=E();return Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{className:"",children:[Object(k.jsx)("h1",{className:"is-size-1 mb-5",children:"Dashboard"}),Object(k.jsxs)("div",{className:"buttons",children:[Object(k.jsx)("button",{className:"button is-default",onClick:function(){!function(e){x.apply(this,arguments)}(n),t.push("/login")},children:"Logout"}),Object(k.jsx)("button",{className:"button is-default",onClick:function(){return function(e){return f.apply(this,arguments)}(n)},children:"Check Auth"})]})]}),Object(k.jsx)("p",{children:"Welcome to the dashboard ".concat(a.email,"!")})]})},R=function(e){var t=e.history,n=E(),r=n.email,c=n.loading,s=n.errorMessage;Object(a.useEffect)((function(){r&&t.push("/dashboard")}),[r,t]);var i=Object(a.useState)(""),o=Object(g.a)(i,2),l=o[0],u=o[1],h=Object(a.useState)(""),b=Object(g.a)(h,2),v=b[0],m=b[1],O=C(),f=function(){var e=Object(j.a)(d.a.mark((function e(n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a={user:{password:v,email:l}},e.prev=2,e.next=5,p(O,a);case 5:if(e.sent.success){e.next=8;break}return e.abrupt("return");case 8:t.push("/dashboard"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsx)("div",{className:"columns is-centered",children:Object(k.jsxs)("div",{className:"column is-half",children:[s&&Object(k.jsx)("p",{className:"notification is-danger",children:s}),Object(k.jsxs)("form",{children:[Object(k.jsxs)("div",{className:"field",children:[Object(k.jsx)("label",{className:"label",htmlFor:"email",children:"Email"}),Object(k.jsx)("div",{className:"control",children:Object(k.jsx)("input",{className:"input",autoComplete:"email",required:!0,type:"text",id:"email",disabled:c,value:l,onChange:function(e){return u(e.target.value)}})})]}),Object(k.jsxs)("div",{className:"field",children:[Object(k.jsx)("label",{className:"label",htmlFor:"password",children:"Password"}),Object(k.jsx)("div",{className:"control",children:Object(k.jsx)("input",{className:"input",autoComplete:"current-password",required:!0,type:"password",id:"password",disabled:c,value:v,onChange:function(e){return m(e.target.value)}})})]}),Object(k.jsx)("button",{type:"submit",className:"button is-primary mt-5",onClick:f,disabled:c,children:"Login"})]})]})})},L=function(){return Object(k.jsx)("h1",{className:"is-size-1 mb-5",children:"Page not found"})},P=n(21),_=n(22),A=[{path:"/",component:R,isPrivate:!1},{path:"/login",component:R,isPrivate:!1},{path:"/dashboard",component:I,isPrivate:!0},{path:"/settings",component:function(){var e=Object(a.useState)(null),t=Object(g.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),s=Object(g.a)(c,2),i=s[0],o=s[1];Object(_.a)((function(e){o(e)})),Object(a.useEffect)((function(){var e=document.getElementById("changelog-path").dataset.path;fetch(e).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e).filter((function(e){return Object(P.a)(e,">".concat("0.1.0"))})).map((function(t){return{version:t,description:e[t].description}}));r(t)}))}),[]);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h1",{className:"is-size-1 mb-5",children:"My Settings"}),Object(k.jsxs)("div",{className:"level mb-5",children:[Object(k.jsx)("div",{className:"level-item has-text-centered",children:Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{className:"heading",children:"Tweets"}),Object(k.jsx)("p",{className:"title",children:"3,456"})]})}),Object(k.jsx)("div",{className:"level-item has-text-centered",children:Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{className:"heading",children:"Following"}),Object(k.jsx)("p",{className:"title",children:"123"})]})}),Object(k.jsx)("div",{className:"level-item has-text-centered",children:Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{className:"heading",children:"Followers"}),Object(k.jsx)("p",{className:"title",children:"456K"})]})}),Object(k.jsx)("div",{className:"level-item has-text-centered",children:Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{className:"heading",children:"Likes"}),Object(k.jsx)("p",{className:"title",children:"789"})]})})]}),Object(k.jsx)("hr",{}),i&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{id:"new-version-refresh-notification",className:"mb-5",children:Object(k.jsxs)("div",{className:"notification is-info is-light is-flex is-align-items-center",children:["A new version of DualTrack is available!",Object(k.jsx)("div",{className:"button is-light ml-2",id:"new-version-refresh-button",onClick:function(){navigator.serviceWorker.getRegistration().then((function(e){e.waiting.postMessage({type:"SKIP_WAITING"})}))},children:"Refresh to Update"})]})}),n&&n.map((function(e){return Object(k.jsxs)("div",{className:"box",children:[Object(k.jsx)("h3",{className:"is-size-3",children:e.version}),Object(k.jsx)("p",{children:e.description})]},e.version)}))]})]})},isPrivate:!0},{path:"/*",component:L,isPrivate:!1}],W=n(23),F=function(e){var t=e.component,n=e.path,a=e.isPrivate,r=Object(W.a)(e,["component","path","isPrivate"]),c=E();return Object(k.jsx)(l.b,Object(o.a)({path:n,render:function(e){return a&&!Boolean(c.email)?Object(k.jsx)(l.a,{to:{pathname:"/login"}}):Object(k.jsx)(t,Object(o.a)({},e))}},r))};var G=function(){return Object(k.jsxs)("div",{className:"app-container",children:[Object(k.jsx)(U,{}),Object(k.jsx)("div",{className:"container is-widescreen pt-5",children:Object(k.jsx)(l.d,{children:A.map((function(e,t){return Object(k.jsx)(F,Object(o.a)({exact:!0},e),t)}))})})]})};function B(e,t){var n;!function(){M.apply(this,arguments)}(),navigator.serviceWorker.register(e).then((function(e){console.log("[Registering SW]: ",e),e.waiting&&e.waiting.state,e.onupdatefound=function(){null!==(n=e.installing)&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller||(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function M(){return(M=Object(j.a)(d.a.mark((function e(){var t,n,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=7;break}return e.next=3,navigator.serviceWorker.getRegistration();case 3:n=e.sent,a=n&&n.active,r=a&&a.state,navigator.serviceWorker.addEventListener("controllerchange",Object(j.a)(d.a.mark((function e(){var n,a,c,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,navigator.serviceWorker.getRegistration();case 4:if(e.t1=n=e.sent,e.t0=null===e.t1,e.t0){e.next=8;break}e.t0=void 0===n;case 8:if(!e.t0){e.next=12;break}e.t2=void 0,e.next=13;break;case 12:e.t2=null===(a=n.active)||void 0===a?void 0:a.state;case 13:c=e.t2,s=c&&c.active,i=s&&s.state,"activated"===r&&"activating"===i&&(t=!0,window.location.reload());case 17:case"end":return e.stop()}}),e)}))));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(T,{children:Object(k.jsx)(i.a,{children:Object(k.jsx)(G,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/dual_track_frontend",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/dual_track_frontend","/service-worker.js");z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):B(t,e)}))}}(),D()}},[[41,1,2]]]);
//# sourceMappingURL=main.396a0e5f.chunk.js.map