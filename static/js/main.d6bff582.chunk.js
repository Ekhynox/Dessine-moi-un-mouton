(this.webpackJsonppictionarry=this.webpackJsonppictionarry||[]).push([[0],{195:function(e,t,n){},199:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=199},201:function(e,t,n){"use strict";n.r(t),n.d(t,"ColorChange",(function(){return X}));var c,i=n(1),l=n.n(i),a=n(46),o=n.n(a),s=(n(2),n(76),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,203)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,l=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),l(e),a(e)}))}),d=(n(195),n(196),n(84)),r=n(26),u=n(9),m=n(49),b=n(81),j=n(82),h=n(83),x=n(47);var y,g,f,p=new(n.n(x).a);function O(){f=document.getElementById("peerID").value,document.getElementById("show-peer").innerHTML="Connexion "+f,y=p.connect(f),p.call(f,c).on("stream",(function(e){var t;t=e,document.getElementById("Video").srcObject=t}))}function v(){var e=document.getElementById("chatBox"),t=document.createElement("div"),n=document.createElement("div"),c=document.createElement("span"),i=document.getElementById("message");y=p.connect(f),f=document.getElementById("peerID").value,document.getElementById("show-peer").innerHTML="Connexion "+f,t.setAttribute("class","d-flex justify-content-start mb-4"),n.setAttribute("class","msg_cotainer"),c.setAttribute("class","msg_time"),n.innerHTML="Ekhynox : "+i.value,document.getElementById("message").value="",console.log(i.value),n.appendChild(c),t.appendChild(n),e.appendChild(t),p.on("open",(function(e){g=e,console.log(g)})),y.on("open",(function(e){y.send("Ekhynox : "+i.value)}))}p.on("open",(function(e){g=e,document.getElementById("show-peer").innerHTML=g})),p.on("call",(function(e){e.answer(c)})),p.on("connection",(function(e){e.on("data",(function(e){var t=document.getElementById("chatBox"),n=document.createElement("div"),c=document.createElement("div"),i=document.createElement("span");n.setAttribute("class","d-flex justify-content-start mb-4"),c.setAttribute("class","msg_cotainer"),i.setAttribute("class","msg_time"),c.innerHTML=e,c.appendChild(i),n.appendChild(c),t.appendChild(n),console.log(e)}))}));var B=n(4);var E=function(){return Object(B.jsx)("div",{className:"background",children:Object(B.jsxs)("div",{className:"wrapper",children:[Object(B.jsxs)("div",{className:"titre",children:[Object(B.jsx)("h3",{id:"show-peer"}),Object(B.jsx)("input",{id:"peerID"}),Object(B.jsx)("button",{onClick:O,children:" Connexion "})]}),Object(B.jsx)("div",{className:"drawbox",children:Object(B.jsx)("canvas",{id:"DrawBox",width:"600",height:"600"})}),Object(B.jsxs)("div",{className:"outils",children:[Object(B.jsx)("button",{className:"styleB tresgrand",id:"Pen++",children:Object(B.jsx)(u.a,{})}),Object(B.jsx)("button",{className:"styleB grand",id:"Pen+",children:Object(B.jsx)(u.a,{})}),Object(B.jsx)("button",{className:"styleB moyen",id:"Pen",children:Object(B.jsx)(u.a,{})}),Object(B.jsx)("button",{className:"styleB petit",id:"Pen-",children:Object(B.jsx)(u.a,{})}),Object(B.jsx)("button",{className:"styleB",id:"Pinceau",children:Object(B.jsx)(u.b,{})}),Object(B.jsx)("button",{className:"styleB",id:"Erase",children:Object(B.jsx)(r.a,{})}),Object(B.jsx)("button",{className:"styleB",id:"Clear",children:Object(B.jsx)(u.d,{})}),Object(B.jsx)("button",{className:"styleB",id:"drawRect",children:Object(B.jsx)(m.b,{})}),Object(B.jsx)("button",{className:"styleB",id:"drawRectFull",children:Object(B.jsx)(u.c,{})}),Object(B.jsx)("button",{className:"styleB",id:"drawCircle",children:Object(B.jsx)(m.a,{})}),Object(B.jsx)("button",{className:"styleB",id:"drawCircleFull",children:Object(B.jsx)(u.a,{})}),Object(B.jsx)("button",{className:"styleB",id:"drawLine",children:Object(B.jsx)(b.a,{})}),Object(B.jsx)("button",{className:"styleB",id:"fillIn",children:Object(B.jsx)(j.a,{})}),Object(B.jsx)("button",{className:"styleB",id:"Bundo",children:Object(B.jsx)(h.a,{})}),Object(B.jsx)("button",{className:"styleB",download:"example.jpg",id:"saveImage",children:Object(B.jsx)(r.b,{})})]}),Object(B.jsx)("div",{className:"couleurs",children:Object(B.jsx)(d.a,{onChange:function(e){var t=e.hex;t=X(t)},width:1,circleSize:26,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b","black","white"]})}),Object(B.jsxs)("div",{className:"card",children:[Object(B.jsx)("div",{id:"chatBox",className:"card-body msg_card_body",children:Object(B.jsx)("div",{className:"d-flex justify-content-start mb-4",children:Object(B.jsxs)("div",{className:"msg_cotainer",children:["Ekhynox : Hello toi !",Object(B.jsx)("span",{className:"msg_time",children:"46 Sec"})]})})}),Object(B.jsx)("div",{className:"card-footer",children:Object(B.jsxs)("div",{className:"input-group",children:[Object(B.jsx)("input",{id:"message",className:"form-control type_msg",placeholder:"Type your message..."}),Object(B.jsx)("div",{className:"input-group-append",children:Object(B.jsx)("button",{id:"send",onClick:v,className:"input-group-text send_btn",children:Object(B.jsx)(r.c,{})})})]})})]}),Object(B.jsx)("div",{className:"score",children:"Score"}),Object(B.jsx)("div",{className:"video",children:Object(B.jsx)("video",{autoPlay:!0,id:"Video",width:"600",height:"600"})})]})})};o.a.render(Object(B.jsx)(l.a.StrictMode,{children:Object(B.jsx)(E,{})}),document.getElementById("root"));var k=document.getElementById("DrawBox"),w=k.getContext("2d");c=k.captureStream(60);document.getElementsByClassName("color");var I,N=document.getElementById("Erase"),P=document.getElementById("Pinceau"),C=document.getElementById("Clear"),M=document.getElementById("drawRect"),L=document.getElementById("drawRectFull"),S=document.getElementById("drawCircle"),T=document.getElementById("drawCircleFull"),R=document.getElementById("drawLine"),_=document.getElementById("fillIn"),D=document.getElementById("Bundo"),F=document.getElementById("saveImage");w.lineWidth=6;var A,H=!0,W=!1,U=!1,z=!1,J=!1,V=!1,K=!1;function X(e){I=!1,w.strokeStyle=e,w.fillStyle=e}w.fillStyle="white",w.fillRect(0,0,k.width,k.height),w.fillStyle="black",w.strokeStyle="black";var Y,q,G=document.getElementById("Pen++"),Q=document.getElementById("Pen+"),Z=document.getElementById("Pen"),$=document.getElementById("Pen-");function ee(e,t){var n=e.getBoundingClientRect();return{x:t.clientX-n.left,y:t.clientY-n.top}}function te(e){var t=new window.Image;t.addEventListener("load",(function(){k.getContext("2d").drawImage(t,0,0,k.width,k.height)})),t.setAttribute("src",e)}G.onclick=function(){I=!1,w.lineWidth=18},Q.onclick=function(){I=!1,w.lineWidth=12},Z.onclick=function(){I=!1,w.lineWidth=6},$.onclick=function(){I=!1,w.lineWidth=2},N.onclick=function(){H=!0,W=!1,U=!1,z=!1,J=!1,V=!1,K=!1,I=!1,w.strokeStyle="white"},P.onclick=function(){I=!1,H=!0,W=!1,U=!1,z=!1,J=!1,V=!1,K=!1,w.strokeStyle="black"},C.onclick=function(){A=k.toDataURL("image/jpeg",1),H=!0,W=!1,U=!1,z=!1,J=!1,V=!1,K=!1,I=!1,w.fillStyle="white",w.fillRect(0,0,k.width,k.height),w.fillStyle="black"},M.onclick=function(){H=!1,W=!0,U=!1,z=!1,J=!1,V=!1,K=!1},L.onclick=function(){H=!1,W=!1,U=!0,z=!1,J=!1,V=!1,K=!1},S.onclick=function(){H=!1,W=!1,U=!1,z=!0,J=!1,V=!1,K=!1},T.onclick=function(){H=!1,W=!1,U=!1,z=!1,J=!0,V=!1,K=!1},R.onclick=function(){H=!1,W=!1,U=!1,z=!1,J=!1,V=!0,K=!1},_.onclick=function(){H=!1,W=!1,U=!1,z=!1,J=!1,V=!1,K=!0},D.onclick=function(){te(A)},document.addEventListener("keydown",(function(e){e.ctrlKey&&"z"===e.key&&te(A)})),F.onclick=function(){var e=document.createElement("a");e.href=k.toDataURL("image/jpg",1),e.download="dessine-moi.jpg",e.click()},k.onmousedown=function(e){A=k.toDataURL("image/jpeg",1),H&&(Y=ee(k,e),I=!0,w.beginPath(),w.arc(Y.x,Y.y,w.lineWidth/2,0,2*Math.PI,!1),w.fill(),w.beginPath(),w.lineCap="round",w.moveTo(Y.x,Y.y)),W&&(Y=ee(k,e),I=!0),U&&(Y=ee(k,e),I=!0),z&&(Y=ee(k,e),I=!0),J&&(Y=ee(k,e),I=!0),V&&(Y=ee(k,e),I=!0),K&&(Y=ee(k,e),I=!0,w.beginPath())},k.onmouseup=function(e){I&&W&&(q=ee(k,e),w.beginPath(),w.strokeRect(Y.x,Y.y,q.x-Y.x,q.y-Y.y)),I&&U&&(q=ee(k,e),w.beginPath(),w.fillRect(Y.x,Y.y,q.x-Y.x,q.y-Y.y)),I&&z&&(q=ee(k,e),w.beginPath(),w.ellipse(Y.x,Y.y,Math.abs(q.x-Y.x),Math.abs(q.y-Y.y),0,0,2*Math.PI),w.stroke()),I&&J&&(q=ee(k,e),w.beginPath(),w.ellipse(Y.x,Y.y,Math.abs(q.x-Y.x),Math.abs(q.y-Y.y),0,0,2*Math.PI),w.fill()),I&&V&&(q=ee(k,e),w.beginPath(),w.moveTo(Y.x,Y.y),w.lineTo(q.x,q.y),w.stroke()),I&&K&&(q=ee(k,e),console.log("blablabla")),I=!1},k.onmousemove=function(e){if(I&&H){var t=ee(k,e);w.lineTo(t.x,t.y),w.stroke()}I&&W&&(te(A),q=ee(k,e),w.beginPath(),w.strokeRect(Y.x,Y.y,q.x-Y.x,q.y-Y.y)),I&&U&&(te(A),q=ee(k,e),w.beginPath(),w.fillRect(Y.x,Y.y,q.x-Y.x,q.y-Y.y)),I&&z&&(te(A),q=ee(k,e),w.beginPath(),w.ellipse(Y.x,Y.y,Math.abs(q.x-Y.x),Math.abs(q.y-Y.y),0,0,2*Math.PI),w.stroke()),I&&J&&(te(A),q=ee(k,e),w.beginPath(),w.ellipse(Y.x,Y.y,Math.abs(q.x-Y.x),Math.abs(q.y-Y.y),0,0,2*Math.PI),w.fill()),I&&V&&(te(A),q=ee(k,e),w.beginPath(),w.moveTo(Y.x,Y.y),w.lineTo(q.x,q.y),w.stroke())},s()},76:function(e,t,n){}},[[201,1,2]]]);
//# sourceMappingURL=main.d6bff582.chunk.js.map