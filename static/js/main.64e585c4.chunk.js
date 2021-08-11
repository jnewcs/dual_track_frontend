(this.webpackJsonpdual_track_frontend=this.webpackJsonpdual_track_frontend||[]).push([[0],{22:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"h",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return b}));var a=n(23),r=n(2),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"string";if("object"===t){var n=localStorage.getItem(e)||"{}";return JSON.parse(n)}var a=localStorage.getItem(e);return a&&"null"!==a?a:null},c=function(e,t){var n=t-e/1e3;return n<-8?"has-text-danger":n<-4?"has-text-warning":"has-text-success"},s=function(e){return i("liveSegmentData-".concat(e),"object")},o=function(e,t,n){var a=i("liveSegmentData-".concat(e),"object")[t];return a&&a[n]||{}},l=function(e,t,n,c){var s=i("liveSegmentData-".concat(e),"object"),o=s[t]||{},l=Object(r.a)(Object(r.a)({},o),{},Object(a.a)({},n,c)),u=JSON.stringify(Object(r.a)(Object(r.a)({},s),{},Object(a.a)({},t,l)));localStorage.setItem("liveSegmentData-".concat(e),u)},u=function(e){localStorage.removeItem("liveSegmentData-".concat(e))},d=function(e,t){return!(!e||!t)&&t.findIndex((function(t){return t.identifier===e}))===t.length-1},b=function(e){var t=["gradient-blue","gradient-orange","gradient-purple","gradient-light-green","gradient-pink"];return t[t.length%(e+1)]}},25:function(e,t,n){"use strict";n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return p})),n.d(t,"e",(function(){return g}));var a=n(5),r=n.n(a),i=n(10),c=n(22),s=[{identifier:"a230a1de-3907",name:"Track 150m Intervals",description:"5 sets of 150m with 2 minute breaks",gradientClass:Object(c.d)(0)},{identifier:"8935fr-1m32lk",name:"1 mile endurance",description:"Simple 1 mile run to gain endurance",gradientClass:Object(c.d)(1)}],o=[{identifier:"a230a1de-3907",name:"Track 150m Intervals",description:"5 sets of 150m with 2 minute breaks",segments:[{identifier:"y676-3refs",display_length:"150m",length:150,measurement:"meter",time_goal:30,rest:60,quantity:1,description:"Slow build up. Try to reach 60% speed by the finish line"},{identifier:"t234o-G435231",display_length:"100m",length:100,measurement:"meter",time_goal:20,rest:75,quantity:1,description:"Try to reach 60% speed by the finish line"}],gradientClass:Object(c.d)(0)},{identifier:"8935fr-1m32lk",name:"1 mile endurance",description:"Simple 1 mile run to gain endurance",segments:[],gradientClass:Object(c.d)(1)}],l=n(55),u={success:!0},d={success:!1};function b(e,t,n){return e({type:"REQUEST_LOGIN"}),l.post("".concat("https://glacial-plateau-65219.herokuapp.com","/login")).send(n).set("Content-Type","application/json").set("Accept","application/json").end((function(n,a){var r,i,c=null===a||void 0===a||null===(r=a.body)||void 0===r?void 0:r.email;if(!n&&c){var s=a.headers.Authorization||a.headers.authorization;return e({type:"LOGIN_SUCCESS",payload:{email:c,token:s}}),localStorage.setItem("currentUserEmail",c),localStorage.setItem("currentUserToken",s),e({type:"TOGGLE_NOTIFICATION",notification:{text:"Logged in successfully!",type:"info"}}),t.push("/dashboard"),u}return e({type:"LOGIN_ERROR",error:(null===a||void 0===a||null===(i=a.body)||void 0===i?void 0:i.message)||"Unhandled error while logging in :("}),d}))}function j(e){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"REQUEST_WORKOUTS"}),setTimeout((function(){t({type:"RECEIVE_WORKOUTS",workouts:s})}),1e3);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"REQUEST_WORKOUT"}),setTimeout((function(){var e=o.find((function(e){return e.identifier===t}));n(e?{type:"RECEIVE_WORKOUT",workout:e}:{type:"RECEIVE_WORKOUT_ERROR",error:"Could not find this workout :("})}),1e3);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("currentUserToken")||"",e.abrupt("return",l.get("".concat("https://glacial-plateau-65219.herokuapp.com","/users/check")).set("Content-Type","application/json").set("Accept","application/json").set("Authorization",n).end((function(e,n){v(n,t)||t({type:"TOGGLE_NOTIFICATION",notification:{text:"Auth token is still valid :)",type:"info"}})})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return 401===e.statusCode&&(g(t),t({type:"TOGGLE_NOTIFICATION",notification:{text:"No longer signed in :( Please login to continue",type:"warning"}}),!0)}function g(e){return x.apply(this,arguments)}function x(){return(x=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT"}),localStorage.removeItem("currentUserEmail"),localStorage.removeItem("currentUserToken");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},36:function(e,t,n){"use strict";n(1);var a=n(0);t.a=function(e){var t=e.spaceTop,n=void 0===t?"":t;return Object(a.jsx)("div",{className:"loader is-flex is-justify-content-center ".concat(n),children:Object(a.jsx)("div",{className:"spinner-container",children:Object(a.jsx)("div",{className:"spinner"})})})}},4:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"f",(function(){return b})),n.d(t,"e",(function(){return j})),n.d(t,"c",(function(){return a.d})),n.d(t,"d",(function(){return a.e})),n.d(t,"b",(function(){return a.a}));var a=n(25),r=n(14),i=n(1),c=n(2),s={email:localStorage.getItem("currentUserEmail")||"",token:localStorage.getItem("currentUserToken")||"",loading:!1,notification:null,errorMessage:null,updateAvailable:!1,workouts:[],selectedWorkout:{}},o=function(e,t){switch(t.type){case"REQUEST_WORKOUT":case"REQUEST_LOGIN":case"REQUEST_AUTH":return Object(c.a)(Object(c.a)({},e),{},{loading:!0,errorMessage:null});case"LOGIN_SUCCESS":return Object(c.a)(Object(c.a)({},e),{},{email:t.payload.email,token:t.payload.token,loading:!1,errorMessage:null});case"LOGOUT":return Object(c.a)(Object(c.a)({},e),{},{email:"",token:"",errorMessage:null});case"LOGIN_ERROR":return Object(c.a)(Object(c.a)({},e),{},{loading:!1,errorMessage:t.error});case"RESET_ERROR":return Object(c.a)(Object(c.a)({},e),{},{loading:!1,errorMessage:null});case"TOGGLE_UPDATE_AVAILABLE":return Object(c.a)(Object(c.a)({},e),{},{updateAvailable:t.updateAvailable});case"TOGGLE_NOTIFICATION":return Object(c.a)(Object(c.a)({},e),{},{notification:t.notification});case"REQUEST_WORKOUTS":return Object(c.a)(Object(c.a)({},e),{},{loading:!0,errorMessage:null,selectedWorkout:{}});case"RECEIVE_WORKOUTS":return Object(c.a)(Object(c.a)({},e),{},{loading:!1,error:null,workouts:t.workouts});case"RECEIVE_WORKOUT":return Object(c.a)(Object(c.a)({},e),{},{loading:!1,error:null,selectedWorkout:t.workout});case"RECEIVE_WORKOUT_ERROR":return Object(c.a)(Object(c.a)({},e),{},{loading:!1,error:t.error,selectedWorkout:{}});default:throw new Error("Unhandled action type: ".concat(t.type))}},l=n(0),u=Object(i.createContext)(),d=Object(i.createContext)();function b(){var e=Object(i.useContext)(u);if(void 0===e)throw new Error("useAuthState must be used within a AuthProvider");return e}function j(){var e=Object(i.useContext)(d);if(void 0===e)throw new Error("useAuthDispatch must be used within a AuthProvider");return e}var f=function(e){var t=e.children,n=Object(i.useReducer)(o,s),a=Object(r.a)(n,2),c=a[0],b=a[1];return Object(l.jsx)(u.Provider,{value:c,children:Object(l.jsx)(d.Provider,{value:b,children:t})})}},41:function(e,t,n){"use strict";var a=n(14),r=n(1),i=n(45),c=n(4),s=n(0);t.a=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),n=t[0],o=t[1],l=Object(c.e)(),u=Object(c.f)().updateAvailable;if(Object(r.useEffect)((function(){var e=document.getElementById("changelog-path").dataset.path;fetch(e).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e).filter((function(e){return Object(i.a)(e,">".concat("0.4.1"))})).map((function(t){return{version:t,description:e[t].description}}));o(t)}))}),[]),!u)return null;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("hr",{}),Object(s.jsx)("div",{id:"new-version-refresh-notification",className:"mb-5 mt-5",children:Object(s.jsxs)("div",{className:"notification is-info is-light is-flex is-align-items-center",children:["A new version of DualTrack is available",Object(s.jsx)("div",{className:"button is-light ml-2",id:"new-version-refresh-button",onClick:function(){navigator.serviceWorker.getRegistration().then((function(e){e.waiting&&(console.log("[Posting message from Update interface]"),e.waiting.postMessage({type:"SKIP_WAITING"})),console.log("[Setting update available to false]"),l({type:"TOGGLE_UPDATE_AVAILABLE",updateAvailable:!1})}))},children:"Refresh to Update!"})]})}),n&&n.map((function(e){return Object(s.jsxs)("div",{className:"box",children:[Object(s.jsx)("h3",{className:"is-size-3",children:e.version}),Object(s.jsx)("p",{children:e.description})]},e.version)}))]})}},42:function(e,t,n){"use strict";n(1);var a=n(6),r=n(4),i=n(0);t.a=function(e){var t=e.buttonClass,n=Object(r.f)().email,c=Object(r.e)(),s=Object(a.g)(),o=function(){Object(r.d)(c),s.push("/entrance"),c({type:"TOGGLE_NOTIFICATION",notification:{text:"Logged out successfully. Come back soon!",type:"info"}})};return Boolean(n)?Object(i.jsx)("div",{className:t,tabIndex:0,onClick:o,onKeyUp:function(e){return"Enter"===e.key&&o()},children:"Logout"}):null}},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},68:function(e,t){},84:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(43),c=n.n(i),s=n(9),o=n(2),l=(n(51),n(52),n(53),n(6)),u=n(46),d=n(4),b=n(0),j=function(e){e._history;var t=Object(d.e)(),n=Object(d.f)().email;return Object(b.jsxs)("div",{className:"ml-5 mr-5",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"is-size-2 mb-5",children:"My Dashboard"}),Object(b.jsx)("div",{className:"buttons",children:Object(b.jsx)("button",{className:"button is-default",onClick:function(){return Object(d.b)(t)},children:"Check Auth :)"})})]}),Object(b.jsx)("p",{children:"Welcome to the dashboard ".concat(n,"!")})]})},f=n(5),O=n.n(f),h=n(10),p=n(14),m=n(41),v=function(e){var t=e.localEmail,n=e.setEmail,a=e.loading,r=e.password,i=e.setPassword,c=e.onClick,s=e.primaryText;return Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{className:"label",htmlFor:"email",children:"Email"}),Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("input",{className:"input",autoComplete:"email",required:!0,type:"text",id:"email",disabled:a,value:t,onChange:function(e){return n(e.target.value)}})})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{className:"label",htmlFor:"password",children:"Password"}),Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("input",{className:"input",autoComplete:"current-password",required:!0,type:"password",id:"password",disabled:a,value:r,onChange:function(e){return i(e.target.value)}})})]}),Object(b.jsx)("button",{type:"submit",className:"button is-primary mt-5 ".concat(a?"is-loading":void 0),onClick:c,disabled:a,children:s})]})},g=function(e){var t=e.history,n=Object(d.f)(),r=n.email,i=n.loading,c=n.errorMessage,s=Object(d.e)();Object(a.useEffect)((function(){r&&t.push("/dashboard")}),[r,t]);var l=Object(a.useState)(""),u=Object(p.a)(l,2),j=u[0],f=u[1],g=Object(a.useState)(""),x=Object(p.a)(g,2),k=x[0],y=x[1],N=Object(a.useState)("login"),w=Object(p.a)(N,2),E=w[0],T=w[1],I=function(){var e=Object(h.a)(O.a.mark((function e(n){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),a={user:{password:k,email:j}},Object(d.c)(s,t,a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C={localEmail:j,password:k,setEmail:f,setPassword:y,loading:i},S=function(e){i||(s({type:"RESET_ERROR"}),T(e))};return Object(b.jsx)("div",{className:"columns is-centered ml-5 mr-5",children:Object(b.jsxs)("div",{className:"column is-half",children:[c&&Object(b.jsx)("p",{className:"notification is-danger",children:c}),Object(b.jsx)("div",{className:"tabs is-medium",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{className:"login"===E?"is-active":void 0,children:Object(b.jsx)("a",{role:"menuitem",disabled:i,onClick:function(){return S("login")},children:"Login"})}),Object(b.jsx)("li",{role:"menuitem",className:"register"===E?"is-active":void 0,children:Object(b.jsx)("a",{disabled:i,onClick:function(){return S("register")},children:"Register"})})]})}),"login"===E&&Object(b.jsx)(v,Object(o.a)(Object(o.a)({},C),{},{onClick:I,primaryText:"Login"})),"register"===E&&Object(b.jsx)(v,Object(o.a)(Object(o.a)({},C),{},{onClick:I,primaryText:"Register"})),Object(b.jsx)(m.a,{})]})})},x=function(){return Object(b.jsx)("h1",{className:"is-size-2 mb-5",children:"Page not found!"})},k=[{path:"/",component:g,isPrivate:!1},{path:"/entrance",component:g,isPrivate:!1},{path:"/dashboard",component:j,isPrivate:!0},{path:"/workouts",component:r.a.lazy((function(){return n.e(5).then(n.bind(null,93))})),isPrivate:!0},{path:"/workouts/:identifier",component:r.a.lazy((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,96))})),isPrivate:!0},{path:"/settings",component:r.a.lazy((function(){return n.e(6).then(n.bind(null,98))})),isPrivate:!0},{path:"/*",component:x,isPrivate:!1}],y=n(37),N=function(e){var t=e.pathname,n=Object(d.e)();return Object(a.useEffect)((function(){n({type:"TOGGLE_NOTIFICATION",notification:{text:"Access denied",type:"warning"}})}),[n]),Object(b.jsx)(l.a,{to:{pathname:t}})},w=function(e){var t=e.component,n=e.path,a=e.isPrivate,r=Object(y.a)(e,["component","path","isPrivate"]),i=Object(d.f)().email;return Object(b.jsx)(l.b,Object(o.a)({path:n,render:function(e){return a&&!Boolean(i)?Object(b.jsx)(N,{pathname:"/entrance"}):Object(b.jsx)(t,Object(o.a)({},e))}},r))},E=n(42),T=function(){var e=Object(d.f)(),t=e.email,n=e.updateAvailable;return Object(b.jsxs)("nav",{className:"navbar is-light is-hidden-touch",role:"navigation","aria-label":"main navigation",children:[Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)("div",{className:"has-text-primary is-size-3 p-2",children:"DualTrack"}),Object(b.jsxs)("div",{role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",id:"navbar-burger",children:[Object(b.jsx)("span",{"aria-hidden":"true"}),Object(b.jsx)("span",{"aria-hidden":"true"}),Object(b.jsx)("span",{"aria-hidden":"true"})]})]}),Object(b.jsxs)("div",{id:"navbar-menu",className:"navbar-menu",children:[Object(b.jsx)("div",{className:"navbar-start",children:Boolean(t)&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(s.b,{to:"/dashboard",className:"navbar-item",activeClassName:"is-active",children:"Dashboard"}),Object(b.jsx)(s.b,{exact:!1,to:"/workouts",className:"navbar-item",activeClassName:"is-active",children:"Workouts"}),Object(b.jsxs)(s.b,{to:"/settings",className:"navbar-item",activeClassName:"is-active",children:["Settings",n&&Object(b.jsx)("div",{className:"dot ml-1 has-background-primary"})]}),Object(b.jsx)(E.a,{buttonClass:"navbar-item is-clickable"})]})}),Object(b.jsx)("div",{className:"navbar-end",children:Object(b.jsx)("div",{className:"navbar-item",children:Object(b.jsx)("div",{className:"buttons",children:!Boolean(t)&&Object(b.jsx)(s.b,{to:"/entrance",className:"button is-light",activeClassName:"is-active",children:"Login"})})})})]})]})},I=function(){var e=Object(d.e)(),t=Object(d.f)().notification;if(null===t)return null;var n=function(){e({type:"TOGGLE_NOTIFICATION",notification:null})};return Object(b.jsxs)("div",{className:"notification is-".concat(t.type," is-light is-flex is-align-items-center"),children:[Object(b.jsx)("div",{tabIndex:0,className:"delete is-clickable is-size-3",onClick:n,onKeyUp:function(e){return"Enter"===e.key&&n()},dangerouslySetInnerHTML:{__html:"&#215;"}}),t.text]})},C=n(36),S=n(86),R=n(87),_=n(88),A=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"pt-5 pb-5"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"is-hidden-desktop pt-2 pb-2 has-background-light",id:"mobile-footer",children:Object(b.jsxs)("div",{className:"is-flex is-align-items-center is-justify-content-space-between pl-2 pr-3",children:[Object(b.jsx)(s.b,{to:"/dashboard",className:"icon p-2 has-text-black",activeClassName:"has-text-primary",children:Object(b.jsx)(S.a,{})}),Object(b.jsx)(s.b,{exact:!1,to:"/workouts",className:"icon p-2 has-text-black",activeClassName:"has-text-primary",children:Object(b.jsx)(R.a,{})}),Object(b.jsx)(s.b,{to:"/settings",className:"icon p-2 has-text-black",activeClassName:"has-text-primary",children:Object(b.jsx)(_.a,{})})]})})]})};var U=function(){var e=Object(d.e)();return Object(u.a)((function(t){e({type:"TOGGLE_UPDATE_AVAILABLE",updateAvailable:t})})),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{id:"app-container",children:[Object(b.jsx)(T,{}),Object(b.jsx)(I,{}),Object(b.jsx)("div",{className:"container is-widescreen pb-5",children:Object(b.jsx)(a.Suspense,{fallback:Object(b.jsx)(C.a,{}),children:Object(b.jsx)(l.d,{children:k.map((function(e,t){return Object(b.jsx)(w,Object(o.a)({exact:!0},e),t)}))})})}),Object(b.jsx)(A,{})]})})};function L(e,t){var n;!function(){G.apply(this,arguments)}(),navigator.serviceWorker.register(e).then((function(e){console.log("[Registering SW]: ",e),e.waiting&&e.waiting.state,e.onupdatefound=function(){null!==(n=e.installing)&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller||(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function G(){return(G=Object(h.a)(O.a.mark((function e(){var t,n,a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=7;break}return e.next=3,navigator.serviceWorker.getRegistration();case 3:n=e.sent,a=n&&n.active,r=a&&a.state,navigator.serviceWorker.addEventListener("controllerchange",Object(h.a)(O.a.mark((function e(){var n,a,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,navigator.serviceWorker.getRegistration();case 4:n=e.sent,a=n&&n.active,i=a&&a.state,"activated"===r&&"activating"===i&&(t=!0,window.location.reload());case 8:case"end":return e.stop()}}),e)}))));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,95)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(s.a,{hashType:"slash",children:Object(b.jsx)(U,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/dual_track_frontend",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/dual_track_frontend","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):L(t,e)}))}}(),P()}},[[84,1,2]]]);
//# sourceMappingURL=main.64e585c4.chunk.js.map