(this.webpackJsonpdual_track_frontend=this.webpackJsonpdual_track_frontend||[]).push([[4],{89:function(e,t,n){"use strict";t.a=function(e){var t=e.condition,n=void 0===t||t,s=e.children;return n?s:null}},96:function(e,t,n){"use strict";n.r(t);var s=n(23),c=n(2),i=n(14),a=n(1),r=n(9),o=n(36),l=n(89),d=n(97);function u(e){var t=e/36e5,n=60*(t-Math.floor(t)),s=Math.floor(n),c=60*(n-s),i=Math.floor(c),a=100*(c-i),r=Math.floor(a),o=s.toString().padStart(2,"0"),l=i.toString().padStart(2,"0"),d=r.toString().padStart(2,"0");return"".concat(o,":").concat(l,":").concat(d)}function m(){return Object(d.a)()}var j=n(4),h=n(25),b=n(22),O=n(0),f=function(e){var t=e.selectedWorkout,n=e.setActiveTab,s=t.identifier,c=Object(j.f)().email,i=Object(b.b)(s);if(!i||!Object.keys(i).length)return Object(O.jsx)("div",{className:"is-size-3 has-text-centered",children:"You have not run this workout before"});return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"button",tabIndex:0,onClick:function(){Object(b.g)(s),n("current")},children:"Clear History"}),Object(O.jsx)("div",{className:"columns",children:Object.keys(i).map((function(e,t){var n=i[e];return Object(O.jsx)("div",{className:"column",children:Object(O.jsxs)("div",{className:"card mt-2",children:[Object(O.jsxs)("div",{className:"is-size-5 has-text-centered pt-2",children:["Session #",t+1]}),Object(O.jsx)("hr",{className:"mt-2 mb-2"}),Object(O.jsx)("div",{className:"card-content pt-1",children:Object(O.jsx)("div",{className:"content",children:Object(O.jsxs)("table",{className:"table is-bordered",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Segment"}),Object(O.jsx)("th",{children:"Goal"}),Object(O.jsx)("th",{children:"Finish Time"})]})}),Object(O.jsx)("tbody",{children:Object.keys(n).map((function(e){var t=n[e][c];return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t.displayLength}),Object(O.jsx)("td",{children:u(t.timeGoal)}),Object(O.jsx)("td",{className:"pb-1 pb-1 ".concat(Object(b.e)(t.finishTime,t.timeGoal)),children:u(t.finishTime)})]},e)}))})]})})})]})},e)}))})]})},g=n(90),x=n(16),v=n(17),p=n(18),k=n(19),S=n(91),y=n.n(S),N=n(5),w=n.n(N),I=n(10),C=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(!1),r=Object(i.a)(c,2),o=r[0],l=r[1];if(!("wakeLock"in navigator))return null;var d=function(){var e=Object(I.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.wakeLock.request("screen");case 3:t=e.sent,s(t),l(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("".concat(e.t0.name,", ").concat(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),u=function(){n&&n.release(),s(null),l(!1)};return Object(O.jsx)(O.Fragment,{children:o?Object(O.jsx)("div",{className:"button",tabIndex:"0",onClick:u,onKeyUp:function(e){return"Enter"===e.key&&u()},children:"Unlock Page"}):Object(O.jsx)("div",{className:"button",tabIndex:"0",onClick:d,onKeyUp:function(e){return"Enter"===e.key&&d()},children:"Lock Page"})})},F=function(){var e=Object(a.useState)(!!document.fullscreenElement),t=Object(i.a)(e,2),n=t[0],s=t[1],c=function(){document.documentElement.requestFullscreen(),s(!0)},r=function(){document.exitFullscreen(),s(!1)};return Object(O.jsx)(O.Fragment,{children:n?Object(O.jsx)("div",{className:"button",tabIndex:"0",onClick:r,onKeyUp:function(e){return"Enter"===e.key&&r()},children:"Leave Full Screen"}):Object(O.jsx)("div",{className:"button",tabIndex:"0",onClick:c,onKeyUp:function(e){return"Enter"===e.key&&c()},children:"Enter Full Screen"})})},W=n(94),E=function(e){var t=e.members,n=Object(j.f)().email;return!t||t.count<2?null:Object(O.jsx)("div",{children:Object.values(t).map((function(e){var t=e.email===n?"is-link":"is-light";return Object(O.jsx)("div",{className:"tag mr-1 mb-1 ".concat(t),children:e.email},e.email)}))})},M=function(e){var t=e.open,n=e.members,s=e.chatHistory,c=e.closeChat,i=e.message,a=e.setMessage,r=e.sendMessage,o=Object(j.f)().email;return!t||!n||Object.values(n).length<2?null:Object(O.jsxs)("div",{className:"chat-interface box has-background-link-light p-5",children:[Object(O.jsx)("div",{tabIndex:0,className:"delete is-clickable is-size-3 close-chat-interface",onClick:c,onKeyUp:function(e){return"Enter"===e.key&&c()},dangerouslySetInnerHTML:{__html:"&#215;"}}),Object(O.jsx)(E,{members:n}),Object(O.jsxs)("div",{className:"chat-messages box mt-2 p-3",children:[Object(O.jsx)("div",{className:"is-full-width is-flex is-justify-content-center mb-4",children:Object(O.jsx)("div",{className:"tag is-dark",children:"This is the beginning of your conversation history"})}),s.map((function(e,t){return e.sender===o?Object(O.jsx)("div",{className:"is-full-width is-flex is-justify-content-flex-end mb-2",children:Object(O.jsx)("div",{className:"tag is-medium is-link from-me-message is-pulled-right",children:e.message})},"chat-me-".concat(t)):Object(O.jsx)("div",{className:"mb-2",children:Object(O.jsx)("div",{className:"tag is-medium is-light to-me-message",children:e.message})},"chat-others-".concat(t))})),Object(O.jsx)("div",{id:"last-chat-element"})]}),Object(O.jsx)("div",{className:"chat-send-box box mt-2 p-3 mb-2",children:Object(O.jsxs)("div",{className:"is-flex",children:[Object(O.jsx)("input",{className:"input is-normal",type:"text",placeholder:"Enter your message",value:i,onChange:function(e){return a(e.target.value)},onKeyUp:function(e){return"Enter"===e.key&&r()}}),Object(O.jsx)("div",{className:"button is-primary ml-2",tabIndex:0,onClick:r,disabled:!i||!i.length,children:"Send"})]})})]})},R=function(e){var t=e.showChat,n=e.channel,s=e.chatHistory,c=e.setChatHistory,r=e.unreadMessage,o=e.setUnreadStatus,l=e.members,d=Object(a.useState)(!1),u=Object(i.a)(d,2),m=u[0],h=u[1],b=Object(a.useState)(""),f=Object(i.a)(b,2),x=f[0],v=f[1],p=Object(j.f)().email;if(Object(a.useEffect)((function(){var e=document.getElementById("last-chat-element");e&&e.scrollIntoView()}),[s,m]),Object(a.useEffect)((function(){var e=function(e){27===e.keyCode&&k(!1)};m?document.addEventListener("keydown",e,!1):document.removeEventListener("keydown",e,!1)}),[m]),!n||!t)return null;var k=function(){m?document.body.classList.remove("not-vertically-scrollable"):(o(!1),document.body.classList.add("not-vertically-scrollable")),h(!m)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("button",{className:"button",tabIndex:0,onClick:k,disabled:Object.values(l).length<2,onKeyUp:function(e){return"Enter"===e.key&&k()},children:Object(O.jsx)(W.a,{fill:r?"#00BAF0":"white",color:"black"})}),Object(O.jsx)(M,{open:m,members:l,chatHistory:s,closeChat:function(){k(!1)},message:x,setMessage:v,sendMessage:function(){if(x&&x.length){var e={id:s.length+1,sender:p,message:x,timestamp:Date.now()};n.trigger("client-chat-message",e),c([].concat(Object(g.a)(s),[e])),v("")}}})]})},D=n(37),T=function(e){var t=e.showFinish,n=void 0===t||t,s=e.onPlayCallback,c=void 0===s?function(){}:s,r=e.onStopCallback,o=void 0===r?function(){}:r,l=e.onFinishCallback,d=void 0===l?function(){}:l,m=Object(a.useState)(!1),j=Object(i.a)(m,2),h=j[0],b=j[1],f=Object(a.useState)(null),g=Object(i.a)(f,2),x=g[0],v=g[1],p=Object(a.useState)(0),k=Object(i.a)(p,2),S=k[0],y=k[1],N=Object(a.useState)(null),w=Object(i.a)(N,2),I=w[0],C=w[1],F=function(){h?(clearInterval(I),o()):(v(Date.now()-S),c()),b(!h)};Object(a.useEffect)((function(){F()}),[]),Object(a.useEffect)((function(){if(null===x)clearInterval(I),C(null),y(0);else{var e=setInterval((function(){y(null===x?0:Date.now()-x)}),10);C(e)}}),[x]);var W=function(){h&&(F(),d(S))};return Object(O.jsxs)("div",{className:"has-text-centered is-flex is-flex-direction-column is-align-items-center",children:[Object(O.jsx)("div",{className:"stopwatch-circle circle is-flex is-justify-content-center is-align-items-center",children:Object(O.jsx)("span",{className:"time is-size-4",id:"display",children:S?u(S):"00:00:00"})}),Object(O.jsxs)("div",{className:"mt-3 is-flex is-justify-content-space-between is-align-items-center",children:[Object(O.jsx)("img",{className:"is-clickable",tabIndex:0,id:"main-action-button",alt:h?"pause stopwatch":"start stopwatch",src:h?"https://res.cloudinary.com/https-tinloof-com/image/upload/v1593360448/blog/time-in-js/pause-button_pinhpy.svg":"https://res.cloudinary.com/https-tinloof-com/image/upload/v1593360448/blog/time-in-js/play-button_opkxmt.svg",onClick:F,onKeyUp:function(e){return"Enter"===e.key&&F()}}),n&&h&&Object(O.jsx)("div",{className:"button ml-5 is-medium",tabIndex:0,id:"reset-button",onClick:W,onKeyUp:function(e){return"Enter"===e.key&&W()},children:"Finish"})]})]})},U=function(e){var t=e.workoutStarted,n=e.startClick,s=e.onFinishCallback,c=e.showStopwatch;return t?Object(O.jsxs)(O.Fragment,{children:[!c&&Object(O.jsx)("div",{tabIndex:0,className:"button is-primary is-medium",onClick:n,children:"Start"}),Object(O.jsx)(l.a,{condition:c,children:Object(O.jsx)(T,{onFinishCallback:s})})]}):null},_=function(e){var t=e.segmentData;e.timeGoal;return Object.keys(t).length?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("table",{className:"table is-bordered",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"User"}),Object(O.jsx)("th",{children:"Finish Time"})]})}),Object(O.jsx)("tbody",{children:Object.keys(t).map((function(e){var n=t[e];return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e}),Object(O.jsx)("td",{className:"pb-1 pb-1 ".concat(Object(b.e)(n.finishTime,n.timeGoal)),children:u(n.finishTime)})]},e)}))})]})}):null},L=function(e){Object(p.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(x.a)(this,n);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={minutesRemaining:0,secondsRemaining:0,goalInMS:(new Date).getTime()+1e3*e.props.amount},e.calculateMinutesRemaining=function(){var t=(new Date).getTime(),n=e.state.goalInMS-t;return Math.floor(n%36e5/6e4)},e.tick=function(){e.setState({minutesRemaining:e.calculateMinutesRemaining(),secondsRemaining:e.calculateSecondsRemaining()},(function(){e.state.secondsRemaining<=0&&e.state.minutesRemaining<=0&&(clearInterval(e.interval),e.props.onFinish&&e.props.onFinish())}))},e.componentDidMount=function(){e.tick(),e.interval=setInterval(e.tick,1e3)},e.componentWillUnmount=function(){clearInterval(e.interval)},e}return Object(v.a)(n,[{key:"calculateSecondsRemaining",value:function(){var e=(new Date).getTime(),t=this.state.goalInMS-e;return Math.floor(t%6e4/1e3)}},{key:"textColor",get:function(){return 0===this.state.minutesRemaining&&this.state.secondsRemaining<30?"has-text-danger":""}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:this.textColor,children:[this.state.minutesRemaining,":",this.state.secondsRemaining," left"]})}}]),n}(a.PureComponent),H=function(e){var t=e.restFinished,n=e.rest,s=e.showRestTimer,c=e.onRestFinish;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("b",{className:"is-size-5",children:"Rest"}),Object(O.jsx)("br",{}),Object(O.jsx)(l.a,{condition:!t,children:s?Object(O.jsx)(L,{amount:n,onFinish:c}):Object(O.jsxs)("span",{children:[n," seconds"]})}),Object(O.jsx)(l.a,{condition:t,children:Object(O.jsx)("div",{className:"has-text-success",children:"Get ready for the next segment!"})})]})},z=function(e){var t=e.segment,n=e.segmentsLength,s=e.showStopwatch,c=e.toggleStopwatch,r=e.segmentData,o=e.index,d=e.workoutStarted,u=e.segmentIdentifier,m=(e.allResultsIn,Object(a.useState)(!1)),h=Object(i.a)(m,2),b=h[0],f=h[1],g=Object(a.useState)(!1),x=Object(i.a)(g,2),v=x[0],p=x[1],k=Object(j.f)().email;if(Object(a.useEffect)((function(){f(!1),p(!1)}),[u]),!t)return null;var S=!!r[k];return Object(O.jsx)("div",{className:"mt-2",children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsxs)("div",{className:"segment-position",children:[o+1," / ",n]}),Object(O.jsx)("div",{className:"card-content pt-1",children:Object(O.jsxs)("div",{className:"content",children:[Object(O.jsxs)("div",{className:"columns mt-1 is-flex",children:[Object(O.jsx)(l.a,{condition:!b,children:Object(O.jsxs)("div",{className:"column is-half",children:[Object(O.jsxs)("b",{className:"is-size-5",children:[t.display_length," Goal"]}),Object(O.jsx)("br",{}),t.time_goal," seconds"]})}),Object(O.jsx)("div",{className:"column is-half",children:Object(O.jsx)(H,{rest:t.rest,showRestTimer:b,onRestFinish:function(){f(!1),p(!0)},restFinished:v})})]}),Object(O.jsx)(l.a,{condition:!S,children:Object(O.jsx)(U,{showStopwatch:s,startClick:function(){c(!s)},onFinishCallback:function(e){c(!1,e),f(!0)},workoutStarted:d})}),Object(O.jsx)(_,{segmentData:r,timeGoal:t.time_goal}),Object(O.jsxs)(l.a,{condition:!b,children:[Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:t.description})]})]})})]})})},G=function(e){var t=e.segments,n=e.segmentsLength,s=e.segmentIdentifier,i=Object(D.a)(e,["segments","segmentsLength","segmentIdentifier"]);if(!n)return null;var a=t.find((function(e){return e.identifier===s})),r=t.findIndex((function(e){return e.identifier===s}));return Object(O.jsx)(z,Object(c.a)({index:r,segment:a,segmentsLength:n,segmentIdentifier:s,workoutStarted:!0},i))},K=function(e){var t=e.segment;return Object(O.jsx)("div",{className:"column is-one-third",children:Object(O.jsx)("div",{className:"card",children:Object(O.jsx)("div",{className:"card-content pt-1",children:Object(O.jsxs)("div",{className:"content",children:[Object(O.jsxs)("div",{className:"columns mt-1 is-flex",children:[Object(O.jsxs)("div",{className:"column is-half",children:[Object(O.jsxs)("b",{className:"is-size-5",children:[t.display_length," Goal"]}),Object(O.jsx)("br",{}),t.time_goal," seconds"]}),Object(O.jsxs)("div",{className:"column is-half",children:[Object(O.jsx)("b",{className:"is-size-5",children:"Rest"}),Object(O.jsx)("br",{}),t.rest," seconds"]})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:t.description})]})})})})},A=function(e){var t=e.selectedWorkout,n=e.segmentIdentifier,s=e.segmentData,c=e.showStopwatch,i=e.toggleStopwatch,a=Object(D.a)(e,["selectedWorkout","segmentIdentifier","segmentData","showStopwatch","toggleStopwatch"]),r=Object(j.f)().email;if(!t.segments.length)return Object(O.jsx)("p",{className:"mb-3",children:"Workout cannot start. No segments added yet :("});var o=t.segments,d=o.length,u=!!s[r],m=!1;return m=0===Object.keys(a.members).length?u:Object.keys(s).length===Object.keys(a.members).length,n?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(l.a,{condition:u&&m,children:Object(O.jsx)("div",{className:"button is-primary mt-2 mb-1",tabIndex:0,onClick:a.onNextClick,children:Object(b.f)(n,o)?"Conclude Workout":"Next Segment"})}),Object(O.jsx)(G,{segments:o,segmentsLength:d,segmentIdentifier:n,segmentData:s,showStopwatch:c,toggleStopwatch:i,allResultsIn:m})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"is-size-3 mb-5",children:[d," Total ",1===d?"Segment":"Segments"]}),Object(O.jsx)("div",{className:"segments columns",children:o.map((function(e){return Object(O.jsx)(K,{segment:e},e.identifier)}))})]})},P=function(e){Object(p.a)(n,e);var t=Object(k.a)(n);function n(e){var s;return Object(x.a)(this,n),(s=t.call(this,e)).setChatHistory=function(e){s.setState({chatHistory:e})},s.setUnreadStatus=function(e){s.setState({unreadMessage:e})},s.startWorkoutWrapper=function(){s.props.startWorkout(s.channel)},s.toggleStopwatch=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(e)s.channel.trigger("client-segment-started",{});else{var n=s.props.selectedWorkout.segments.find((function(e){return e.identifier===s.props.segmentIdentifier})),c={email:s.props.email,results:{finishTime:t,timeGoal:n.time_goal,displayLength:n.display_length}};s.channel.trigger("client-segment-finished",c),s.props.mirrorSegmentData(c)}s.setState({showStopwatch:e})},s.onNextClick=function(){s.props.mirrorNextSegment(),s.channel.trigger("client-segment-next",{})},s.state={chatHistory:[],unreadMessage:!1,members:[],showChat:!1,showStopwatch:!1},y.a.logToConsole=!1,s.pusher=new y.a("cebc878343c66e63a78e",{cluster:"us3",authEndpoint:"".concat("https://glacial-plateau-65219.herokuapp.com","/pusher/auth"),auth:{headers:{Authorization:localStorage.getItem("currentUserToken")||""}}}),s.channel=s.pusher.subscribe("presence-workoutChannel-".concat(s.identifier)),s}return Object(v.a)(n,[{key:"identifier",get:function(){return this.props.selectedWorkout.identifier}},{key:"componentDidMount",value:function(){var e=this;this.channel.bind("pusher:subscription_succeeded",(function(e){this.setState({members:e.members,showChat:!0})}),this),this.channel.bind("pusher:member_added",(function(e){var t=Object(c.a)(Object(c.a)({},this.state.members),{},Object(s.a)({},e.id,e.info));this.setState({members:t})}),this),this.channel.bind("pusher:member_removed",(function(e){var t=this,n=Object.keys(this.state.members).filter((function(t){return"".concat(t)!=="".concat(e.id)})).reduce((function(e,n){return e[n]=t.state.members[n],e}),{});this.setState({members:n})}),this),this.channel.bind("client-chat-message",(function(t){e.setState({chatHistory:[].concat(Object(g.a)(e.state.chatHistory),[Object(c.a)({},t)]),unreadMessage:!0})}),this),this.channel.bind("client-workout-started",(function(t){e.props.mirrorWorkout(t)}),this),this.channel.bind("client-segment-started",(function(t){e.setState({showStopwatch:!0})}),this),this.channel.bind("client-segment-finished",(function(t){e.props.mirrorSegmentData(t)}),this),this.channel.bind("client-segment-next",(function(t){e.props.mirrorNextSegment()}),this)}},{key:"componentWillUnmount",value:function(){this.pusher.unsubscribe("presence-workoutChannel-".concat(this.identifier)),this.channel&&this.channel.unbind(),this.pusher.disconnect(),document.body.classList.remove("not-vertically-scrollable")}},{key:"showStartWorkoutButton",get:function(){return!this.props.workoutStarted&&!!this.props.selectedWorkout.segments.length}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"buttons",children:[Object(O.jsx)(l.a,{condition:this.showStartWorkoutButton,children:Object(O.jsx)("div",{tabIndex:0,className:"button is-primary",onClick:this.startWorkoutWrapper,children:"Start Workout"})}),Object(O.jsx)(C,{}),Object(O.jsx)(F,{}),Object(O.jsx)(l.a,{condition:Object.values(this.state.members).length>1,children:Object(O.jsx)(R,Object(c.a)({channel:this.channel,setChatHistory:this.setChatHistory,setUnreadStatus:this.setUnreadStatus},this.state))})]}),Object(O.jsx)(A,{selectedWorkout:this.props.selectedWorkout,segmentIdentifier:this.props.segmentIdentifier,segmentData:this.props.segmentData,showStopwatch:this.state.showStopwatch,toggleStopwatch:this.toggleStopwatch,members:this.state.members,onNextClick:this.onNextClick})]})}}]),n}(a.Component);t.default=function(e){var t=e.match.params.identifier,n=Object(j.f)(),d=n.selectedWorkout,u=n.error,g=n.loading,x=n.email,v=Object(j.e)(),p=Object(a.useState)("current"),k=Object(i.a)(p,2),S=k[0],y=k[1],N=Object(b.a)("liveSessionIdentifier","string"),w=Object(b.a)("liveWorkoutIdentifier","string"),I=!!N&&t===w,C=Object(a.useState)(I),F=Object(i.a)(C,2),W=F[0],E=F[1],M=I?N:null,R=Object(a.useState)(M),D=Object(i.a)(R,2),T=D[0],U=D[1],_=Object(b.a)("liveSegmentIdentifier","string"),L=Object(a.useState)(_),H=Object(i.a)(L,2),z=H[0],G=H[1],K=Object(b.c)(t,T,z),A=Object(a.useState)(K),B=Object(i.a)(A,2),q=B[0],J=B[1],V=function(e,t,n){var s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];localStorage.setItem("liveSessionIdentifier",e),localStorage.setItem("liveWorkoutIdentifier",t),localStorage.setItem("liveSegmentIdentifier",n),E(s),U(e),G(n),J({})};return Object(a.useEffect)((function(){Object(h.b)(t,v)}),[t,v]),g?Object(O.jsx)(o.a,{spaceTop:"mt-5"}):d&&Object.keys(d).length?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"is-flex is-align-items-center ".concat(d.gradientClass," is-justify-content-center border-bottom-primary-1 is-flex-direction-column"),children:[Object(O.jsx)("div",{className:"tag is-medium mt-2 mb-2",children:d.name}),Object(O.jsx)(l.a,{condition:W,children:Object(O.jsx)("div",{className:"tag is-small is-primary mb-2",children:"Active"},T)})]}),Object(O.jsx)(l.a,{condition:!W,children:Object(O.jsx)("div",{className:"tabs is-medium",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"current"===S?"is-active":void 0,children:Object(O.jsx)("a",{className:"tab",onClick:function(){return y("current")},children:"Current"})}),Object(O.jsx)("li",{className:"previous"===S?"is-active":void 0,children:Object(O.jsx)("a",{className:"tab",onClick:function(){return y("previous")},children:"Previous Sessions"})})]})})}),Object(O.jsxs)("div",{className:"ml-5 mr-5 mt-2",children:["current"===S&&Object(O.jsx)(P,{selectedWorkout:d,workoutStarted:W,startWorkout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=m(),s=d.segments[0].identifier;V(n,t,s),e&&e.trigger("client-workout-started",{uuid:n,identifier:t,currentSegmentIdentifier:s})},mirrorWorkout:function(e){V(e.uuid,e.identifier,e.currentSegmentIdentifier)},segmentIdentifier:z,segmentData:q,mirrorSegmentData:function(e){J(Object(c.a)(Object(c.a)({},q),{},Object(s.a)({},e.email,e.results)))},mirrorNextSegment:function(){var e,n=d.segments.findIndex((function(e){return e.identifier===z}));e=n+1>=d.segments.length?null:d.segments[n+1].identifier,localStorage.setItem("liveSegmentIdentifier",e),Object(b.h)(t,T,z,q),G(e),J({}),null===e&&(V(null,null,null,!1),y("previous"))},email:x}),"previous"===S&&Object(O.jsx)(f,{selectedWorkout:d,setActiveTab:y})]})]}):Object(O.jsxs)("div",{className:"has-text-centered",children:[Object(O.jsx)("h1",{className:"is-size-3",children:u}),Object(O.jsx)(r.b,{to:"/workouts",className:"button mt-3",children:"Return to My Workouts"})]})}}}]);
//# sourceMappingURL=4.9dd859b2.chunk.js.map