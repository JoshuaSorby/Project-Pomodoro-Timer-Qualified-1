(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),i=a.n(r),s=(a(10),a(1)),l=a(2);function o(e){var t=Math.max(0,e.timeRemaining-1);return Object(l.a)(Object(l.a)({},e),{},{timeRemaining:t})}var u=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),l=Object(s.a)(i,2),u=l[0],m=l[1],d=Object(n.useState)(25),b=Object(s.a)(d,2),p=b[0],v=b[1],E=Object(n.useState)(5),f=Object(s.a)(E,2),N=f[0],g=f[1],O=p,j=N,y=function(e){var t=e.target;"decrease-focus"===t.id&&p>5&&v(p-5),"increase-focus"===t.id&&p<60&&v(p+5),"decrease-break"===t.id&&N>1&&g(N-1),"increase-break"===t.id&&N<15&&g(N+1)},k=function(e){return e<10?0:null};!function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){return 0===u.timeRemaining?(new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play(),m(function(e,t){return function(a){return"Focusing"===a.label?{label:"On Break",timeRemaining:60*t}:{label:"Focusing",timeRemaining:60*e}}}(p,N))):m(o)}),a?1e3:null);var h,S=Object(n.useState)(!0),w=Object(s.a)(S,2),R=w[0],x=w[1],C=Object(n.useState)(!1),A=Object(s.a)(C,2),B=A[0],F=A[1],D=function(e){return"On Break"!==(null===e||void 0===e?void 0:e.label)?O:j}(u),I=function(e){return 100-(null===e||void 0===e?void 0:e.timeRemaining)/(60*D)*100},M=Object(n.useState)({display:"none"}),J=Object(s.a)(M,2),P=J[0],T=J[1];return c.a.createElement("div",{className:"pomodoro"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"input-group input-group-lg mb-2"},c.a.createElement("span",{className:"input-group-text","data-testid":"duration-focus"},"Focus Duration: ",k(p),p,":00"),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"decrease-focus",id:"decrease-focus",onClick:y,disabled:B},c.a.createElement("span",{className:"oi oi-minus"})),c.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"increase-focus",id:"increase-focus",onClick:y,disabled:B},c.a.createElement("span",{className:"oi oi-plus"}))))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"float-right"},c.a.createElement("div",{className:"input-group input-group-lg mb-2"},c.a.createElement("span",{className:"input-group-text","data-testid":"duration-break"},"Break Duration: ",k(N),N,":00"),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"decrease-break",id:"decrease-break",onClick:y,disabled:B},c.a.createElement("span",{className:"oi oi-minus"})),c.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"increase-break",id:"increase-break",onClick:y,disabled:B},c.a.createElement("span",{className:"oi oi-plus"}))))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"btn-group btn-group-lg mb-2",role:"group","aria-label":"Timer controls"},c.a.createElement("button",{type:"button",className:"btn btn-primary","data-testid":"play-pause",title:"Start or pause timer",onClick:function(){x(!1),F(!0),T(null),r((function(e){var t=!e;return t&&m((function(e){return null===e?{label:"Focusing",timeRemaining:60*p}:e})),t}))}},c.a.createElement("span",{className:(h={oi:!0,"oi-media-play":!a,"oi-media-pause":a},Object.entries(h).reduce((function(e,t){var a=Object(s.a)(t,2),n=a[0],c=a[1];return e.concat(c?n:void 0)}),[]).filter((function(e){return void 0!==e})).join(" "))})),c.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"stop",title:"Stop the session",disabled:R,onClick:function(){r(!1),m(null),T({display:"none"}),F(!1),x(!0)}},c.a.createElement("span",{className:"oi oi-media-stop"}))))),c.a.createElement("div",null,c.a.createElement("div",{className:"row mb-2",style:P},c.a.createElement("div",{className:"col"},function(e){return e?c.a.createElement("h2",{"data-testid":"session-title"},null===e||void 0===e?void 0:e.label," for ",k(D),D,":00 minutes"):null}(u),u?c.a.createElement("p",{className:"lead","data-testid":"session-sub-title"},function(e){var t=e/60;(t=Math.floor(t))<10&&(t="0".concat(t));var a=e%60;return a<10&&(a="0".concat(a)),"".concat(t,":").concat(a)}(null===u||void 0===u?void 0:u.timeRemaining)," remaining"):null)),c.a.createElement("div",{className:"row mb-2",style:P},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"progress",style:{height:"20px"}},c.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":I(u),style:{width:"".concat(I(u),"%")}}))))))};var m=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header container"},c.a.createElement("h1",null,"Pomodoro Timer")),c.a.createElement("div",{className:"container"},c.a.createElement(u,null)))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.eae6e471.chunk.js.map