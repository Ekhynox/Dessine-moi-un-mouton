(this.webpackJsonppictionarry=this.webpackJsonppictionarry||[]).push([[0],{121:function(e,t,a){},170:function(e,t,a){},329:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=329},334:function(e,t,a){},335:function(e,t,a){"use strict";a.r(t),a.d(t,"SetTab",(function(){return at})),a.d(t,"GetTab",(function(){return nt})),a.d(t,"Connected",(function(){return it})),a.d(t,"SetPlayer",(function(){return rt})),a.d(t,"GetPlayer",(function(){return ct})),a.d(t,"SetWaiting",(function(){return ot})),a.d(t,"SetJeu",(function(){return st}));var n,i,r=a(1),c=a.n(r),o=a(13),s=a.n(o),l=(a(5),a(121),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,374)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))}),d=a(20),u=a(135),m=(a(170),a(171),a(133)),h=a(37),b=a(29),g=a(97),j=a(131),p=a(132),x=a(130),f=a(373),v=a(123),O=a(364),y=a(365),w=a(366),C=a(367),k=a(372),N=a(368),I=a(10),B=a(174),S=a(87),R=a.n(S),P=a(3);var D,F,T=new R.a,M=nt(),E=[];function L(){return F}function z(e){D.send(e)}function A(e){W(e);for(var t=0;t<E.length;t++)(D=E[t]).send(e)}function W(e){var t=document.getElementById("chatBox"),a=document.createElement("div"),n=document.createElement("div"),i=document.createElement("span");a.setAttribute("class","d-flex justify-content-start mb-4"),n.setAttribute("class","msg_cotainer"),i.setAttribute("class","msg_time"),n.innerHTML=e,n.appendChild(i),a.appendChild(n),t.appendChild(a)}T.on("open",(function(e){F=e})),T.on("connection",(function(e){e.on("data",(function(t){console.log(t),"host"==ct().etat?0==t.co?(t.co=!0,e=T.connect(t.peerID,{reliable:!0}),E.push(e),at(t),function(){U(M=nt());for(var e=0;e<E.length;e++)(D=E[e]).on("open",(function(e){D.send(M)}))}()):A(t):("host"==t[0].etat?U(t):W(t),t.canvas&&(n=t.canvas,console.log(n)))}))}));var q,H,_;function U(e){M=e;var t=document.getElementById("playerZone");t.innerHTML=" ";for(var a=0;a<M.length;a++){var n=document.createElement("div");n.innerHTML+=M[a].pseudos,t.appendChild(n)}}function J(e,t){q=e,(H=t).fillStyle="white",H.fillRect(0,0,q.width,q.height),H.fillStyle="black",H.strokeStyle="black",ye=!0}T.on("call",(function(e){"host"!=ct().etat&&(e.answer(),st(),console.log(e),e.on("stream",(function(e){var t;t=e,document.getElementById("Video").srcObject=t})))}));var G,V,Z,K=!0,X=!1,Y=!1,Q=!1,$=!1,ee=!1,te=!1,ae=a(331),ne=ae("#000");function ie(e){_=!1,H.strokeStyle=e,H.fillStyle=e,ne=ae(e),console.log(ne.red)}function re(){_=!1,H.lineWidth=18}function ce(){_=!1,H.lineWidth=12}function oe(){_=!1,H.lineWidth=6}function se(){_=!1,H.lineWidth=2}function le(){K=!0,X=!1,Y=!1,Q=!1,$=!1,ee=!1,te=!1,_=!1,H.strokeStyle="white"}function de(){_=!1,K=!0,X=!1,Y=!1,Q=!1,$=!1,ee=!1,te=!1,H.strokeStyle="black"}function ue(){G=q.toDataURL("image/jpeg",1),K=!0,X=!1,Y=!1,Q=!1,$=!1,ee=!1,te=!1,_=!1,H.fillStyle="white",H.fillRect(0,0,q.width,q.height),H.fillStyle="black"}function me(){K=!1,X=!0,Y=!1,Q=!1,$=!1,ee=!1,te=!1}function he(){K=!1,X=!1,Y=!0,Q=!1,$=!1,ee=!1,te=!1}function be(){K=!1,X=!1,Y=!1,Q=!0,$=!1,ee=!1,te=!1}function ge(){K=!1,X=!1,Y=!1,Q=!1,$=!0,ee=!1,te=!1}function je(){K=!1,X=!1,Y=!1,Q=!1,$=!1,ee=!0,te=!1}function pe(){K=!1,X=!1,Y=!1,Q=!1,$=!1,ee=!1,te=!0}function xe(){ve(G)}function fe(){var e=document.createElement("a");e.href=q.toDataURL("image/jpg",1),e.download="dessine-moi.jpg",e.click()}function ve(e){var t=new window.Image;t.addEventListener("load",(function(){q.getContext("2d").drawImage(t,0,0,q.width,q.height)})),t.setAttribute("src",e)}function Oe(e,t){var a=e.getBoundingClientRect();return{x:t.clientX-a.left,y:t.clientY-a.top}}document.addEventListener("keydown",(function(e){e.ctrlKey&&"z"===e.key&&ve(G)}));var ye=!1;function we(e,t){return!!(t=e.data[0]&&t[1]==e.data[1]&&t[2]==e.data[2]&&t[3]==e.data[3])}function Ce(e,t){var a=H.createImageData(1,1);a.data[0]=ne.red,a.data[1]=ne.green,a.data[2]=ne.blue,a.data[3]=255,H.putImageData(a,e,t),console.log(a)}document.addEventListener("mousedown",(function(e){if(ye){var t=Oe(q,e);if(G=q.toDataURL("image/jpeg",1),t.x>0&&t.x<q.width&&t.y>0&&t.y<q.height&&(K&&t.x>0&&t.y>0&&t.x<600&&t.y<600&&(_=!0,V=Oe(q,e),H.beginPath(),H.arc(V.x,V.y,H.lineWidth/2,0,2*Math.PI,!1),H.fill(),H.beginPath(),H.lineCap="round",H.moveTo(V.x,V.y)),X&&(V=Oe(q,e),_=!0),Y&&(V=Oe(q,e),_=!0),Q&&(V=Oe(q,e),_=!0),$&&(V=Oe(q,e),_=!0),ee&&(V=Oe(q,e),_=!0),te)){V=Oe(q,e),_=!0,H.beginPath();var a=H.getImageData(V.x,V.y,1,1).data,n=V,i=[];for(i.push(n.x,n.y),console.log("tab = "+i);0!=i.length;)i[1]-1>=0&&we(H.getImageData(i[0],i[1]-1,1,1),a)&&(i.push(i[0],i[1]-1),Ce(i[0],i[1]-1)),i[1]+1<=q.height&&we(H.getImageData(i[0],i[1]+1,1,1),a)&&(i.push(i[0],i[1]+1),Ce(i[0],i[1]+1)),i[0]-1>=0&&we(H.getImageData(i[0]-1,i[1],1,1),a)&&(i.push(i[0]-1,i[1]),Ce(i[0]-1,i[1])),i[0]+1<=q.width&&we(H.getImageData(i[0]+1,i[1],1,1),a)&&(i.push(i[0]+1,i[1]),Ce(i[0]+1,i[1])),i.shift(),i.shift()}}})),document.addEventListener("mouseup",(function(e){ye&&(_&&X&&(Z=Oe(q,e),H.beginPath(),H.strokeRect(V.x,V.y,Z.x-V.x,Z.y-V.y)),_&&Y&&(Z=Oe(q,e),H.beginPath(),H.fillRect(V.x,V.y,Z.x-V.x,Z.y-V.y)),_&&Q&&(Z=Oe(q,e),H.beginPath(),H.ellipse(V.x,V.y,Math.abs(Z.x-V.x),Math.abs(Z.y-V.y),0,0,2*Math.PI),H.stroke()),_&&$&&(Z=Oe(q,e),H.beginPath(),H.ellipse(V.x,V.y,Math.abs(Z.x-V.x),Math.abs(Z.y-V.y),0,0,2*Math.PI),H.fill()),_&&ee&&(Z=Oe(q,e),H.beginPath(),H.moveTo(V.x,V.y),H.lineTo(Z.x,Z.y),H.stroke()),_=!1)})),document.addEventListener("mousemove",(function(e){if(ye){var t=Oe(q,e);if(t.x>0&&t.x<q.width&&t.y>0&&t.y<q.height){if(_&&K){var a=Oe(q,e);H.lineTo(a.x,a.y),H.stroke()}_&&X&&(ve(G),Z=Oe(q,e),H.beginPath(),H.strokeRect(V.x,V.y,Z.x-V.x,Z.y-V.y)),_&&Y&&(ve(G),Z=Oe(q,e),H.beginPath(),H.fillRect(V.x,V.y,Z.x-V.x,Z.y-V.y)),_&&Q&&(ve(G),Z=Oe(q,e),H.beginPath(),H.ellipse(V.x,V.y,Math.abs(Z.x-V.x),Math.abs(Z.y-V.y),0,0,2*Math.PI),H.stroke()),_&&$&&(ve(G),Z=Oe(q,e),H.beginPath(),H.ellipse(V.x,V.y,Math.abs(Z.x-V.x),Math.abs(Z.y-V.y),0,0,2*Math.PI),H.fill()),_&&ee&&(ve(G),Z=Oe(q,e),H.beginPath(),H.moveTo(V.x,V.y),H.lineTo(Z.x,Z.y),H.stroke())}}}));var ke=["Une montre","P\xeacheur","\xc9cureuil","Baleine","Souris","Hippocampe","Une ruche","Ordinateur","une niche","Mamie","Dinosaure","P\xeacher","Limousine","Chevalier","Oeuf de P\xe2ques","Bonhomme de neige","Poireau","Cravate","Robe de mari\xe9e","Pyjama","Bague","Varicelle","Lion","Barbe","Pizza","Ciseaux","Trousse","Rouge \xe0 l\xe8vres","\xc9charpe","Chaise","Cadeau","Ballon","Lunettes","Arrosoir","Index","Genou","Domino","Pirate","Magicien","P\xe8re No\xebl","Momie","Cirque","Fourchette","Poubelle","Crocodile","Glace","Coffre-fort","Igloo","Tour Eiffel","Notre Dame","Prise \xe9lectrique","Calendrier","Chemin\xe9e","Chaussette","Jeu de cartes","P\xe9tanque","Autostop","Plombier","Pr\xe9sident de la r\xe9publique","Marionnettiste","Berger","G\xe9nie","Esth\xe9ticienne","Printemps","Artichaut","P\xe2te \xe0 modeler","Farine","Mayonnaise","Twitter","Lampe \xe0 huile","Hu\xeetre","Moule","Chou de bruxelles","Tailleur","D\xe9m\xe9nager","Ramper","Neveu","Acteur","Ours polaire","Samedi","Halloween","Sp\xe9l\xe9ologie","Perroquet","\xc9ternuer","Judo","Curling","Formule 1","R\xe9alisateur","Mammouth","Fourmilier","Chirurgien","Mannequin","Hockey sur gazon","Oursin","Cachalot","Distributeur","Squash","Accoucher","Sauter \xe0 la corde","Faire la vaisselle","Livrer un colis","Jouer du ukul\xe9l\xe9","Faire des cr\xe8pes","Traire une vache","Manger un hamburger","Lire un livre en braille","\xc9crire un SMS","Couper du bois","Avoir mal aux dents","Faire une raclette","Sortir le chien","Sauter en parachute","Regarder la t\xe9l\xe9","Grimper \xe0 un arbre","Sauter du plongeoir","Jouer aux lego","Lire dans les lignes de la main","Se laver les dents","Se coiffer les cheveux","Allumer une bougie","\xc9tendre le linge","Tomber amoureux","Jouer au poker","Faire ses devoirs","Cueillir des pommes","Ramasser des champignons","Changer un b\xe9b\xe9","Claquer une porte","Avoir une id\xe9e","Courir un marathon","Tondre la pelouse","\xcatre en retard","Les doigts dans le nez","Vouloir le beurre et l'argent du beurre","Toucher du bois","Regarder les mouches voler","Pisser dans un violon","Dormir sur ses deux oreilles","Prendre son pied","Poser un lapin","Pleurer \xe0 chaudes larmes","Tomber dans les pommes","Un froid de canard","Tourner autour du pot","Avoir plusieurs cordes \xe0 son arc","\xcatre la cinqui\xe8me roue du carrosse","Prendre le taureau par les cornes","Appuyer sur le champignon","Sans queue ni t\xeate","Ne pas avoir les yeux en face des trous","Les bras m'en tombent !","Au pied de la lettre","En avoir par dessus la t\xeate"];function Ne(){return ke}var Ie=Ne().slice(),Be=[],Se=!1;function Re(){return Se}function Pe(){for(var e=function(){Ie.length<3&&(Ie=Ne().slice());var e=Ie[Math.floor(Math.random()*Ie.length)];void 0===Be.find((function(t){return t===e}))&&Be.push(e)};Be.length<3;)e();var t=document.getElementById("wchoix"),a=document.createElement("BUTTON"),n=document.createElement("BUTTON"),i=document.createElement("BUTTON");a.setAttribute("id","choose_word"),n.setAttribute("id","choose_word"),i.setAttribute("id","choose_word"),i.setAttribute("class","buttoncss"),a.setAttribute("value",Be[0]),n.setAttribute("value",Be[1]),i.setAttribute("value",Be[2]),a.className="btn",n.className="btn",i.className="btn",a.innerHTML=Be[0],n.innerHTML=Be[1],i.innerHTML=Be[2],t.appendChild(a),t.appendChild(n),t.appendChild(i),document.querySelectorAll("#choose_word").forEach((function(e){e.onclick=function(){!function(e){Be=[];var t=Ie.findIndex((function(t){return t===e}));-1!==t&&Ie.splice(t,1),document.getElementById("wchoixfinal").innerHTML="<h3>".concat(e,"</h3>"),Se=!0}(e.value)}}))}var De=a.p+"static/media/1.3ced86bf.jpg",Fe=a.p+"static/media/2.806601f5.jpg",Te=a.p+"static/media/3.75e9463d.jpg",Me=a.p+"static/media/4.629d15b9.jpg",Ee=a.p+"static/media/5.c93cb95b.jpg",Le=a.p+"static/media/6.4c95e113.jpg",ze=a(7);var Ae=Object(B.a)((function(e){var t,a;return{root:{height:"100vh",backgroundImage:"url(https://source.unsplash.com/collection/24051068/)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},center:{margin:e.spacing("auto","auto")},minuteur:{width:"100vh"},paper:{margin:e.spacing(7.5,2),display:"flex",flexDirection:"column",alignItems:"center"},canvas:{backgroundColor:"rgb(255, 255, 255)",background:"white",borderRadius:15,display:"flex",marginTop:"6vh"},couleurs:(t={margin:e.spacing(8,0),borderRadius:15,width:"5.5vh",height:"65vh",border:"3px solid black",background:"#222"},Object(d.a)(t,"borderRadius",5),Object(d.a)(t,"padding","1vh"),t),avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},headline:{color:"#122740",fontSize:"2.5rem",fontWeight:600,align:"center"},header:{fontFamily:"Barlow, san-serif",backgroundColor:"#fff"},cardjoueur:{width:"100%",height:"75%",borderRadius:16,boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden",fontSize:"1.25rem",fontWeight:600,flexWrap:"wrap",margin:e.spacing(8,2),background:"rgba(240, 160, 240, 0.30)"},cardchat:Object(d.a)({margin:e.spacing(8,2),width:"90%",height:"80%",borderRadius:16,display:"flex",flexDirection:"column",boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden",background:"rgba(240, 160, 240, 0.30)"},"overflow","auto"),styleB:(a={color:"white",fontSize:"80%",borderRadius:15,textAlign:"center",width:"5.5vh",height:"5.5vh",border:"3px solid black",background:"#222"},Object(d.a)(a,"borderRadius",5),Object(d.a)(a,"marginTop","0.5vh"),Object(d.a)(a,"marginLeft","1vh"),a),tresgrand:{fontSize:"150%"},grand:{fontSize:"100%"},moyen:{fontSize:"75%"},petit:{fontSize:"50%"},avatarchoice:{display:"flex","& > *":{margin:e.spacing(1)}},medium:{width:"50%",height:"70%"},large:{width:"23%",height:"80%"},modal:{height:300,flexGrow:1,minWidth:300,display:"flex",padding:e.spacing(8,3,4),alignItems:"center",justifyContent:"center"},choixmots:{width:"45%",height:"96%",borderRadius:16,boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden",fontSize:"1.75rem",fontWeight:600,flexWrap:"wrap",padding:e.spacing(2,4,3),background:"rgba(240, 160, 240, 0.90)",justifyContent:"center"}}})),We=function(){var e=Ae(),t=c.a.useRef(null),a=c.a.useState(!0),n=Object(u.a)(a,2),i=n[0],r=n[1],o=function(e){var t=e.src,a=e.name;return Object(P.jsxs)(I.Row,{gap:2,p:1,children:[Object(P.jsx)(I.Item,{children:Object(P.jsx)(f.a,{className:"avatar",src:t})}),Object(P.jsxs)(I.Row,{gap:15,p:2,children:[Object(P.jsx)(I.Item,{children:Object(P.jsx)("div",{children:a})}),Object(P.jsx)(I.Item,{children:" 400"})]})]})};function s(){return Se=!1,r(!0),setTimeout((function(){Pe()}),100),document.getElementById("wchoixfinal").innerHTML="",0}function l(t){return Re()?Object(P.jsxs)(v.a,{display:"flex",alignItems:"center",children:[Object(P.jsx)(v.a,{className:e.minuteur,mr:1,children:Object(P.jsx)(O.a,{variant:"determinate",value:(a=t.value,100*(a-0)/80)})}),Object(P.jsx)(v.a,{minWidth:35,children:Object(P.jsx)(y.a,{variant:"body2",color:"textSecondary",children:"".concat(Math.round(t.value),"Sec")})})]}):Object(P.jsx)("div",{});var a}var d=c.a.useState(0),B=Object(u.a)(d,2),S=B[0],R=B[1];return c.a.useEffect((function(){var e=setInterval((function(){Re()&&R((function(e){return e>=80?s():e+1}))}),1e3);return function(){clearInterval(e)}}),[]),Object(P.jsxs)(w.a,{container:!0,xs:12,component:"main",className:e.root,children:[Object(P.jsx)(C.a,{}),Object(P.jsx)(k.a,{disablePortal:!0,disableEnforceFocus:!0,disableAutoFocus:!0,open:i,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",className:e.modal,container:function(){return t.current},children:Object(P.jsxs)("div",{className:e.choixmots,children:[Object(P.jsx)(I.Item,{stretched:!0,children:" Choisissez un mot"}),Object(P.jsx)("p",{id:"wchoix",onClick:function(){r(!1)}})]})}),Object(P.jsx)(w.a,{item:!0,xs:!1,sm:3,container:!0,direction:"row",id:"game",children:Object(P.jsxs)(I.Column,{p:1,gap:0,className:e.cardjoueur,children:[Object(P.jsxs)(I.Row,{wrap:!0,p:2,children:[Object(P.jsx)(I.Item,{stretched:!0,children:"Participant.e.s"}),Object(P.jsx)(I.Item,{children:"Score"})]}),Object(P.jsx)(N.a,{variant:"middle"}),Object(P.jsx)(o,{name:"Chocoluna",src:De})]})}),Object(P.jsx)(w.a,{item:!0,xs:!1,sm:4,elevation:6,square:!0,children:Object(P.jsxs)(I.Row,{wrap:!0,p:2,children:[Object(P.jsx)(I.Row,{children:Object(P.jsx)("div",{id:"wchoixfinal"})}),Object(P.jsx)(I.Row,{className:e.minuteur,children:Object(P.jsx)(l,{value:S})}),Object(P.jsx)(I.Row,{className:e.canvas,children:Object(P.jsx)("div",{className:"drawbox",children:Object(P.jsx)("canvas",{id:"DrawBox",width:"600",height:"600"})})}),Object(P.jsxs)(I.Row,{className:e.center,children:[Object(P.jsx)("button",{onClick:le,className:e.styleB,id:"Erase",children:Object(P.jsx)(h.a,{})}),Object(P.jsx)("button",{onClick:ue,className:e.styleB,id:"Clear",children:Object(P.jsx)(b.d,{})}),Object(P.jsx)("button",{onClick:xe,className:e.styleB,id:"Bundo",children:Object(P.jsx)(x.a,{})}),Object(P.jsx)("button",{onClick:fe,className:e.styleB,download:"example.jpg",id:"saveImage",children:Object(P.jsx)(h.b,{})})]})]})}),Object(P.jsxs)(w.a,{item:!0,xs:!1,sm:.5,elevation:6,square:!0,className:e.paper,children:[Object(P.jsx)("button",{onClick:re,className:Object(ze.default)(e.styleB,e.tresgrand),id:"Pen++",children:Object(P.jsx)(b.a,{})}),Object(P.jsx)("button",{onClick:ce,className:Object(ze.default)(e.styleB,e.grand),id:"Pen+",children:Object(P.jsx)(b.a,{})}),Object(P.jsx)("button",{onClick:oe,className:Object(ze.default)(e.styleB,e.moyen),id:"Pen",children:Object(P.jsx)(b.a,{})}),Object(P.jsx)("button",{onClick:se,className:Object(ze.default)(e.styleB,e.petit),id:"Pen-",children:Object(P.jsx)(b.a,{})}),Object(P.jsx)("button",{onClick:de,className:e.styleB,id:"Pinceau",children:Object(P.jsx)(b.b,{})}),Object(P.jsx)("button",{onClick:me,className:e.styleB,id:"drawRect",children:Object(P.jsx)(g.b,{})}),Object(P.jsx)("button",{onClick:he,className:e.styleB,id:"drawRectFull",children:Object(P.jsx)(b.c,{})}),Object(P.jsx)("button",{onClick:be,className:e.styleB,id:"drawCircle",children:Object(P.jsx)(g.a,{})}),Object(P.jsx)("button",{onClick:ge,className:e.styleB,id:"drawCircleFull",children:Object(P.jsx)(b.a,{})}),Object(P.jsx)("button",{onClick:je,className:e.styleB,id:"drawLine",children:Object(P.jsx)(j.a,{})}),Object(P.jsx)("button",{onClick:pe,className:e.styleB,id:"fillIn",children:Object(P.jsx)(p.a,{})})]}),Object(P.jsx)(w.a,{item:!0,xs:!1,sm:.5,elevation:6,square:!0,className:e.couleurs,children:Object(P.jsx)(m.a,{onChange:function(e){var t=e.hex;t=ie(t)},width:1,circleSize:21,colors:["#e91e63","#9c27b0","#673ab7","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b","black","white"]})}),Object(P.jsxs)(w.a,{item:!0,xs:12,sm:3,elevation:6,square:!0,className:e.cardchat,children:[Object(P.jsx)("div",{id:"chatBox",className:"card-body"}),Object(P.jsxs)("div",{className:"card-footer input-group",children:[Object(P.jsx)("input",{id:"message",className:"form-control type_msg",placeholder:"Type your message..."}),Object(P.jsx)("div",{className:"input-group-append",children:Object(P.jsx)("button",{id:"send",className:"input-group-text send_btn",children:Object(P.jsx)(h.c,{})})})]})]})]})};var qe=Object(B.a)((function(e){var t,a;return{root:{height:"100vh",backgroundImage:"url(https://source.unsplash.com/collection/24051068/)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},stream:{width:"60%",height:"60%",display:"flex",borderRadius:16,margin:e.spacing(10,3),backgroundColor:"rgb(255, 255, 255)",background:"white"},center:{margin:e.spacing("auto","auto")},paper:{margin:e.spacing(7.5,2),display:"flex",flexDirection:"column",alignItems:"center"},canvas:{backgroundColor:"rgb(255, 255, 255)",background:"white",borderRadius:15,display:"flex",marginTop:"6vh"},couleurs:(t={margin:e.spacing(8,0),borderRadius:15,width:"5.5vh",height:"65vh",border:"3px solid black",background:"#222"},Object(d.a)(t,"borderRadius",5),Object(d.a)(t,"padding","1vh"),t),avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},headline:{color:"#122740",fontSize:"2.5rem",fontWeight:600,align:"center"},header:{fontFamily:"Barlow, san-serif",backgroundColor:"#fff"},cardjoueur:{width:"100%",height:"75%",borderRadius:16,boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden",fontSize:"1.25rem",fontWeight:600,flexWrap:"wrap",margin:e.spacing(8,2),background:"rgba(240, 160, 240, 0.30)"},cardchat:Object(d.a)({margin:e.spacing(8,2),width:"90%",height:"80%",borderRadius:16,display:"flex",flexDirection:"column",boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden",background:"rgba(240, 160, 240, 0.30)"},"overflow","auto"),styleB:(a={color:"white",fontSize:"150%",borderRadius:15,textAlign:"center",width:"5.5vh",height:"5.5vh",border:"3px solid black",background:"#222"},Object(d.a)(a,"borderRadius",5),Object(d.a)(a,"marginTop","0.5vh"),Object(d.a)(a,"marginLeft","1vh"),a),tresgrand:{fontSize:"150%"},grand:{fontSize:"100%"},moyen:{fontSize:"75%"},petit:{fontSize:"50%"},avatarchoice:{display:"flex","& > *":{margin:e.spacing(1)}},medium:{width:"50%",height:"70%"},large:{width:"23%",height:"80%"}}})),He=function(){var e=qe(),t=function(e){var t=e.src,a=e.name;return Object(P.jsxs)(I.Row,{gap:2,p:1,children:[Object(P.jsx)(I.Item,{children:Object(P.jsx)(f.a,{className:"avatar",src:t})}),Object(P.jsxs)(I.Row,{gap:15,p:2,children:[Object(P.jsx)(I.Item,{children:Object(P.jsx)("div",{children:a})}),Object(P.jsx)(I.Item,{children:" 400"})]})]})};return Object(P.jsxs)(w.a,{container:!0,xs:12,component:"main",className:e.root,children:[Object(P.jsx)(C.a,{}),Object(P.jsx)(w.a,{item:!0,xs:!1,sm:3,container:!0,direction:"row",id:"game",children:Object(P.jsxs)(I.Column,{p:1,gap:0,className:e.cardjoueur,children:[Object(P.jsxs)(I.Row,{wrap:!0,p:2,children:[Object(P.jsx)(I.Item,{stretched:!0,children:"Participant.e.s"}),Object(P.jsx)(I.Item,{children:"Score"})]}),Object(P.jsx)(N.a,{variant:"middle"}),Object(P.jsx)(t,{name:"Chocoluna",src:De})]})}),Object(P.jsx)(w.a,{item:!0,xs:!1,sm:5,elevation:6,square:!0,className:e.stream,children:Object(P.jsx)("video",{autoPlay:!0,id:"Video"})}),Object(P.jsxs)(w.a,{item:!0,xs:12,sm:3,elevation:6,square:!0,className:e.cardchat,children:[Object(P.jsx)("div",{id:"chatBox",className:"card-body"}),Object(P.jsxs)("div",{className:"card-footer input-group",children:[Object(P.jsx)("input",{id:"message",className:"form-control type_msg",placeholder:"Type your message..."}),Object(P.jsx)("div",{className:"input-group-append",children:Object(P.jsx)("button",{id:"send",className:"input-group-text send_btn",children:Object(P.jsx)(h.c,{})})})]})]})]})},_e=a(369),Ue=a(370),Je=a(371),Ge=(a(175),a.p+"static/media/Mylogo.0c955908.jpg"),Ve=a.p+"static/media/7.3bbc6554.jpg",Ze=a.p+"static/media/8.15172146.jpg";function Ke(){var e=Xe(),t={etat:"host",pseudos:"",avatar:"",peerID:"",score:"0",co:!1,msg:!1,canvas:""},a=function(e){document.getElementById("logo").innerHTML="<img alt="+e.target.alt+' src= "'+e.target.src+'" class="MuiAvatar-img">',t.avatar=e.target.src};return Object(P.jsxs)(w.a,{container:!0,xs:12,component:"main",className:e.root,children:[Object(P.jsx)(C.a,{}),Object(P.jsx)(w.a,{item:!0,xs:!1,sm:8,container:!0,direction:"row",className:e.image,children:Object(P.jsxs)(I.Column,{p:0,gap:0,container:!0,className:e.card,children:[Object(P.jsx)(I.Row,{wrap:!0,p:2,alignItems:"baseline",className:e.header,children:Object(P.jsx)(I.Item,{stretched:!0,className:e.headline,children:"Choisis un Avatar"})}),Object(P.jsxs)(I.Row,{alignItems:"flex",container:!0,xs:12,sm:3,className:e.avatarchoice,children:[Object(P.jsx)(f.a,{onClick:a,className:e.large,alt:"avatar1",src:De}),Object(P.jsx)(f.a,{onClick:a,item:!0,className:e.large,alt:"avatar2",src:Fe}),Object(P.jsx)(f.a,{onClick:a,item:!0,className:e.large,alt:"avatar3",src:Te}),Object(P.jsx)(f.a,{onClick:a,item:!0,className:e.large,alt:"avatar4",src:Me})]}),Object(P.jsxs)(I.Row,{alignItems:"baseline",className:e.avatarchoice,children:[Object(P.jsx)(f.a,{onClick:a,className:e.large,alt:"avatar5",src:Ee}),Object(P.jsx)(f.a,{onClick:a,className:e.large,alt:"avatar6",src:Le}),Object(P.jsx)(f.a,{onClick:a,className:e.large,alt:"avatar7",src:Ve}),Object(P.jsx)(f.a,{onClick:a,className:e.large,alt:"avatar8",src:Ze})]}),Object(P.jsx)(I.Row,{flexDirection:"row-reverse",className:e.copyright,children:Object(P.jsxs)("p",{children:["All righs reserved to ",Object(P.jsx)("b",{children:Object(P.jsx)("i",{children:"PlaceIt!"})})]})})]})}),Object(P.jsx)(w.a,{item:!0,xs:12,sm:4,component:_e.a,elevation:6,square:!0,children:Object(P.jsxs)("div",{className:e.paper,children:[Object(P.jsx)("h1",{children:" Dessine Moi Un Mouton"}),Object(P.jsx)(f.a,{id:"logo",className:e.medium,src:Ge,alt:"My logo"}),Object(P.jsx)(y.a,{component:"h1",variant:"h5",children:Object(P.jsx)("h3",{id:"show-peer"})}),Object(P.jsx)(Ue.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"pseudos",label:"Pseudo",name:"Pseudo",autoComplete:"Pseudo",autoFocus:!0}),Object(P.jsx)(Je.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(){t.pseudos=document.getElementById("pseudos").value,console.log(t),rt(t),at(t),ot()},children:"Connexion"})]})})]})}var Xe=Object(B.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/collection/24051068/)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(6,2),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"80%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},headline:{color:"#122740",fontSize:"2.5rem",fontWeight:600,align:"center"},header:{fontFamily:"Barlow, san-serif",backgroundColor:"#fff"},card:{width:"92%",height:"92%",margin:e.spacing(5,5),borderRadius:16,boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden"},avatarchoice:{display:"flex","& > *":{margin:e.spacing(1)}},medium:{width:"50%",height:"70%"},large:{width:"23%",height:"80%"},copyright:{fontFamily:"Barlow, san-serif",color:"white",margin:e.spacing(3,2)}}}));a(334);function Ye(){var e=et(),t=et();return Object(P.jsxs)(w.a,{container:!0,xs:12,component:"main",className:e.root,children:[Object(P.jsx)(C.a,{}),Object(P.jsx)(w.a,{item:!0,xs:12,sm:4,component:_e.a,elevation:6,square:!0,children:Object(P.jsxs)("div",{className:e.paper,children:[Object(P.jsxs)(I.Column,{p:0,gap:0,className:t.cardjoueur,children:[Object(P.jsxs)(I.Row,{wrap:!0,p:2,alignItems:"baseline",className:t.header,children:[Object(P.jsx)(I.Item,{stretched:!0,className:t.headline,children:"Participant.e.s"}),Object(P.jsx)(I.Item,{className:t.actions,children:"Score"})]}),Object(P.jsxs)("div",{id:"playerZone",children:[Object(P.jsx)($e,{name:"Amber Matthews",src:"https://i.pravatar.cc/300?img=10"}),Object(P.jsx)(N.a,{variant:"middle",className:t.divider})]})]}),Object(P.jsx)("div",{id:"zoneId",children:Object(P.jsx)(Je.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(){var e=L();console.log(e),document.getElementById("zoneId").innerHTML=e},children:"G\xe9n\xe9rer une ID"})}),Object(P.jsxs)("div",{id:"textAndButton",children:[Object(P.jsx)(Ue.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"peerID",label:"Host_Id",name:"HostId",autoComplete:"Host_Id",autoFocus:!0}),Object(P.jsx)(Je.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(){!function(e){ct().etat="viewer",D=T.connect(e,{reliable:!0});var t=ct();D.on("open",(function(e){D.send(t)}))}(document.getElementById("peerID").value)},children:"Connexion"})]})]})}),Object(P.jsxs)(w.a,{item:!0,xs:12,sm:3,elevation:6,square:!0,className:e.cardchat,children:[Object(P.jsx)("div",{id:"chatBox",className:"card-body"}),Object(P.jsxs)("div",{className:"card-footer input-group",children:[Object(P.jsx)("input",{id:"message",className:"form-control type_msg",placeholder:"Type your message..."}),Object(P.jsx)("div",{className:"input-group-append",children:Object(P.jsx)("button",{id:"send",className:"input-group-text send_btn",children:Object(P.jsx)(h.c,{})})})]})]}),Object(P.jsx)(w.a,{item:!0,xs:!1,sm:4,className:e.paper,children:Object(P.jsxs)(I.Column,{p:0,gap:0,container:!0,direction:"row",className:e.card,children:[Object(P.jsx)(I.Row,{wrap:!0,p:2,alignItems:"baseline",className:e.header,children:Object(P.jsx)(I.Item,{stretched:!0,className:e.headline,children:"Choisis une phase de jeu"})}),Object(P.jsx)(Je.a,{className:t.button,type:"submit",fullWidth:!0,variant:"contained",onClick:function(){var e=document.getElementById("peerID").value;console.log(e.value),st(),setTimeout((function(){!function(e){if("host"==ct().etat)for(var t=0;t<M.length;t++){var a=T.call(M[t].peerID,i);console.log(a),a.on("stream",(function(e){console.log(e)}))}}()}),1e3)},children:"Jouer"})]})})]})}var Qe,$e=function(e){var t=e.src,a=e.name;return Object(P.jsxs)(I.Row,{gap:2,p:2.5,children:[Object(P.jsx)(I.Item,{children:Object(P.jsx)(f.a,{src:t})}),Object(P.jsx)(I.Row,{wrap:!0,grow:!0,gap:.5,minWidth:0,children:Object(P.jsx)(I.Item,{grow:!0,minWidth:0,children:Object(P.jsx)("div",{children:a})})})]})},et=Object(B.a)((function(e){return{root:{height:"100vh",backgroundImage:"url(https://source.unsplash.com/collection/24051068/)",backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,2),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},cardjoueur:{width:"100%",borderRadius:16,boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden",fontSize:"1.25rem",fontWeight:600,flexWrap:"wrap"},card:{width:"92%",height:"92%",margin:e.spacing(5,5),borderRadius:16,boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden",display:"flex",background:"rgba(240, 160, 240, 0.30)"},cardchat:Object(d.a)({margin:e.spacing(8,2),width:"90%",height:"80%",borderRadius:16,display:"flex",flexDirection:"column",boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden",background:"rgba(240, 160, 240, 0.30)"},"overflow","auto"),headline:{color:"#122740",fontSize:"1.25rem",fontWeight:600},header:{fontFamily:"Barlow, san-serif",backgroundColor:"#fff"},button:{fontFamily:"Barlow, san-serif",fontSize:"200%",fontWeight:"bold",background:"linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #8B00FF)",borderRadius:6,border:0,width:"40%",height:"15%",padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",margin:e.spacing("auto","auto")},buttongrid:{fontFamily:"Barlow, san-serif",background:"linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #8B00FF)",borderRadius:3,border:0,width:"30%",height:"30%",padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"}}})),tt=[];function at(e){tt.push(e)}function nt(){return tt}function it(e){tt[e].co=!0}function rt(e){Qe=e,console.log(Qe)}function ct(){return Qe}function ot(){s.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(Ye,{})}),document.getElementById("root")),setTimeout((function(){lt()}),100),setTimeout((function(){U(tt)}),100),setTimeout((function(){Qe.peerID=L()}),100)}function st(){"host"==Qe.etat?(s.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(We,{})}),document.getElementById("root")),setTimeout((function(){!function(){var e=document.getElementById("DrawBox"),t=e.getContext("2d");a=e,i=(n=a).captureStream(300),J(e,t);var a}()}),100),setTimeout((function(){lt()}),100),setTimeout((function(){Pe()}),100)):(s.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(He,{})}),document.getElementById("root")),setTimeout((function(){lt()}),100))}function lt(){document.getElementById("send").onclick=function(){var e=document.getElementById("message").value,t=Qe.pseudos+" : "+e;"host"==Qe.etat?A(t):z(t),document.getElementById("message").value=""},document.addEventListener("keydown",(function(e){if("Enter"===e.key&&""!=document.getElementById("message").value){var t=document.getElementById("message").value,a=Qe.pseudos+" : "+t;"host"==Qe.etat?A(a):z(a),document.getElementById("message").value=""}}))}s.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(Ke,{})}),document.getElementById("root")),l()}},[[335,1,2]]]);
//# sourceMappingURL=main.e8471f71.chunk.js.map