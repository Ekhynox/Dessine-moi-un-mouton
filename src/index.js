import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Peer from 'peerjs';
import {get_wordlist} from './wordslist';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

//Canvas
var canvas = document.getElementById('DrawBox');
var context = canvas.getContext('2d');

//Pen
var color = document.getElementsByClassName('color');
var verybigPen = document.getElementById('Pen++');
var bigPen = document.getElementById('Pen+');
var smallPen = document.getElementById('Pen');
var verysmallPen = document.getElementById('Pen-');
var erase = document.getElementById('Erase');
var pinceau = document.getElementById('Pinceau');
var clear = document.getElementById('Clear');
var rect = document.getElementById('drawRect');
var rectfull = document.getElementById('drawRectFull');
var circle = document.getElementById('drawCircle');
var circlefull = document.getElementById('drawCircleFull');
var line = document.getElementById('drawLine');
var fill = document.getElementById('fillIn');
var undo = document.getElementById('Bundo');
var save = document.getElementById('saveImage');

var isDrawing;
var drawPinceau = true;
var drawRectangle = false;
var drawRectangleFull = false;
var drawCircle = false;
var drawCircleFull = false;
var drawLine = false;
var fillIn = false;
var sourceCanvas;
var posInit;
var posEnd;
var rgbcolor = { r: 0, g: 0, b: 0 , t: 255 };;

context.lineWidth = 6;

//Connexion
var pseudos = "Ekhynox";
var time = 23;


//Fonction de PeerJS
var peer = new Peer();
var conn;
var peerID;
var connID;
var stream = canvas.captureStream(300);

//Mon ID peerJS
peer.on('open', function(id) {
  peerID = id;
  document.getElementById("show-peer").innerHTML = peerID;
});

//Stream
function VideoStream(myStream){
  document.createElement('a');
  var video = document.getElementById('Video');
  video.srcObject = myStream;
  // console.log(video.srcObject);
}

//Connexion
export function Connexion() {
  connID = document.getElementById("peerID").value; //Id du host
  document.getElementById("show-peer").innerHTML = "Connexion " + connID;
  conn = peer.connect(connID);

  var mystream = peer.call(connID, stream);
  mystream.on('stream', function(remoteStream){
    // console.log("call on");
    VideoStream(remoteStream);
  });
}

peer.on('call', function(call) {
  call.answer(stream); // Answer the call with an A/V stream.
});


//Envoyer des messages
export function Send() {
  var chatBox = document.getElementById("chatBox")
  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var span = document.createElement("span");
  var message = document.getElementById("message");
  conn = peer.connect(connID);

  connID = document.getElementById("peerID").value; //Id du host
  document.getElementById("show-peer").innerHTML = "Connexion " + connID;

  div1.setAttribute("class", "d-flex justify-content-start mb-4");
  div2.setAttribute("class", "msg_cotainer");
  span.setAttribute("class", "msg_time");

  div2.innerHTML = pseudos + " : " + message.value;
  document.getElementById("message").value = "";

  div2.appendChild(span);
  div1.appendChild(div2);
  chatBox.appendChild(div1);

  peer.on('open', function(id) {
    peerID = id;
    // console.log(peerID);
  });

  conn.on('open', function(id) {
    conn.send(pseudos + " : " + message.value);
  });
}


//Reception
peer.on('connection', function(conn) {
  conn.on('data', function(data){

    var chatBox = document.getElementById("chatBox")
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var span = document.createElement("span");

    div1.setAttribute("class", "d-flex justify-content-start mb-4");
    div2.setAttribute("class", "msg_cotainer");
    span.setAttribute("class", "msg_time");

    div2.innerHTML = data;

    div2.appendChild(span);
    div1.appendChild(div2);
    chatBox.appendChild(div1);

    // console.log(data);
  });
});

/*------------------------------------------------------------------------------*/
/*DRAW                                                                          */
/*------------------------------------------------------------------------------*/

//Initialise le canvas avec un fond blanc et les outils sont de couleur noir de base
function CanvasInit(){
  context.fillStyle = 'white';
  context.fillRect(0,0,canvas.width, canvas.height);
  context.fillStyle = 'black';
  context.strokeStyle = 'black'
}
CanvasInit();

//fonction de conversion
function hexToRgb(val) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(val);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    t: 255
  } : null;
}

//Fonction sur le pinceau
export function ColorChange(hex){
    isDrawing = false;
    context.strokeStyle = hex; // change la couleur du trait
    context.fillStyle = hex;
    rgbcolor=hexToRgb(hex);
}

