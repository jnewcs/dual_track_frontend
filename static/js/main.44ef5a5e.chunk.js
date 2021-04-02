(this.webpackJsonpdual_track_frontend=this.webpackJsonpdual_track_frontend||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(51),s=n.n(i),c=n(12),o=n(3),l=(n(69),n(70),n(4)),d=n(6),u=n.n(d),j=n(10),b=n(72),h="https://glacial-plateau-65219.herokuapp.com",v={success:!0},p={success:!1};function m(e,t){return e({type:"REQUEST_LOGIN"}),b.post("".concat(h,"/login")).send(t).set("Content-Type","application/json").set("Accept","application/json").end((function(t,n){var a,r;console.log("Login Request: ",t,n);var i=null===n||void 0===n||null===(a=n.body)||void 0===a?void 0:a.email;if(!t&&i){var s=n.headers.Authorization;return e({type:"LOGIN_SUCCESS",payload:{email:i,token:s}}),localStorage.setItem("currentUserEmail",i),localStorage.setItem("currentUserToken",s),Object(l.g)().push("/dashboard"),v}return e({type:"LOGIN_ERROR",error:(null===n||void 0===n||null===(r=n.body)||void 0===r?void 0:r.message)||"Unhandled error while logging in :("}),p}))}function O(){return(O=Object(j.a)(u.a.mark((function e(t){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("currentUserToken")||"",a={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:n}},e.prev=2,t({type:"REQUEST_AUTH"}),e.next=6,fetch("".concat(h,"/users/check"),a);case 6:return r=e.sent,e.next=9,r.json();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}function f(){return(f=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT"}),localStorage.removeItem("currentUserEmail"),localStorage.removeItem("currentUserToken");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=n(14),x={email:localStorage.getItem("currentUserEmail")||"",token:localStorage.getItem("currentUserToken")||"",loading:!1,errorMessage:null,updateAvailable:!1},N=function(e,t){switch(t.type){case"REQUEST_LOGIN":case"REQUEST_AUTH":return Object(o.a)(Object(o.a)({},e),{},{loading:!0,errorMessage:null});case"LOGIN_SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{email:t.payload.email,token:t.payload.token,loading:!1,errorMessage:null});case"LOGOUT":return Object(o.a)(Object(o.a)({},e),{},{email:"",token:"",errorMessage:null});case"LOGIN_ERROR":return Object(o.a)(Object(o.a)({},e),{},{loading:!1,errorMessage:t.error});case"RESET_ERROR":return Object(o.a)(Object(o.a)({},e),{},{loading:!1,errorMessage:null});case"TOGGLE_UPDATE_AVAILABLE":return Object(o.a)(Object(o.a)({},e),{},{updateAvailable:t.updateAvailable});default:throw new Error("Unhandled action type: ".concat(t.type))}},w=n(0),k=Object(a.createContext)(),y=Object(a.createContext)();function E(){var e=Object(a.useContext)(k);if(void 0===e)throw new Error("useAuthState must be used within a AuthProvider");return e}function T(){var e=Object(a.useContext)(y);if(void 0===e)throw new Error("useAuthDispatch must be used within a AuthProvider");return e}var A=function(e){var t=e.children,n=Object(a.useReducer)(N,x),r=Object(g.a)(n,2),i=r[0],s=r[1];return Object(w.jsx)(k.Provider,{value:i,children:Object(w.jsx)(y.Provider,{value:s,children:t})})},S=function(){var e=E(),t=e.email,n=e.updateAvailable;return Object(w.jsxs)("nav",{className:"navbar is-light",role:"navigation","aria-label":"main navigation",children:[Object(w.jsxs)("div",{className:"navbar-brand",children:[Object(w.jsx)("div",{className:"has-text-primary is-size-3 p-2",children:"DualTrack"}),Object(w.jsxs)("div",{role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",children:[Object(w.jsx)("span",{"aria-hidden":"true"}),Object(w.jsx)("span",{"aria-hidden":"true"}),Object(w.jsx)("span",{"aria-hidden":"true"})]})]}),Object(w.jsxs)("div",{id:"navbar-menu",className:"navbar-menu",children:[Object(w.jsx)("div",{className:"navbar-start",children:Boolean(t)&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(c.b,{to:"/dashboard",className:"navbar-item",activeClassName:"is-active",children:"Dashboard"}),Object(w.jsxs)(c.b,{to:"/settings",className:"navbar-item",activeClassName:"is-active",children:["Settings",n&&Object(w.jsx)("div",{className:"dot ml-1 has-background-primary"})]})]})}),Object(w.jsx)("div",{className:"navbar-end",children:Object(w.jsx)("div",{className:"navbar-item",children:Object(w.jsx)("div",{className:"buttons",children:!Boolean(t)&&Object(w.jsx)(c.b,{to:"/entrance",className:"button is-light",activeClassName:"is-active",children:"Login"})})})})]})]})},C=function(e){var t=e.history,n=T(),a=E();return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"",children:[Object(w.jsx)("h1",{className:"is-size-1 mb-5",children:"Dashboard"}),Object(w.jsxs)("div",{className:"buttons",children:[Object(w.jsx)("button",{className:"button is-default",onClick:function(){!function(e){f.apply(this,arguments)}(n),t.push("/entrance")},children:"Logout"}),Object(w.jsx)("button",{className:"button is-default",onClick:function(){return function(e){return O.apply(this,arguments)}(n)},children:"Check Auth"})]})]}),Object(w.jsx)("p",{children:"Welcome to the dashboard ".concat(a.email,"!")})]})},R=function(e){var t=e.localEmail,n=e.setEmail,a=e.loading,r=e.password,i=e.setPassword,s=e.onClick,c=e.primaryText;return Object(w.jsxs)("form",{children:[Object(w.jsxs)("div",{className:"field",children:[Object(w.jsx)("label",{className:"label",htmlFor:"email",children:"Email"}),Object(w.jsx)("div",{className:"control",children:Object(w.jsx)("input",{className:"input",autoComplete:"email",required:!0,type:"text",id:"email",disabled:a,value:t,onChange:function(e){return n(e.target.value)}})})]}),Object(w.jsxs)("div",{className:"field",children:[Object(w.jsx)("label",{className:"label",htmlFor:"password",children:"Password"}),Object(w.jsx)("div",{className:"control",children:Object(w.jsx)("input",{className:"input",autoComplete:"current-password",required:!0,type:"password",id:"password",disabled:a,value:r,onChange:function(e){return i(e.target.value)}})})]}),Object(w.jsx)("button",{type:"submit",className:"button is-primary mt-5",onClick:s,disabled:a,children:c})]})},L=function(e){var t=e.history,n=E(),r=n.email,i=n.loading,s=n.errorMessage;Object(a.useEffect)((function(){r&&t.push("/dashboard")}),[r,t]);var c=Object(a.useState)(""),l=Object(g.a)(c,2),d=l[0],b=l[1],h=Object(a.useState)(""),v=Object(g.a)(h,2),p=v[0],O=v[1],f=Object(a.useState)("login"),x=Object(g.a)(f,2),N=x[0],k=x[1],y=T(),A=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),m(y,{user:{password:p,email:d}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S={localEmail:d,password:p,setEmail:b,setPassword:O,loading:i},C=function(e){i||(y({type:"RESET_ERROR"}),k(e))};return Object(w.jsx)("div",{className:"columns is-centered",children:Object(w.jsxs)("div",{className:"column is-half",children:[s&&Object(w.jsx)("p",{className:"notification is-danger",children:s}),Object(w.jsx)("div",{className:"tabs is-medium",children:Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{className:"login"===N&&"is-active",children:Object(w.jsx)("a",{role:"menuitem",disabled:i,onClick:function(){return C("login")},children:"Login"})}),Object(w.jsx)("li",{role:"menuitem",className:"register"===N&&"is-active",children:Object(w.jsx)("a",{disabled:i,onClick:function(){return C("register")},children:"Register"})})]})}),"login"===N&&Object(w.jsx)(R,Object(o.a)(Object(o.a)({},S),{},{onClick:A,primaryText:"Login"})),"register"===N&&Object(w.jsx)(R,Object(o.a)(Object(o.a)({},S),{},{onClick:A,primaryText:"Register"}))]})})},U=function(){return Object(w.jsx)("h1",{className:"is-size-1 mb-5",children:"Page not found!"})},_=n(62),I=n(63),P=(n(100),function(){return Object(w.jsxs)("pwa-install-button",{children:[Object(w.jsxs)("div",{className:"box mt-5 content unclickable",children:[Object(w.jsx)("p",{children:"This app is a PWA (progressive web app) that can be installed directly to your homescreen or desktop. It updates like other apps and provides a native like experience."}),Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:"Fast"}),Object(w.jsx)("li",{children:"Reliable"}),Object(w.jsx)("li",{children:"Offline First"})]})]}),Object(w.jsx)("button",{className:"button is-primary",children:"Install!"})]})}),G=[{path:"/",component:L,isPrivate:!1},{path:"/entrance",component:L,isPrivate:!1},{path:"/dashboard",component:C,isPrivate:!0},{path:"/settings",component:function(){var e=Object(a.useState)(null),t=Object(g.a)(e,2),n=t[0],r=t[1],i=T();Object(I.a)((function(e){i({type:"TOGGLE_UPDATE_AVAILABLE",updateAvailable:e})})),Object(a.useEffect)((function(){var e=document.getElementById("changelog-path").dataset.path;fetch(e).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e).filter((function(e){return Object(_.a)(e,">".concat("0.1.0"))})).map((function(t){return{version:t,description:e[t].description}}));r(t)}))}),[]);var s=E().updateAvailable;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h1",{className:"is-size-1 mb-5",children:"My Settings"}),Object(w.jsxs)("div",{className:"level mb-5",children:[Object(w.jsx)("div",{className:"level-item has-text-centered",children:Object(w.jsxs)("div",{children:[Object(w.jsx)("p",{className:"heading",children:"Tweets"}),Object(w.jsx)("p",{className:"title",children:"3,456"})]})}),Object(w.jsx)("div",{className:"level-item has-text-centered",children:Object(w.jsxs)("div",{children:[Object(w.jsx)("p",{className:"heading",children:"Following"}),Object(w.jsx)("p",{className:"title",children:"123"})]})}),Object(w.jsx)("div",{className:"level-item has-text-centered",children:Object(w.jsxs)("div",{children:[Object(w.jsx)("p",{className:"heading",children:"Followers"}),Object(w.jsx)("p",{className:"title",children:"456K"})]})}),Object(w.jsx)("div",{className:"level-item has-text-centered",children:Object(w.jsxs)("div",{children:[Object(w.jsx)("p",{className:"heading",children:"Likes"}),Object(w.jsx)("p",{className:"title",children:"789"})]})})]}),Object(w.jsx)("hr",{}),Object(w.jsx)(P,{}),s&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{id:"new-version-refresh-notification",className:"mb-5 mt-5",children:Object(w.jsxs)("div",{className:"notification is-info is-light is-flex is-align-items-center",children:["A new version of DualTrack is available",Object(w.jsx)("div",{className:"button is-light ml-2",id:"new-version-refresh-button",onClick:function(){navigator.serviceWorker.getRegistration().then((function(e){e.waiting&&(console.log("[Posting message from Update interface]"),e.waiting.postMessage({type:"SKIP_WAITING"})),console.log("[Setting update available to false]"),i({type:"TOGGLE_UPDATE_AVAILABLE",updateAvailable:!1})}))},children:"Refresh to Update"})]})}),n&&n.map((function(e){return Object(w.jsxs)("div",{className:"box",children:[Object(w.jsx)("h3",{className:"is-size-3",children:e.version}),Object(w.jsx)("p",{children:e.description})]},e.version)}))]})]})},isPrivate:!0},{path:"/*",component:U,isPrivate:!1}],W=n(64),F=function(e){var t=e.component,n=e.path,a=e.isPrivate,r=Object(W.a)(e,["component","path","isPrivate"]),i=E();return Object(w.jsx)(l.b,Object(o.a)({path:n,render:function(e){return a&&!Boolean(i.email)?Object(w.jsx)(l.a,{to:{pathname:"/entrance"}}):Object(w.jsx)(t,Object(o.a)({},e))}},r))};var B=function(){return Object(w.jsxs)("div",{className:"app-container",children:[Object(w.jsx)(S,{}),Object(w.jsx)("div",{className:"container is-widescreen pt-5",children:Object(w.jsx)(l.d,{children:G.map((function(e,t){return Object(w.jsx)(F,Object(o.a)({exact:!0},e),t)}))})})]})};function D(e,t){var n;!function(){M.apply(this,arguments)}(),navigator.serviceWorker.register(e).then((function(e){console.log("[Registering SW]: ",e),e.waiting&&e.waiting.state,e.onupdatefound=function(){null!==(n=e.installing)&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller||(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function M(){return(M=Object(j.a)(u.a.mark((function e(){var t,n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=7;break}return e.next=3,navigator.serviceWorker.getRegistration();case 3:n=e.sent,a=n&&n.active,r=a&&a.state,navigator.serviceWorker.addEventListener("controllerchange",Object(j.a)(u.a.mark((function e(){var n,a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,navigator.serviceWorker.getRegistration();case 4:n=e.sent,a=n&&n.active,i=a&&a.state,"activated"===r&&"activating"===i&&(t=!0,window.location.reload());case 8:case"end":return e.stop()}}),e)}))));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};n(29);s.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(A,{children:Object(w.jsx)(c.a,{hashType:"noslash",children:Object(w.jsx)(B,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/dual_track_frontend",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/dual_track_frontend","/service-worker.js");z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):D(t,e)}))}}(),Q()},69:function(e,t,n){},70:function(e,t,n){},85:function(e,t){}},[[103,1,2]]]);
//# sourceMappingURL=main.44ef5a5e.chunk.js.map