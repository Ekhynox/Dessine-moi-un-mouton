(this.webpackJsonppictionarry=this.webpackJsonppictionarry||[]).push([[0],{121:function(e,t,a){},170:function(e,t,a){},329:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=329},334:function(e,t,a){},335:function(e,t,a){"use strict";a.r(t),a.d(t,"SetTab",(function(){return nt})),a.d(t,"GetTab",(function(){return it})),a.d(t,"Connected",(function(){return rt})),a.d(t,"SetPlayer",(function(){return ct})),a.d(t,"GetPlayer",(function(){return ot})),a.d(t,"SetWaiting",(function(){return st})),a.d(t,"SetJeu",(function(){return lt}));var n,i=a(1),r=a.n(i),c=a(13),o=a.n(c),s=(a(5),a(121),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,374)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))}),l=a(20),d=a(135),u=(a(170),a(171),a(133)),m=a(37),h=a(29),b=a(97),g=a(131),j=a(132),p=a(130),x=a(373),f=a(123),v=a(364),O=a(365),y=a(366),w=a(367),C=a(372),k=a(368),N=a(10),I=a(174),B=a(87),S=a.n(B),R=a(3);var P,D,F,T=new S.a,M=it(),E=[];function L(){return D}function z(e){P.send(e)}function A(e){W(e);for(var t=0;t<E.length;t++)P=E[t],console.log(P),P.send(e)}function W(e){var t=document.getElementById("chatBox"),a=document.createElement("div"),n=document.createElement("div"),i=document.createElement("span");a.setAttribute("class","d-flex justify-content-start mb-4"),n.setAttribute("class","msg_cotainer"),i.setAttribute("class","msg_time"),n.innerHTML=e,n.appendChild(i),a.appendChild(n),t.appendChild(a)}T.on("open",(function(e){D=e})),T.on("connection",(function(e){e.on("data",(function(t){console.log(t),"host"==ot().etat?0==t.co?(t.co=!0,e=T.connect(t.peerID,{reliable:!0}),E.push(e),nt(t),function(){U(M=it());for(var e=0;e<E.length;e++)(P=E[e]).on("open",(function(e){P.send(M)})),console.log(M)}()):A(t):"host"==t[0].etat?(U(t),console.log(t)):(W(t),console.log(t))}))})),T.on("open",(function(e){console.log("My peer ID is: "+e)}));var q,H,_;function U(e){M=e,console.log(e);var t=document.getElementById("playerZone");t.innerHTML=" ";for(var a=0;a<M.length;a++){var n=document.createElement("div");n.innerHTML+=M[a].pseudos,t.appendChild(n)}}function J(e){F=e,P=T.connect(F),T.call(F,n).on("stream",(function(e){var t;t=e,document.getElementById("Video").srcObject=t}))}function G(e,t){q=e,H=t,console.log(q),console.log(H),console.log("aa"),H.fillStyle="white",H.fillRect(0,0,q.width,q.height),H.fillStyle="black",H.strokeStyle="black",we=!0,console.log(we)}T.on("call",(function(e){e.answer(n)}));var V,Z,K,X=!0,Y=!1,Q=!1,$=!1,ee=!1,te=!1,ae=!1,ne=a(331),ie=ne("#000");function re(e){_=!1,H.strokeStyle=e,H.fillStyle=e,ie=ne(e),console.log(ie.red)}function ce(){_=!1,H.lineWidth=18}function oe(){_=!1,H.lineWidth=12}function se(){_=!1,H.lineWidth=6}function le(){_=!1,H.lineWidth=2}function de(){X=!0,Y=!1,Q=!1,$=!1,ee=!1,te=!1,ae=!1,_=!1,H.strokeStyle="white"}function ue(){_=!1,X=!0,Y=!1,Q=!1,$=!1,ee=!1,te=!1,ae=!1,H.strokeStyle="black"}function me(){V=q.toDataURL("image/jpeg",1),X=!0,Y=!1,Q=!1,$=!1,ee=!1,te=!1,ae=!1,_=!1,H.fillStyle="white",H.fillRect(0,0,q.width,q.height),H.fillStyle="black"}function he(){X=!1,Y=!0,Q=!1,$=!1,ee=!1,te=!1,ae=!1}function be(){X=!1,Y=!1,Q=!0,$=!1,ee=!1,te=!1,ae=!1}function ge(){X=!1,Y=!1,Q=!1,$=!0,ee=!1,te=!1,ae=!1}function je(){X=!1,Y=!1,Q=!1,$=!1,ee=!0,te=!1,ae=!1}function pe(){X=!1,Y=!1,Q=!1,$=!1,ee=!1,te=!0,ae=!1}function xe(){X=!1,Y=!1,Q=!1,$=!1,ee=!1,te=!1,ae=!0}function fe(){Oe(V)}function ve(){var e=document.createElement("a");e.href=q.toDataURL("image/jpg",1),e.download="dessine-moi.jpg",e.click()}function Oe(e){var t=new window.Image;t.addEventListener("load",(function(){q.getContext("2d").drawImage(t,0,0,q.width,q.height)})),t.setAttribute("src",e)}function ye(e,t){var a=e.getBoundingClientRect();return{x:t.clientX-a.left,y:t.clientY-a.top}}document.addEventListener("keydown",(function(e){e.ctrlKey&&"z"===e.key&&Oe(V)}));var we=!1;function Ce(e,t){return!!(t=e.data[0]&&t[1]==e.data[1]&&t[2]==e.data[2]&&t[3]==e.data[3])}function ke(e,t){var a=H.createImageData(1,1);a.data[0]=ie.red,a.data[1]=ie.green,a.data[2]=ie.blue,a.data[3]=255,H.putImageData(a,e,t),console.log(a)}document.addEventListener("mousedown",(function(e){if(we){var t=ye(q,e);if(V=q.toDataURL("image/jpeg",1),t.x>0&&t.x<q.width&&t.y>0&&t.y<q.height&&(X&&t.x>0&&t.y>0&&t.x<600&&t.y<600&&(_=!0,Z=ye(q,e),H.beginPath(),H.arc(Z.x,Z.y,H.lineWidth/2,0,2*Math.PI,!1),H.fill(),H.beginPath(),H.lineCap="round",H.moveTo(Z.x,Z.y)),Y&&(Z=ye(q,e),_=!0),Q&&(Z=ye(q,e),_=!0),$&&(Z=ye(q,e),_=!0),ee&&(Z=ye(q,e),_=!0),te&&(Z=ye(q,e),_=!0),ae)){Z=ye(q,e),_=!0,H.beginPath();var a=H.getImageData(Z.x,Z.y,1,1).data,n=Z,i=[];for(i.push(n.x,n.y),console.log("tab = "+i);0!=i.length;)i[1]-1>=0&&Ce(H.getImageData(i[0],i[1]-1,1,1),a)&&(i.push(i[0],i[1]-1),ke(i[0],i[1]-1)),i[1]+1<=q.height&&Ce(H.getImageData(i[0],i[1]+1,1,1),a)&&(i.push(i[0],i[1]+1),ke(i[0],i[1]+1)),i[0]-1>=0&&Ce(H.getImageData(i[0]-1,i[1],1,1),a)&&(i.push(i[0]-1,i[1]),ke(i[0]-1,i[1])),i[0]+1<=q.width&&Ce(H.getImageData(i[0]+1,i[1],1,1),a)&&(i.push(i[0]+1,i[1]),ke(i[0]+1,i[1])),i.shift(),i.shift()}}})),document.addEventListener("mouseup",(function(e){we&&(_&&Y&&(K=ye(q,e),H.beginPath(),H.strokeRect(Z.x,Z.y,K.x-Z.x,K.y-Z.y)),_&&Q&&(K=ye(q,e),H.beginPath(),H.fillRect(Z.x,Z.y,K.x-Z.x,K.y-Z.y)),_&&$&&(K=ye(q,e),H.beginPath(),H.ellipse(Z.x,Z.y,Math.abs(K.x-Z.x),Math.abs(K.y-Z.y),0,0,2*Math.PI),H.stroke()),_&&ee&&(K=ye(q,e),H.beginPath(),H.ellipse(Z.x,Z.y,Math.abs(K.x-Z.x),Math.abs(K.y-Z.y),0,0,2*Math.PI),H.fill()),_&&te&&(K=ye(q,e),H.beginPath(),H.moveTo(Z.x,Z.y),H.lineTo(K.x,K.y),H.stroke()),_=!1)})),document.addEventListener("mousemove",(function(e){if(we){var t=ye(q,e);if(t.x>0&&t.x<q.width&&t.y>0&&t.y<q.height){if(_&&X){var a=ye(q,e);H.lineTo(a.x,a.y),H.stroke()}_&&Y&&(Oe(V),K=ye(q,e),H.beginPath(),H.strokeRect(Z.x,Z.y,K.x-Z.x,K.y-Z.y)),_&&Q&&(Oe(V),K=ye(q,e),H.beginPath(),H.fillRect(Z.x,Z.y,K.x-Z.x,K.y-Z.y)),_&&$&&(Oe(V),K=ye(q,e),H.beginPath(),H.ellipse(Z.x,Z.y,Math.abs(K.x-Z.x),Math.abs(K.y-Z.y),0,0,2*Math.PI),H.stroke()),_&&ee&&(Oe(V),K=ye(q,e),H.beginPath(),H.ellipse(Z.x,Z.y,Math.abs(K.x-Z.x),Math.abs(K.y-Z.y),0,0,2*Math.PI),H.fill()),_&&te&&(Oe(V),K=ye(q,e),H.beginPath(),H.moveTo(Z.x,Z.y),H.lineTo(K.x,K.y),H.stroke())}}}));var Ne=["Une montre","P\xeacheur","\xc9cureuil","Baleine","Souris","Hippocampe","Une ruche","Ordinateur","une niche","Mamie","Dinosaure","P\xeacher","Limousine","Chevalier","Oeuf de P\xe2ques","Bonhomme de neige","Poireau","Cravate","Robe de mari\xe9e","Pyjama","Bague","Varicelle","Lion","Barbe","Pizza","Ciseaux","Trousse","Rouge \xe0 l\xe8vres","\xc9charpe","Chaise","Cadeau","Ballon","Lunettes","Arrosoir","Index","Genou","Domino","Pirate","Magicien","P\xe8re No\xebl","Momie","Cirque","Fourchette","Poubelle","Crocodile","Glace","Coffre-fort","Igloo","Tour Eiffel","Notre Dame","Prise \xe9lectrique","Calendrier","Chemin\xe9e","Chaussette","Jeu de cartes","P\xe9tanque","Autostop","Plombier","Pr\xe9sident de la r\xe9publique","Marionnettiste","Berger","G\xe9nie","Esth\xe9ticienne","Printemps","Artichaut","P\xe2te \xe0 modeler","Farine","Mayonnaise","Twitter","Lampe \xe0 huile","Hu\xeetre","Moule","Chou de bruxelles","Tailleur","D\xe9m\xe9nager","Ramper","Neveu","Acteur","Ours polaire","Samedi","Halloween","Sp\xe9l\xe9ologie","Perroquet","\xc9ternuer","Judo","Curling","Formule 1","R\xe9alisateur","Mammouth","Fourmilier","Chirurgien","Mannequin","Hockey sur gazon","Oursin","Cachalot","Distributeur","Squash","Accoucher","Sauter \xe0 la corde","Faire la vaisselle","Livrer un colis","Jouer du ukul\xe9l\xe9","Faire des cr\xe8pes","Traire une vache","Manger un hamburger","Lire un livre en braille","\xc9crire un SMS","Couper du bois","Avoir mal aux dents","Faire une raclette","Sortir le chien","Sauter en parachute","Regarder la t\xe9l\xe9","Grimper \xe0 un arbre","Sauter du plongeoir","Jouer aux lego","Lire dans les lignes de la main","Se laver les dents","Se coiffer les cheveux","Allumer une bougie","\xc9tendre le linge","Tomber amoureux","Jouer au poker","Faire ses devoirs","Cueillir des pommes","Ramasser des champignons","Changer un b\xe9b\xe9","Claquer une porte","Avoir une id\xe9e","Courir un marathon","Tondre la pelouse","\xcatre en retard","Les doigts dans le nez","Vouloir le beurre et l'argent du beurre","Toucher du bois","Regarder les mouches voler","Pisser dans un violon","Dormir sur ses deux oreilles","Prendre son pied","Poser un lapin","Pleurer \xe0 chaudes larmes","Tomber dans les pommes","Un froid de canard","Tourner autour du pot","Avoir plusieurs cordes \xe0 son arc","\xcatre la cinqui\xe8me roue du carrosse","Prendre le taureau par les cornes","Appuyer sur le champignon","Sans queue ni t\xeate","Ne pas avoir les yeux en face des trous","Les bras m'en tombent !","Au pied de la lettre","En avoir par dessus la t\xeate"];function Ie(){return Ne}var Be=Ie().slice(),Se=[],Re=!1;function Pe(){return Re}function De(){for(var e=function(){Be.length<3&&(Be=Ie().slice());var e=Be[Math.floor(Math.random()*Be.length)];void 0===Se.find((function(t){return t===e}))&&Se.push(e)};Se.length<3;)e();var t=document.getElementById("wchoix"),a=document.createElement("BUTTON"),n=document.createElement("BUTTON"),i=document.createElement("BUTTON");a.setAttribute("id","choose_word"),n.setAttribute("id","choose_word"),i.setAttribute("id","choose_word"),i.setAttribute("class","buttoncss"),a.setAttribute("value",Se[0]),n.setAttribute("value",Se[1]),i.setAttribute("value",Se[2]),a.className="btn",n.className="btn",i.className="btn",a.innerHTML=Se[0],n.innerHTML=Se[1],i.innerHTML=Se[2],t.appendChild(a),t.appendChild(n),t.appendChild(i),document.querySelectorAll("#choose_word").forEach((function(e){e.onclick=function(){!function(e){Se=[];var t=Be.findIndex((function(t){return t===e}));-1!==t&&Be.splice(t,1),document.getElementById("wchoixfinal").innerHTML="<h3>".concat(e,"</h3>"),Re=!0}(e.value)}}))}var Fe=a.p+"static/media/1.3ced86bf.jpg",Te=a.p+"static/media/2.806601f5.jpg",Me=a.p+"static/media/3.75e9463d.jpg",Ee=a.p+"static/media/4.629d15b9.jpg",Le=a.p+"static/media/5.c93cb95b.jpg",ze=a.p+"static/media/6.4c95e113.jpg",Ae=a(7);var We=Object(I.a)((function(e){var t,a;return{root:{height:"100vh",backgroundImage:"url(https://source.unsplash.com/collection/24051068/)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},center:{margin:e.spacing("auto","auto")},minuteur:{width:"100vh"},paper:{margin:e.spacing(7.5,2),display:"flex",flexDirection:"column",alignItems:"center"},canvas:{backgroundColor:"rgb(255, 255, 255)",background:"white",borderRadius:15,display:"flex",marginTop:"6vh"},couleurs:(t={margin:e.spacing(8,0),borderRadius:15,width:"5.5vh",height:"65vh",border:"3px solid black",background:"#222"},Object(l.a)(t,"borderRadius",5),Object(l.a)(t,"padding","1vh"),t),avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},headline:{color:"#122740",fontSize:"2.5rem",fontWeight:600,align:"center"},header:{fontFamily:"Barlow, san-serif",backgroundColor:"#fff"},cardjoueur:{width:"100%",height:"75%",borderRadius:16,boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden",fontSize:"1.25rem",fontWeight:600,flexWrap:"wrap",margin:e.spacing(8,2),background:"rgba(240, 160, 240, 0.30)"},cardchat:Object(l.a)({margin:e.spacing(8,2),width:"90%",height:"80%",borderRadius:16,display:"flex",flexDirection:"column",boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden",background:"rgba(240, 160, 240, 0.30)"},"overflow","auto"),styleB:(a={color:"white",fontSize:"150%",borderRadius:15,textAlign:"center",width:"5.5vh",height:"5.5vh",border:"3px solid black",background:"#222"},Object(l.a)(a,"borderRadius",5),Object(l.a)(a,"marginTop","0.5vh"),Object(l.a)(a,"marginLeft","1vh"),a),tresgrand:{fontSize:"150%"},grand:{fontSize:"100%"},moyen:{fontSize:"75%"},petit:{fontSize:"50%"},avatarchoice:{display:"flex","& > *":{margin:e.spacing(1)}},medium:{width:"50%",height:"70%"},large:{width:"23%",height:"80%"},modal:{height:300,flexGrow:1,minWidth:300,display:"flex",padding:e.spacing(8,3,4),alignItems:"center",justifyContent:"center"},choixmots:{width:"40%",height:"80%",borderRadius:16,boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden",fontSize:"1.25rem",fontWeight:600,flexWrap:"wrap",padding:e.spacing(2,4,3),background:"rgba(240, 160, 240, 0.70)"}}})),qe=function(){var e=We(),t=r.a.useRef(null),a=r.a.useState(!0),n=Object(d.a)(a,2),i=n[0],c=n[1],o=function(){c(!1)},s=function(e){var t=e.src,a=e.name;return Object(R.jsxs)(N.Row,{gap:2,p:1,children:[Object(R.jsx)(N.Item,{children:Object(R.jsx)(x.a,{className:"avatar",src:t})}),Object(R.jsxs)(N.Row,{gap:15,p:2,children:[Object(R.jsx)(N.Item,{children:Object(R.jsx)("div",{children:a})}),Object(R.jsx)(N.Item,{children:" 400"})]})]})};function l(){return Re=!1,c(!0),setTimeout((function(){De()}),100),document.getElementById("wchoixfinal").innerHTML="",0}function I(t){return Pe()?Object(R.jsxs)(f.a,{display:"flex",alignItems:"center",children:[Object(R.jsx)(f.a,{className:e.minuteur,mr:1,children:Object(R.jsx)(v.a,{variant:"determinate",value:(a=t.value,100*(a-0)/80)})}),Object(R.jsx)(f.a,{minWidth:35,children:Object(R.jsx)(O.a,{variant:"body2",color:"textSecondary",children:"".concat(Math.round(t.value),"Sec")})})]}):Object(R.jsx)("div",{});var a}var B=r.a.useState(0),S=Object(d.a)(B,2),P=S[0],D=S[1];return r.a.useEffect((function(){var e=setInterval((function(){Pe()&&D((function(e){return e>=80?l():e+1}))}),1e3);return function(){clearInterval(e)}}),[]),Object(R.jsxs)(y.a,{container:!0,xs:12,component:"main",className:e.root,children:[Object(R.jsx)(w.a,{}),Object(R.jsx)(C.a,{disablePortal:!0,disableEnforceFocus:!0,disableAutoFocus:!0,open:i,onClose:o,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",className:e.modal,container:function(){return t.current},children:Object(R.jsxs)("div",{className:e.choixmots,children:[Object(R.jsx)(N.Item,{stretched:!0,children:" Choisissez un mot"}),Object(R.jsx)("p",{id:"wchoix",onClick:o})]})}),Object(R.jsx)(y.a,{item:!0,xs:!1,sm:3,container:!0,direction:"row",id:"game",children:Object(R.jsxs)(N.Column,{p:1,gap:0,className:e.cardjoueur,children:[Object(R.jsxs)(N.Row,{wrap:!0,p:2,children:[Object(R.jsx)(N.Item,{stretched:!0,children:"Participant.e.s"}),Object(R.jsx)(N.Item,{children:"Score"})]}),Object(R.jsx)(k.a,{variant:"middle"}),Object(R.jsx)(s,{name:"Chocoluna",src:Fe})]})}),Object(R.jsx)(y.a,{item:!0,xs:!1,sm:4,elevation:6,square:!0,children:Object(R.jsxs)(N.Row,{wrap:!0,p:2,children:[Object(R.jsx)(N.Row,{children:Object(R.jsx)("div",{id:"wchoixfinal"})}),Object(R.jsx)(N.Row,{className:e.minuteur,children:Object(R.jsx)(I,{value:P})}),Object(R.jsx)(N.Row,{className:e.canvas,children:Object(R.jsx)("div",{className:"drawbox",children:Object(R.jsx)("canvas",{id:"DrawBox",width:"600",height:"600"})})}),Object(R.jsxs)(N.Row,{className:e.center,children:[Object(R.jsx)("button",{onClick:de,className:e.styleB,id:"Erase",children:Object(R.jsx)(m.a,{})}),Object(R.jsx)("button",{onClick:me,className:e.styleB,id:"Clear",children:Object(R.jsx)(h.d,{})}),Object(R.jsx)("button",{onClick:fe,className:e.styleB,id:"Bundo",children:Object(R.jsx)(p.a,{})}),Object(R.jsx)("button",{onClick:ve,className:e.styleB,download:"example.jpg",id:"saveImage",children:Object(R.jsx)(m.b,{})})]})]})}),Object(R.jsxs)(y.a,{item:!0,xs:!1,sm:.5,elevation:6,square:!0,className:e.paper,children:[Object(R.jsx)("button",{onClick:ce,className:Object(Ae.default)(e.styleB,e.tresgrand),id:"Pen++",children:Object(R.jsx)(h.a,{})}),Object(R.jsx)("button",{onClick:oe,className:Object(Ae.default)(e.styleB,e.grand),id:"Pen+",children:Object(R.jsx)(h.a,{})}),Object(R.jsx)("button",{onClick:se,className:Object(Ae.default)(e.styleB,e.moyen),id:"Pen",children:Object(R.jsx)(h.a,{})}),Object(R.jsx)("button",{onClick:le,className:Object(Ae.default)(e.styleB,e.petit),id:"Pen-",children:Object(R.jsx)(h.a,{})}),Object(R.jsx)("button",{onClick:ue,className:e.styleB,id:"Pinceau",children:Object(R.jsx)(h.b,{})}),Object(R.jsx)("button",{onClick:he,className:e.styleB,id:"drawRect",children:Object(R.jsx)(b.b,{})}),Object(R.jsx)("button",{onClick:be,className:e.styleB,id:"drawRectFull",children:Object(R.jsx)(h.c,{})}),Object(R.jsx)("button",{onClick:ge,className:e.styleB,id:"drawCircle",children:Object(R.jsx)(b.a,{})}),Object(R.jsx)("button",{onClick:je,className:e.styleB,id:"drawCircleFull",children:Object(R.jsx)(h.a,{})}),Object(R.jsx)("button",{onClick:pe,className:e.styleB,id:"drawLine",children:Object(R.jsx)(g.a,{})}),Object(R.jsx)("button",{onClick:xe,className:e.styleB,id:"fillIn",children:Object(R.jsx)(j.a,{})})]}),Object(R.jsx)(y.a,{item:!0,xs:!1,sm:.5,elevation:6,square:!0,className:e.couleurs,children:Object(R.jsx)(u.a,{onChange:function(e){var t=e.hex;t=re(t)},width:1,circleSize:21,colors:["#e91e63","#9c27b0","#673ab7","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b","black","white"]})}),Object(R.jsxs)(y.a,{item:!0,xs:12,sm:3,elevation:6,square:!0,className:e.cardchat,children:[Object(R.jsx)("div",{id:"chatBox",className:"card-body"}),Object(R.jsxs)("div",{className:"card-footer input-group",children:[Object(R.jsx)("input",{id:"message",className:"form-control type_msg",placeholder:"Type your message..."}),Object(R.jsx)("div",{className:"input-group-append",children:Object(R.jsx)("button",{id:"send",className:"input-group-text send_btn",children:Object(R.jsx)(m.c,{})})})]})]})]})};var He=Object(I.a)((function(e){var t,a;return{root:{height:"100vh",backgroundImage:"url(https://source.unsplash.com/collection/24051068/)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},stream:{width:"60%",height:"60%",display:"flex",borderRadius:16,margin:e.spacing(10,3),backgroundColor:"rgb(255, 255, 255)",background:"white"},center:{margin:e.spacing("auto","auto")},paper:{margin:e.spacing(7.5,2),display:"flex",flexDirection:"column",alignItems:"center"},canvas:{backgroundColor:"rgb(255, 255, 255)",background:"white",borderRadius:15,display:"flex",marginTop:"6vh"},couleurs:(t={margin:e.spacing(8,0),borderRadius:15,width:"5.5vh",height:"65vh",border:"3px solid black",background:"#222"},Object(l.a)(t,"borderRadius",5),Object(l.a)(t,"padding","1vh"),t),avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},headline:{color:"#122740",fontSize:"2.5rem",fontWeight:600,align:"center"},header:{fontFamily:"Barlow, san-serif",backgroundColor:"#fff"},cardjoueur:{width:"100%",height:"75%",borderRadius:16,boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden",fontSize:"1.25rem",fontWeight:600,flexWrap:"wrap",margin:e.spacing(8,2),background:"rgba(240, 160, 240, 0.30)"},cardchat:Object(l.a)({margin:e.spacing(8,2),width:"90%",height:"80%",borderRadius:16,display:"flex",flexDirection:"column",boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden",background:"rgba(240, 160, 240, 0.30)"},"overflow","auto"),styleB:(a={color:"white",fontSize:"150%",borderRadius:15,textAlign:"center",width:"5.5vh",height:"5.5vh",border:"3px solid black",background:"#222"},Object(l.a)(a,"borderRadius",5),Object(l.a)(a,"marginTop","0.5vh"),Object(l.a)(a,"marginLeft","1vh"),a),tresgrand:{fontSize:"150%"},grand:{fontSize:"100%"},moyen:{fontSize:"75%"},petit:{fontSize:"50%"},avatarchoice:{display:"flex","& > *":{margin:e.spacing(1)}},medium:{width:"50%",height:"70%"},large:{width:"23%",height:"80%"}}})),_e=function(){var e=He(),t=function(e){var t=e.src,a=e.name;return Object(R.jsxs)(N.Row,{gap:2,p:1,children:[Object(R.jsx)(N.Item,{children:Object(R.jsx)(x.a,{className:"avatar",src:t})}),Object(R.jsxs)(N.Row,{gap:15,p:2,children:[Object(R.jsx)(N.Item,{children:Object(R.jsx)("div",{children:a})}),Object(R.jsx)(N.Item,{children:" 400"})]})]})};return Object(R.jsxs)(y.a,{container:!0,xs:12,component:"main",className:e.root,children:[Object(R.jsx)(w.a,{}),Object(R.jsx)(y.a,{item:!0,xs:!1,sm:3,container:!0,direction:"row",id:"game",children:Object(R.jsxs)(N.Column,{p:1,gap:0,className:e.cardjoueur,children:[Object(R.jsxs)(N.Row,{wrap:!0,p:2,children:[Object(R.jsx)(N.Item,{stretched:!0,children:"Participant.e.s"}),Object(R.jsx)(N.Item,{children:"Score"})]}),Object(R.jsx)(k.a,{variant:"middle"}),Object(R.jsx)(t,{name:"Chocoluna",src:Fe})]})}),Object(R.jsx)(y.a,{item:!0,xs:!1,sm:5,elevation:6,square:!0,className:e.stream,children:Object(R.jsx)("video",{autoPlay:!0,id:"Video"})}),Object(R.jsxs)(y.a,{item:!0,xs:12,sm:3,elevation:6,square:!0,className:e.cardchat,children:[Object(R.jsx)("div",{id:"chatBox",className:"card-body"}),Object(R.jsxs)("div",{className:"card-footer input-group",children:[Object(R.jsx)("input",{id:"message",className:"form-control type_msg",placeholder:"Type your message..."}),Object(R.jsx)("div",{className:"input-group-append",children:Object(R.jsx)("button",{id:"send",className:"input-group-text send_btn",children:Object(R.jsx)(m.c,{})})})]})]})]})},Ue=a(369),Je=a(370),Ge=a(371),Ve=(a(175),a.p+"static/media/Mylogo.0c955908.jpg"),Ze=a.p+"static/media/7.3bbc6554.jpg",Ke=a.p+"static/media/8.15172146.jpg";function Xe(){var e=Ye(),t={etat:"host",pseudos:"",avatar:"",peerID:"",score:"0",co:!1,msg:!1},a=function(e){document.getElementById("logo").innerHTML="<img alt="+e.target.alt+' src= "'+e.target.src+'" class="MuiAvatar-img">',t.avatar=e.target.src};return Object(R.jsxs)(y.a,{container:!0,xs:12,component:"main",className:e.root,children:[Object(R.jsx)(w.a,{}),Object(R.jsx)(y.a,{item:!0,xs:!1,sm:8,container:!0,direction:"row",className:e.image,children:Object(R.jsxs)(N.Column,{p:0,gap:0,container:!0,className:e.card,children:[Object(R.jsx)(N.Row,{wrap:!0,p:2,alignItems:"baseline",className:e.header,children:Object(R.jsx)(N.Item,{stretched:!0,className:e.headline,children:"Choisis un Avatar"})}),Object(R.jsxs)(N.Row,{alignItems:"flex",container:!0,xs:12,sm:3,className:e.avatarchoice,children:[Object(R.jsx)(x.a,{onClick:a,className:e.large,alt:"avatar1",src:Fe}),Object(R.jsx)(x.a,{onClick:a,item:!0,className:e.large,alt:"avatar2",src:Te}),Object(R.jsx)(x.a,{onClick:a,item:!0,className:e.large,alt:"avatar3",src:Me}),Object(R.jsx)(x.a,{onClick:a,item:!0,className:e.large,alt:"avatar4",src:Ee})]}),Object(R.jsxs)(N.Row,{alignItems:"baseline",className:e.avatarchoice,children:[Object(R.jsx)(x.a,{onClick:a,className:e.large,alt:"avatar5",src:Le}),Object(R.jsx)(x.a,{onClick:a,className:e.large,alt:"avatar6",src:ze}),Object(R.jsx)(x.a,{onClick:a,className:e.large,alt:"avatar7",src:Ze}),Object(R.jsx)(x.a,{onClick:a,className:e.large,alt:"avatar8",src:Ke})]}),Object(R.jsx)(N.Row,{flexDirection:"row-reverse",className:e.copyright,children:Object(R.jsxs)("p",{children:["All righs reserved to ",Object(R.jsx)("b",{children:Object(R.jsx)("i",{children:"PlaceIt!"})})]})})]})}),Object(R.jsx)(y.a,{item:!0,xs:12,sm:4,component:Ue.a,elevation:6,square:!0,children:Object(R.jsxs)("div",{className:e.paper,children:[Object(R.jsx)("h1",{children:" Dessine Moi Un Mouton"}),Object(R.jsx)(x.a,{id:"logo",className:e.medium,src:Ve,alt:"My logo"}),Object(R.jsx)(O.a,{component:"h1",variant:"h5",children:Object(R.jsx)("h3",{id:"show-peer"})}),Object(R.jsx)(Je.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"pseudos",label:"Pseudo",name:"Pseudo",autoComplete:"Pseudo",autoFocus:!0}),Object(R.jsx)(Ge.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(){t.pseudos=document.getElementById("pseudos").value,console.log(t),ct(t),nt(t),st()},children:"Connexion"})]})})]})}var Ye=Object(I.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/collection/24051068/)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(6,2),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"80%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},headline:{color:"#122740",fontSize:"2.5rem",fontWeight:600,align:"center"},header:{fontFamily:"Barlow, san-serif",backgroundColor:"#fff"},card:{width:"92%",height:"92%",margin:e.spacing(5,5),borderRadius:16,boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden"},avatarchoice:{display:"flex","& > *":{margin:e.spacing(1)}},medium:{width:"50%",height:"70%"},large:{width:"23%",height:"80%"},copyright:{fontFamily:"Barlow, san-serif",color:"white",margin:e.spacing(3,2)}}}));a(334);function Qe(){var e=tt(),t=tt();return Object(R.jsxs)(y.a,{container:!0,xs:12,component:"main",className:e.root,children:[Object(R.jsx)(w.a,{}),Object(R.jsx)(y.a,{item:!0,xs:12,sm:4,component:Ue.a,elevation:6,square:!0,children:Object(R.jsxs)("div",{className:e.paper,children:[Object(R.jsxs)(N.Column,{p:0,gap:0,className:t.cardjoueur,children:[Object(R.jsxs)(N.Row,{wrap:!0,p:2,alignItems:"baseline",className:t.header,children:[Object(R.jsx)(N.Item,{stretched:!0,className:t.headline,children:"Participant.e.s"}),Object(R.jsx)(N.Item,{className:t.actions,children:"Score"})]}),Object(R.jsxs)("div",{id:"playerZone",children:[Object(R.jsx)(et,{name:"Amber Matthews",src:"https://i.pravatar.cc/300?img=10"}),Object(R.jsx)(k.a,{variant:"middle",className:t.divider})]})]}),Object(R.jsx)("div",{id:"zoneId",children:Object(R.jsx)(Ge.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(){var e=L();console.log(e),document.getElementById("zoneId").innerHTML=e},children:"G\xe9n\xe9rer une ID"})}),Object(R.jsxs)("div",{id:"textAndButton",children:[Object(R.jsx)(Je.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"peerID",label:"Host_Id",name:"HostId",autoComplete:"Host_Id",autoFocus:!0}),Object(R.jsx)(Ge.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(){!function(e){var t=ot();t.etat="viewer",console.log(t),P=T.connect(e,{reliable:!0});var a=ot();P.on("open",(function(e){P.send(a)}))}(document.getElementById("peerID").value)},children:"Connexion"})]})]})}),Object(R.jsxs)(y.a,{item:!0,xs:12,sm:3,elevation:6,square:!0,className:e.cardchat,children:[Object(R.jsx)("div",{id:"chatBox",className:"card-body"}),Object(R.jsxs)("div",{className:"card-footer input-group",children:[Object(R.jsx)("input",{id:"message",className:"form-control type_msg",placeholder:"Type your message..."}),Object(R.jsx)("div",{className:"input-group-append",children:Object(R.jsx)("button",{id:"send",className:"input-group-text send_btn",children:Object(R.jsx)(m.c,{})})})]})]}),Object(R.jsx)(y.a,{item:!0,xs:!1,sm:4,className:e.paper,children:Object(R.jsxs)(N.Column,{p:0,gap:0,container:!0,direction:"row",className:e.card,children:[Object(R.jsx)(N.Row,{wrap:!0,p:2,alignItems:"baseline",className:e.header,children:Object(R.jsx)(N.Item,{stretched:!0,className:e.headline,children:"Choisis une phase de jeu"})}),Object(R.jsx)(Ge.a,{className:t.button,type:"submit",fullWidth:!0,variant:"contained",onClick:function(){var e=document.getElementById("peerID").value;console.log(e.value),lt(),setTimeout((function(){J(e)}),1e3)},children:"Jouer"})]})})]})}var $e,et=function(e){var t=e.src,a=e.name;return Object(R.jsxs)(N.Row,{gap:2,p:2.5,children:[Object(R.jsx)(N.Item,{children:Object(R.jsx)(x.a,{src:t})}),Object(R.jsx)(N.Row,{wrap:!0,grow:!0,gap:.5,minWidth:0,children:Object(R.jsx)(N.Item,{grow:!0,minWidth:0,children:Object(R.jsx)("div",{children:a})})})]})},tt=Object(I.a)((function(e){return{root:{height:"100vh",backgroundImage:"url(https://source.unsplash.com/collection/24051068/)",backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},cardjoueur:{width:"100%",borderRadius:16,boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden",fontSize:"1.25rem",fontWeight:600,flexWrap:"wrap"},card:{width:"92%",height:"92%",margin:e.spacing(5,5),borderRadius:16,boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden",display:"flex",background:"rgba(240, 160, 240, 0.30)"},cardchat:Object(l.a)({margin:e.spacing(8,2),width:"90%",height:"80%",borderRadius:16,display:"flex",flexDirection:"column",boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden",background:"rgba(240, 160, 240, 0.30)"},"overflow","auto"),headline:{color:"#122740",fontSize:"1.25rem",fontWeight:600},header:{fontFamily:"Barlow, san-serif",backgroundColor:"#fff"},button:{fontFamily:"Barlow, san-serif",background:"linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #8B00FF)",borderRadius:3,border:0,width:"30%",height:"10%",padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",margin:e.spacing("auto","auto")},buttongrid:{fontFamily:"Barlow, san-serif",background:"linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #8B00FF)",borderRadius:3,border:0,width:"30%",height:"30%",padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"}}})),at=[];function nt(e){at.push(e)}function it(){return at}function rt(e){at[e].co=!0}function ct(e){$e=e,console.log($e)}function ot(){return $e}function st(){o.a.render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsx)(Qe,{})}),document.getElementById("root")),setTimeout((function(){dt()}),100),setTimeout((function(){U(at)}),100),setTimeout((function(){$e.peerID=L()}),100)}function lt(){o.a.render(Object(R.jsxs)(r.a.StrictMode,{children:[Object(R.jsx)(qe,{}),Object(R.jsx)(_e,{})]}),document.getElementById("root")),setTimeout((function(){!function(){var e=document.getElementById("DrawBox"),t=e.getContext("2d");a=e,n=a.captureStream(300),G(e,t);var a}()}),100),setTimeout((function(){dt()}),100),setTimeout((function(){De()}),100)}function dt(){document.getElementById("send").onclick=function(){var e=document.getElementById("message").value,t=$e.pseudos+" : "+e;"host"==$e.etat?A(t):z(t),document.getElementById("message").value=""},document.addEventListener("keydown",(function(e){if("Enter"===e.key&&""!=document.getElementById("message").value){var t=document.getElementById("message").value,a=$e.pseudos+" : "+t;"host"==$e.etat?A(a):z(a),document.getElementById("message").value=""}}))}o.a.render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsx)(Xe,{})}),document.getElementById("root")),s()}},[[335,1,2]]]);
//# sourceMappingURL=main.4353cf3f.chunk.js.map