//Choix de l'ouils/action
verybigPen.onclick = function() {
    isDrawing = false;
    context.lineWidth = 18;
};

bigPen.onclick = function() {
    isDrawing = false;
    context.lineWidth = 12;
};

smallPen.onclick = function() {
    isDrawing = false;
    context.lineWidth = 6;
};

verysmallPen.onclick = function() {
    isDrawing = false;
    context.lineWidth = 2;
};

erase.onclick = function() {
    drawPinceau = true;
    drawRectangle = false;
    drawRectangleFull = false;
    drawCircle = false;
    drawCircleFull=false;
    drawLine = false;
    fillIn = false;
    isDrawing = false;
    context.strokeStyle = "white";
};

pinceau.onclick = function() {
    isDrawing = false;
    drawPinceau = true;
    drawRectangle = false;
    drawRectangleFull = false;
    drawCircle = false;
    drawCircleFull=false;
    drawLine = false;
    fillIn = false;
    context.strokeStyle = "black"
    // rgbcolor={ r: 0, g: 0, b: 0 };
};

clear.onclick = function() {
    sourceCanvas = canvas.toDataURL('image/jpeg', 1.0);
    drawPinceau = true;
    drawRectangle = false;
    drawRectangleFull = false;
    drawCircle = false;
    drawCircleFull=false;
    drawLine = false;
    fillIn = false;
    isDrawing = false;
    context.fillStyle = 'white';
    context.fillRect(0,0,canvas.width, canvas.height);
    context.fillStyle = 'black';
    // rgbcolor={ r: 0, g: 0, b: 0 };
    // context.strokeStyle = "black";
};

rect.onclick = function() {
    drawPinceau = false;
    drawRectangle = true;
    drawRectangleFull = false;
    drawCircle = false;
    drawCircleFull=false
    drawLine = false;
    fillIn = false;
    // context.strokeStyle = "black";
};

rectfull.onclick = function() {
    drawPinceau = false;
    drawRectangle = false;
    drawRectangleFull = true;
    drawCircle = false;
    drawCircleFull=false;
    drawLine = false;
    fillIn = false;
    // context.fillStyle = "black";
};

circle.onclick = function() {
    drawPinceau = false;
    drawRectangle = false;
    drawRectangleFull = false;
    drawCircle = true;
    drawCircleFull=false;
    drawLine = false;
    fillIn = false;
    // context.strokeStyle = "black";
};

circlefull.onclick = function() {
    drawPinceau = false;
    drawRectangle = false;
    drawRectangleFull = false;
    drawCircle = false;
    drawCircleFull=true;
    drawLine = false;
    fillIn = false;
    // context.fillStyle = "black";
};

line.onclick = function() {
    drawPinceau = false;
    drawRectangle = false;
    drawRectangleFull = false;
    drawCircle = false;
    drawCircleFull=false;
    drawLine = true;
    fillIn = false;
    // context.strokeStyle = "black";
}

fill.onclick = function()
{
  drawPinceau = false;
  drawRectangle = false;
  drawRectangleFull = false;
  drawCircle = false;
  drawCircleFull=false;
  drawLine = false;
  fillIn = true;
}

undo.onclick = function() {
  drawDataURIOnCanvas(sourceCanvas);
}


//Enregister une image
save.onclick = function() {
  var img = document.createElement('a');
  img.href = canvas.toDataURL('image/jpg', 1.0); //premier param demande d'être en jpg , le deuxieme dit que la conversion ce fait en HD.
  img.download = ('dessine-moi.jpg');
  img.click();
}


//récupère les coordonnées de la souris
function getMousePos(canvas, mouse) {
  var rect = canvas.getBoundingClientRect(); // retourne sa position par rapport à la zone d'affichage.
  return {
    x: mouse.clientX - rect.left, // position en X de la souris - ditance depuis la droite de la fenêtre par rapport à la zone  de dessin.
    y: mouse.clientY - rect.top // position en Y de la souris - ditance depuis le haut de la fenêtre par rapport à la zone de dessin.
  };
}

//Prend en param l'url d'une image, ici le cache du canvas et le draw.
function drawDataURIOnCanvas(strDataURI) {
  var img2 = new window.Image();
  img2.addEventListener("load", function () {
      canvas.getContext("2d").drawImage(img2, 0, 0,canvas.width, canvas.height);
  });
  img2.setAttribute("src", strDataURI);
}

//renvoie la couleur du pixel ou on click
function pick(position_x, position_y) {
  var pixel = context.getImageData(position_x, position_y, 1, 1);
  var data = pixel.data;
  // var rgba = 'rgba(' + data[0] + ', ' + data[1] + ', ' + data[2] + ', ' + (data[3] / 255) + ')';
 return data;
}

