(this.webpackJsonpdual_track_frontend=this.webpackJsonpdual_track_frontend||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(52),s=n.n(i),c=n(12),o=n(3),l=(n(70),n(71),n(4)),d=n(6),u=n.n(d),j=n(10),b=n(73),h="https://glacial-plateau-65219.herokuapp.com",v={success:!0},m={success:!1};function p(e,t){return e({type:"REQUEST_LOGIN"}),b.post("".concat(h,"/login")).send(t).set("Content-Type","application/json").set("Accept","application/json").end((function(t,n){var a,r;if(401===n.statusCode)return f(e);var i=null===n||void 0===n||null===(a=n.body)||void 0===a?void 0:a.email;if(!t&&i){var s=n.headers.Authorization||n.headers.authorization;return e({type:"LOGIN_SUCCESS",payload:{email:i,token:s}}),localStorage.setItem("currentUserEmail",i),localStorage.setItem("currentUserToken",s),Object(l.g)().push("/dashboard"),v}return e({type:"LOGIN_ERROR",error:(null===n||void 0===n||null===(r=n.body)||void 0===r?void 0:r.message)||"Unhandled error while logging in :("}),m}))}function O(){return(O=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("currentUserToken")||"",e.abrupt("return",b.get("".concat(h,"/users/check")).set("Content-Type","application/json").set("Accept","application/json").set("Authorization",n).end((function(e,n){if(401===n.statusCode)return f(t)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return g.apply(this,arguments)}function g(){return(g=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT"}),localStorage.removeItem("currentUserEmail"),localStorage.removeItem("currentUserToken");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=n(14),N={email:localStorage.getItem("currentUserEmail")||"",token:localStorage.getItem("currentUserToken")||"",loading:!1,errorMessage:null,updateAvailable:!1},w=function(e,t){switch(t.type){case"REQUEST_LOGIN":case"REQUEST_AUTH":return Object(o.a)(Object(o.a)({},e),{},{loading:!0,errorMessage:null});case"LOGIN_SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{email:t.payload.email,token:t.payload.token,loading:!1,errorMessage:null});case"LOGOUT":return Object(o.a)(Object(o.a)({},e),{},{email:"",token:"",errorMessage:null});case"LOGIN_ERROR":return Object(o.a)(Object(o.a)({},e),{},{loading:!1,errorMessage:t.error});case"RESET_ERROR":return Object(o.a)(Object(o.a)({},e),{},{loading:!1,errorMessage:null});case"TOGGLE_UPDATE_AVAILABLE":return Object(o.a)(Object(o.a)({},e),{},{updateAvailable:t.updateAvailable});default:throw new Error("Unhandled action type: ".concat(t.type))}},k=n(0),y=Object(a.createContext)(),E=Object(a.createContext)();function A(){var e=Object(a.useContext)(y);if(void 0===e)throw new Error("useAuthState must be used within a AuthProvider");return e}function C(){var e=Object(a.useContext)(E);if(void 0===e)throw new Error("useAuthDispatch must be used within a AuthProvider");return e}var S=function(e){var t=e.children,n=Object(a.useReducer)(w,N),r=Object(x.a)(n,2),i=r[0],s=r[1];return Object(k.jsx)(y.Provider,{value:i,children:Object(k.jsx)(E.Provider,{value:s,children:t})})},T=function(){var e=A(),t=e.email,n=e.updateAvailable;return Object(k.jsxs)("nav",{className:"navbar is-light",role:"navigation","aria-label":"main navigation",children:[Object(k.jsxs)("div",{className:"navbar-brand",children:[Object(k.jsx)("div",{className:"has-text-primary is-size-3 p-2",children:"DualTrack"}),Object(k.jsxs)("div",{role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",children:[Object(k.jsx)("span",{"aria-hidden":"true"}),Object(k.jsx)("span",{"aria-hidden":"true"}),Object(k.jsx)("span",{"aria-hidden":"true"})]})]}),Object(k.jsxs)("div",{id:"navbar-menu",className:"navbar-menu",children:[Object(k.jsx)("div",{className:"navbar-start",children:Boolean(t)&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(c.b,{to:"/dashboard",className:"navbar-item",activeClassName:"is-active",children:"Dashboard"}),Object(k.jsxs)(c.b,{to:"/settings",className:"navbar-item",activeClassName:"is-active",children:["Settings",n&&Object(k.jsx)("div",{className:"dot ml-1 has-background-primary"})]})]})}),Object(k.jsx)("div",{className:"navbar-end",children:Object(k.jsx)("div",{className:"navbar-item",children:Object(k.jsx)("div",{className:"buttons",children:!Boolean(t)&&Object(k.jsx)(c.b,{to:"/entrance",className:"button is-light",activeClassName:"is-active",children:"Login"})})})})]})]})},L=n(46),R=n.n(L),I=function(e){var t=e.history,n=C(),r=A();return Object(a.useEffect)((function(){R.a.logToConsole=!1,new R.a("5803771fe6b95d4fe483",{cluster:"us3"}).subscribe("my-channel").bind("my-event",(function(e){alert(JSON.stringify(e))}))}),[]),Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{className:"",children:[Object(k.jsx)("h1",{className:"is-size-1 mb-5",children:"Dashboard"}),Object(k.jsxs)("div",{className:"buttons",children:[Object(k.jsx)("button",{className:"button is-default",onClick:function(){f(n),t.push("/entrance")},children:"Logout"}),Object(k.jsx)("button",{className:"button is-default",onClick:function(){return function(e){return O.apply(this,arguments)}(n)},children:"Check Auth :)"})]})]}),Object(k.jsx)("p",{children:"Welcome to the dashboard ".concat(r.email,"!")})]})},P=function(e){var t=e.localEmail,n=e.setEmail,a=e.loading,r=e.password,i=e.setPassword,s=e.onClick,c=e.primaryText;return Object(k.jsxs)("form",{children:[Object(k.jsxs)("div",{className:"field",children:[Object(k.jsx)("label",{className:"label",htmlFor:"email",children:"Email"}),Object(k.jsx)("div",{className:"control",children:Object(k.jsx)("input",{className:"input",autoComplete:"email",required:!0,type:"text",id:"email",disabled:a,value:t,onChange:function(e){return n(e.target.value)}})})]}),Object(k.jsxs)("div",{className:"field",children:[Object(k.jsx)("label",{className:"label",htmlFor:"password",children:"Password"}),Object(k.jsx)("div",{className:"control",children:Object(k.jsx)("input",{className:"input",autoComplete:"current-password",required:!0,type:"password",id:"password",disabled:a,value:r,onChange:function(e){return i(e.target.value)}})})]}),Object(k.jsx)("button",{type:"submit",className:"button is-primary mt-5",onClick:s,disabled:a,children:c})]})},_=function(e){var t=e.history,n=A(),r=n.email,i=n.loading,s=n.errorMessage;Object(a.useEffect)((function(){r&&t.push("/dashboard")}),[r,t]);var c=Object(a.useState)(""),l=Object(x.a)(c,2),d=l[0],b=l[1],h=Object(a.useState)(""),v=Object(x.a)(h,2),m=v[0],O=v[1],f=Object(a.useState)("login"),g=Object(x.a)(f,2),N=g[0],w=g[1],y=C(),E=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),p(y,{user:{password:m,email:d}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S={localEmail:d,password:m,setEmail:b,setPassword:O,loading:i},T=function(e){i||(y({type:"RESET_ERROR"}),w(e))};return Object(k.jsx)("div",{className:"columns is-centered",children:Object(k.jsxs)("div",{className:"column is-half",children:[s&&Object(k.jsx)("p",{className:"notification is-danger",children:s}),Object(k.jsx)("div",{className:"tabs is-medium",children:Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{className:"login"===N?"is-active":void 0,children:Object(k.jsx)("a",{role:"menuitem",disabled:i,onClick:function(){return T("login")},children:"Login"})}),Object(k.jsx)("li",{role:"menuitem",className:"register"===N?"is-active":void 0,children:Object(k.jsx)("a",{disabled:i,onClick:function(){return T("register")},children:"Register"})})]})}),"login"===N&&Object(k.jsx)(P,Object(o.a)(Object(o.a)({},S),{},{onClick:E,primaryText:"Login"})),"register"===N&&Object(k.jsx)(P,Object(o.a)(Object(o.a)({},S),{},{onClick:E,primaryText:"Register"}))]})})},U=function(){return Object(k.jsx)("h1",{className:"is-size-1 mb-5",children:"Page not found!"})},W=n(63),G=(n(102),function(){return Object(k.jsxs)("pwa-install-button",{children:[Object(k.jsxs)("div",{className:"box mt-5 content unclickable",children:[Object(k.jsx)("p",{children:"This app is a PWA (progressive web app) that can be installed directly to your homescreen or desktop. It updates like other apps and provides a native like experience."}),Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:"Fast"}),Object(k.jsx)("li",{children:"Reliable"}),Object(k.jsx)("li",{children:"Offline First"})]})]}),Object(k.jsx)("button",{className:"button is-primary",children:"Install!"})]})}),F=[{path:"/",component:_,isPrivate:!1},{path:"/entrance",component:_,isPrivate:!1},{path:"/dashboard",component:I,isPrivate:!0},{path:"/settings",component:function(){var e=Object(a.useState)(null),t=Object(x.a)(e,2),n=t[0],r=t[1],i=C();Object(a.useEffect)((function(){var e=document.getElementById("changelog-path").dataset.path;fetch(e).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e).filter((function(e){return Object(W.a)(e,">".concat("0.1.0"))})).map((function(t){return{version:t,description:e[t].description}}));r(t)}))}),[]);var s=A().updateAvailable;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h1",{className:"is-size-1 mb-5",children:"My Settings"}),Object(k.jsxs)("div",{className:"level mb-5",children:[Object(k.jsx)("div",{className:"level-item has-text-centered",children:Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{className:"heading",children:"Tweets"}),Object(k.jsx)("p",{className:"title",children:"3,456"})]})}),Object(k.jsx)("div",{className:"level-item has-text-centered",children:Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{className:"heading",children:"Following"}),Object(k.jsx)("p",{className:"title",children:"123"})]})}),Object(k.jsx)("div",{className:"level-item has-text-centered",children:Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{className:"heading",children:"Followers"}),Object(k.jsx)("p",{className:"title",children:"456K"})]})}),Object(k.jsx)("div",{className:"level-item has-text-centered",children:Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{className:"heading",children:"Likes"}),Object(k.jsx)("p",{className:"title",children:"789"})]})})]}),Object(k.jsx)("hr",{}),Object(k.jsx)(G,{}),s&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{id:"new-version-refresh-notification",className:"mb-5 mt-5",children:Object(k.jsxs)("div",{className:"notification is-info is-light is-flex is-align-items-center",children:["A new version of DualTrack is available",Object(k.jsx)("div",{className:"button is-light ml-2",id:"new-version-refresh-button",onClick:function(){navigator.serviceWorker.getRegistration().then((function(e){e.waiting&&(console.log("[Posting message from Update interface]"),e.waiting.postMessage({type:"SKIP_WAITING"})),console.log("[Setting update available to false]"),i({type:"TOGGLE_UPDATE_AVAILABLE",updateAvailable:!1})}))},children:"Refresh to Update"})]})}),n&&n.map((function(e){return Object(k.jsxs)("div",{className:"box",children:[Object(k.jsx)("h3",{className:"is-size-3",children:e.version}),Object(k.jsx)("p",{children:e.description})]},e.version)}))]})]})},isPrivate:!0},{path:"/*",component:U,isPrivate:!1}],B=n(65),D=function(e){var t=e.component,n=e.path,a=e.isPrivate,r=Object(B.a)(e,["component","path","isPrivate"]),i=A();return Object(k.jsx)(l.b,Object(o.a)({path:n,render:function(e){return a&&!Boolean(i.email)?Object(k.jsx)(l.a,{to:{pathname:"/entrance"}}):Object(k.jsx)(t,Object(o.a)({},e))}},r))},M=n(64);var z=function(){var e=C();return Object(M.a)((function(t){e({type:"TOGGLE_UPDATE_AVAILABLE",updateAvailable:t})})),Object(k.jsxs)("div",{className:"app-container",children:[Object(k.jsx)(T,{}),Object(k.jsx)("div",{className:"container is-widescreen pt-5",children:Object(k.jsx)(l.d,{children:F.map((function(e,t){return Object(k.jsx)(D,Object(o.a)({exact:!0},e),t)}))})})]})};function J(e,t){var n;!function(){Q.apply(this,arguments)}(),navigator.serviceWorker.register(e).then((function(e){console.log("[Registering SW]: ",e),e.waiting&&e.waiting.state,e.onupdatefound=function(){null!==(n=e.installing)&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller||(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function Q(){return(Q=Object(j.a)(u.a.mark((function e(){var t,n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=7;break}return e.next=3,navigator.serviceWorker.getRegistration();case 3:n=e.sent,a=n&&n.active,r=a&&a.state,navigator.serviceWorker.addEventListener("controllerchange",Object(j.a)(u.a.mark((function e(){var n,a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,navigator.serviceWorker.getRegistration();case 4:n=e.sent,a=n&&n.active,i=a&&a.state,"activated"===r&&"activating"===i&&(t=!0,window.location.reload());case 8:case"end":return e.stop()}}),e)}))));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,106)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};n(18);s.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(S,{children:Object(k.jsx)(c.a,{hashType:"slash",children:Object(k.jsx)(z,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/dual_track_frontend",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/dual_track_frontend","/service-worker.js");V?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):J(t,e)}))}}(),q()},70:function(e,t,n){},71:function(e,t,n){},86:function(e,t){}},[[105,1,2]]]);
//# sourceMappingURL=main.a275411f.chunk.js.map