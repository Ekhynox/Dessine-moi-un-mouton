(this.webpackJsonppictionarry=this.webpackJsonppictionarry||[]).push([[0],{186:function(e,t,n){},187:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t),n.d(t,"ColorChange",(function(){return f}));var c=n(0),s=n.n(c),i=n(71),l=n.n(i),o=(n(1),n(186),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,193)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),c(e),s(e),i(e),l(e)}))}),r=(n(187),n(14)),d=n(3);var a=function(){return Object(d.jsx)("div",{class:"background",children:Object(d.jsxs)("div",{class:"wrapper",children:[Object(d.jsx)("script",{src:"https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js"}),Object(d.jsx)("div",{class:"titre",children:"TITRE !"}),Object(d.jsx)("div",{class:"drawbox",children:Object(d.jsx)("canvas",{id:"DrawBox",width:"750",height:"750"})}),Object(d.jsxs)("div",{class:"outils",children:[Object(d.jsx)("button",{class:"styleB",id:"Pen+",children:"Pen+"}),Object(d.jsx)("button",{class:"styleB",id:"Pen-",children:"Pen-"}),Object(d.jsx)("button",{class:"styleB",id:"Pinceau",children:"Pen"}),Object(d.jsx)("button",{class:"styleB",id:"Erase",children:"Eraser"}),Object(d.jsx)("button",{class:"styleB",id:"Clear",children:"Clear"}),Object(d.jsx)("button",{class:"styleB",children:"..."}),Object(d.jsx)("button",{class:"styleB",children:"..."}),Object(d.jsx)("button",{class:"styleB",children:"..."}),Object(d.jsx)("button",{class:"styleB",children:"..."}),Object(d.jsx)("button",{class:"styleB",children:"..."})]}),Object(d.jsx)("div",{class:"couleurs",children:Object(d.jsx)(r.a,{onChange:function(e){var t=e.hex;t=f(t)},width:"0"})}),Object(d.jsx)("div",{class:"chatbox",children:"Chat"}),Object(d.jsx)("div",{class:"score",children:"Score"})]})})};l.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(a,{})}),document.getElementById("root"));var u,j=document.getElementById("DrawBox"),b=j.getContext("2d"),h=(document.getElementsByClassName("color"),document.getElementById("Pen+")),x=document.getElementById("Pen-"),y=document.getElementById("Erase"),m=document.getElementById("Pinceau"),O=document.getElementById("Clear");function f(e){u=!1,b.strokeStyle=e}function g(e,t){var n=e.getBoundingClientRect();return{x:t.clientX-n.left,y:t.clientY-n.top}}b.lineWidth=8,h.onclick=function(){u=!1,b.lineWidth+=5},x.onclick=function(){u=!1,b.lineWidth-=5},y.onclick=function(){u=!1,b.strokeStyle="white"},m.onclick=function(){u=!1,b.strokeStyle="black"},O.onclick=function(){u=!1,b.clearRect(0,0,1e3,1e3),b.strokeStyle="black"},j.onmousedown=function(e){var t=g(j,e);u=!0,b.beginPath(),b.moveTo(t.x,t.y)},j.onmouseup=function(){u=!1},j.onmousemove=function(e){if(u){var t=g(j,e);b.fillStyle="blue",b.lineTo(t.x,t.y),b.linecap="round",b.stroke()}},o()}},[[191,1,2]]]);
//# sourceMappingURL=main.11057559.chunk.js.map