function setcanvas(position_x, position_y ,color)
{
  var id = context.createImageData(1,1); // only do this once per page
  id.data[0]  = color[0];
  id.data[1]  = color[1];
  id.data[2]  = color[2];
  id.data[3]  = 255;
  context.putImageData( id, position_x, position_y);
}

function colorequal(c1, c2)
{
  var i=0;
  var res=true;
  while ( i < 3 )
  {
    if(c1[i]!==c2[i])
      res=false;
    i++;
  }
  return res;
}

function FillInRec(position_x, position_y, color_init, new_color)
{
  // La fonction fonctionne mais fox lock car trop de récursion pour lui.
  console.log("c");
  if ( colorequal(color_init, new_color) )
    return 0;

  setcanvas(position_x, position_y , new_color);
  var cp;

  //On regarde autour du pixel coordonnées canvas inverser en y
  //Pixel Nord
  cp=pick(position_x, position_y-1);
  if( (position_y >= 0) && colorequal(cp,color_init) )
  {
    FillInRec(position_x, position_y-1, color_init, new_color)
  }

  //Pixel Sud
  cp=pick(position_x, position_y+1);
  if( (position_y <= canvas.height) && colorequal(cp,color_init) )
  {
    FillInRec(position_x, position_y+1, color_init, new_color)
  }

  //Pixel Ouest
  cp=pick(position_x-1, position_y);
  if( (position_x >= 0) && colorequal(cp,color_init) )
  {
    FillInRec(position_x-1, position_y, color_init, new_color)
  }

  //Pixel Est
  cp=pick(position_x+1, position_y);
  if( (position_x <= canvas.width) && colorequal(cp,color_init) )
  {
    FillInRec(position_x+1, position_y, color_init, new_color)
  }


}

// faire un FillInRec mais en récupérant les coordonnées des bords et faire un lineTo stroke avec ces point


//Fonction de dessin
canvas.onmousedown = function (mouse) { //on commence le dessin
  sourceCanvas = canvas.toDataURL('image/jpeg', 1.0);

  if (drawPinceau)
  {
    posInit = getMousePos(canvas, mouse); // position (x,y) du crayon
    isDrawing = true;

    context.beginPath();
    context.arc(posInit.x, posInit.y, context.lineWidth/2, 0, 2 * Math.PI, false);
    context.fill();

    context.beginPath(); // commencer un nouveau trait
    context.lineCap = 'round';
    context.moveTo(posInit.x, posInit.y); //déplacer le crayon avec la méthode à la nouvelle position
  }
  if (drawRectangle)
  {
    posInit=getMousePos(canvas,mouse);
    isDrawing = true;
  }
  if (drawRectangleFull)
  {
    posInit=getMousePos(canvas,mouse);
    isDrawing = true;
  }
  if(drawCircle)
  {
    posInit=getMousePos(canvas,mouse);
    isDrawing = true;
  }
  if(drawCircleFull)
  {
    posInit=getMousePos(canvas,mouse);
    isDrawing = true;
  }
  if(drawLine)
  {
    posInit=getMousePos(canvas,mouse);
    isDrawing = true;
  }
  if(fillIn)
  {
    posInit=getMousePos(canvas,mouse);
    isDrawing = true;
    var colorInit = pick(posInit.x, posInit.y);
    // setcanvas(posInit,Object.values(rgbcolor));
    // FillInRec(posInit.x, posInit.y, colorInit, Object.values(rgbcolor));
  }
};

canvas.onmouseup = function (mouse) { //on arrete le dessin
  if (isDrawing  && drawRectangle)
  {
    posEnd=getMousePos(canvas,mouse);
    context.beginPath();
    context.strokeRect(posInit.x, posInit.y, posEnd.x - posInit.x, posEnd.y - posInit.y);
  }
  if (isDrawing  && drawRectangleFull)
  {
    posEnd=getMousePos(canvas,mouse);
    context.beginPath();
    context.fillRect(posInit.x, posInit.y, posEnd.x - posInit.x, posEnd.y - posInit.y);
  }

  if(isDrawing && drawCircle)
  {
    posEnd=getMousePos(canvas,mouse);
    context.beginPath();
    context.ellipse(posInit.x, posInit.y, Math.abs(posEnd.x - posInit.x), Math.abs(posEnd.y - posInit.y), 0, 0, 2*Math.PI);
    context.stroke();
  }
  if(isDrawing && drawCircleFull)
  {
    posEnd=getMousePos(canvas,mouse);
    context.beginPath();
    context.ellipse(posInit.x, posInit.y, Math.abs(posEnd.x - posInit.x), Math.abs(posEnd.y - posInit.y), 0, 0, 2*Math.PI);
    context.fill();
  }

  if(isDrawing && drawLine)
  {
    posEnd=getMousePos(canvas,mouse);
    context.beginPath();
    context.moveTo(posInit.x, posInit.y);
    context.lineTo(posEnd.x, posEnd.y);
    context.stroke();
  }
  if(isDrawing && fillIn)
  {
    posEnd=getMousePos(canvas,mouse);
  }
  isDrawing = false;
};

canvas.onmousemove = function (mouse) { //permet de voir en temps réel notre dessin
  if (isDrawing && drawPinceau) {
    var pos = getMousePos(canvas, mouse); // position (x,y) du crayon
    context.lineTo(pos.x, pos.y); // dessiner une ligne
    context.stroke();
  }

  if (isDrawing && drawRectangle)
  {
    drawDataURIOnCanvas(sourceCanvas);
    posEnd = getMousePos(canvas, mouse); // position (x,y) du crayon
    context.beginPath();
    context.strokeRect(posInit.x, posInit.y, posEnd.x - posInit.x, posEnd.y - posInit.y);
  }
  if (isDrawing && drawRectangleFull)
  {
    drawDataURIOnCanvas(sourceCanvas);
    posEnd = getMousePos(canvas, mouse); // position (x,y) du crayon
    context.beginPath();
    context.fillRect(posInit.x, posInit.y, posEnd.x - posInit.x, posEnd.y - posInit.y);
  }

  if(isDrawing && drawCircle)
  {
    drawDataURIOnCanvas(sourceCanvas);
    posEnd=getMousePos(canvas,mouse);
    context.beginPath();
    context.ellipse(posInit.x, posInit.y, Math.abs(posEnd.x - posInit.x), Math.abs(posEnd.y - posInit.y), 0, 0, 2*Math.PI);
    context.stroke();
  }
  if(isDrawing && drawCircleFull)
  {
    drawDataURIOnCanvas(sourceCanvas);
    posEnd=getMousePos(canvas,mouse);
    context.beginPath();
    context.ellipse(posInit.x, posInit.y, Math.abs(posEnd.x - posInit.x), Math.abs(posEnd.y - posInit.y), 0, 0, 2*Math.PI);
    context.fill();
  }

  if(isDrawing && drawLine)
  {
    drawDataURIOnCanvas(sourceCanvas);
    posEnd=getMousePos(canvas,mouse);
    context.beginPath();
    context.moveTo(posInit.x, posInit.y);
    context.lineTo(posEnd.x, posEnd.y);
    context.stroke();
  }
};

var choix = document.getElementById('choix');
choix.onclick = function() {
  words_list();
}


var words_copy=get_wordlist().slice();  //cree une copie de la liste de mots c'est avec elle qu'on évite les doublon
var words_use=[]; //tab des 3 propositions de mots

function words_list()
{
  while (words_use.length < 3) {  //on continue tant qu'on a pas nos 3 propositions

    if (words_copy.length<3) //controle si on arrive a la fin de la liste de mots, très peu probable.
      words_copy = get_wordlist().slice();

    var tt = words_copy[Math.floor(Math.random()*words_copy.length)]; //tire aléatoire d'un indice
    if(words_use.find(element => element == tt)==undefined) //on regarde si un on a pas déjà tiree ce mots(indice)
      words_use.push(tt);
  }
  console.log(" Choix : "+words_use);
  console.log(" Init : "+words_copy);
  document.getElementById("wchoix").innerHTML = words_use.map(
    d => `<button id="choose_word" value="${d}"> ${d} </button>`);//crée l'HTML des propositions

    function Click_choose_word(val) {
      console.debug(`@Click_choose_word()`);
      console.log("choisis : "+val);
      words_use=[]; //liste de propositions vider
      const tmp = (element) => element == val;
      var ind = words_copy.findIndex(tmp);
      if (ind != -1)
        words_copy.splice(ind, 1);  //on suprime le mot de la liste que si il exist dedans
      console.log("restant : "+words_copy);
      document.getElementById("wchoix").innerHTML= `<h3>${val}</h3>`
    }

    //on récupère la liste des boutons choix mots et on regarde si y'a un click dessus
    const choose_word_button=document.querySelectorAll('#choose_word');
    choose_word_button.forEach((q) => {
        q.onclick = function () {
          Click_choose_word(q.value)
        }
    });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
