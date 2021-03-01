import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Peer from 'peerjs';

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
var penUp = document.getElementById('Pen+');
var penDown = document.getElementById('Pen-');
var erase = document.getElementById('Erase');
var pinceau = document.getElementById('Pinceau');
var clear = document.getElementById('Clear');
var rect = document.getElementById('drawRect');
var circle = document.getElementById('drawCircle');
var line = document.getElementById('drawLine');
var save = document.getElementById('saveImage');
var fill = document.getElementById('fillIn');
context.lineWidth = 5;
var isDrawing;
var drawPinceau = true;
var drawRectangle = false;
var drawCircle = false;
var drawLine = false;
var fillIn = false;
var pseudos = "Ekhynox";

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
  console.log(video.srcObject);
}

//Connexion
export function Connexion() {
  connID = document.getElementById("peerID").value; //Id du host
  document.getElementById("show-peer").innerHTML = "Connexion " + connID;
  conn = peer.connect(connID);

  conn.on('open', function(id) {
    conn.send(pseudos + " : ");
    conn.send("hello toi <3 !");
    document.getElementById('chat').innerHTML="Check la console ou le chatbox de l'autre navigateur";
    console.log("Check la console sur l'autre navigateur");
  });

  var mystream = peer.call(connID, stream);
  mystream.on('stream', function(remoteStream){
    console.log("call on");
    VideoStream(remoteStream);
  });
}

/*
  //V2
  getUserMedia({video: true, audio: false}, function(stream) {
  var call = peer.call(connID, stream);
  call.on('stream', function(remoteStream) {
      VideoStream(remoteStream);
  });
}, function(err) {
    console.log('Failed to get local stream' ,err);
  });
}
*/

//Reception
peer.on('connection', function(conn) {
  conn.on('data', function(data){
    // Will print 'hello toi <3 !'
    document.getElementById('chat').innerHTML +=data;
    console.log(data);
  });
});

peer.on('call', function(call) {
  call.answer(stream); // Answer the call with an A/V stream.
});

/*
peer.on('call', function(call) {
    getUserMedia({video: true, audio:false}, function(stream) {
      call.answer(stream); // Answer the call with an A/V stream.
      call.on('stream', function(stream) {
      console.log(stream);
      VideoStream(stream);
    },
    function(err) {
      console.log('Failed to get local stream' ,err);
    });
  });
});
*/

//Fonction sur le pinceau
export function ColorChange(hex){
    isDrawing = false;
    context.strokeStyle = hex; // change la couleur du trait
    context.fillStyle = hex;
}

penUp.onclick = function() {
    isDrawing = false;
    context.lineWidth += 5;
};

penDown.onclick = function() {
    isDrawing = false;
    context.lineWidth -= 5;
};

erase.onclick = function() {
    drawPinceau = true;
    drawRectangle = false;
    drawCircle = false;
    drawLine = false;
    fillIn = false;
    isDrawing = false;
    context.strokeStyle = "white";
};

pinceau.onclick = function() {
    isDrawing = false;
    drawPinceau = true;
    drawRectangle = false;
    drawCircle = false;
    drawLine = false;
    fillIn = false;
    context.strokeStyle = "black"
};

clear.onclick = function() {
    drawPinceau = true;
    drawRectangle = false;
    drawCircle = false;
    drawLine = false;
    fillIn = false;
    isDrawing = false;
    context.clearRect(0,0,1000,1000);
    context.strokeStyle = "black";
};

rect.onclick = function() {
    drawPinceau = false;
    drawRectangle = true;
    drawCircle = false;
    drawLine = false;
    fillIn = false;
    //context.strokeStyle = "black";
};

circle.onclick = function() {
    drawPinceau = false;
    drawRectangle = false;
    drawCircle = true;
    drawLine = false;
    fillIn = false;
    //context.strokeStyle = "black";
};

line.onclick = function() {
    drawPinceau = false;
    drawRectangle = false;
    drawCircle = false;
    drawLine = true;
    fillIn = false;
    //context.strokeStyle = "black";
}

//crée un fond blanc dans le canvas, cette fonction DOIT rester au dessus du save
function fillBackground(){
  context.fillStyle = 'white';
  context.fillRect(0,0,600,600);
}
fillBackground();

fill.onclick = function()
{
  drawPinceau = false;
  drawRectangle = false;
  drawCircle = false;
  drawLine = false;
  fillIn = true;
}

//Enregister une image
save.onclick = function() {
  var img = document.createElement('a');
  img.href = canvas.toDataURL('image/jpg', 1.0); //premier param demande d'être en jpg , le deuxieme dit que la conversion ce fait en HD.
  img.download = ('dessine-moi.jpg');
  img.click();
}

//Fonction de dessin
function getMousePos(canvas, mouse) {
  var rect = canvas.getBoundingClientRect(); // retourne sa position par rapport à la zone d'affichage.
  return {
    x: mouse.clientX - rect.left, // position en X de la souris - ditance depuis la droite de la fenêtre par rapport à la zone  de dessin.
    y: mouse.clientY - rect.top // position en Y de la souris - ditance depuis le haut de la fenêtre par rapport à la zone de dessin.
  };
}

var posInit;
var posEnd;
var sourceCanvas;

canvas.onmousedown = function (mouse) { //on commence le dessin
  sourceCanvas = canvas.toDataURL('image/jpeg', 1.0);
  if (drawPinceau)
  {
    var pos = getMousePos(canvas, mouse); // position (x,y) du crayon
    isDrawing = true;
    context.beginPath(); // commencer un nouveau trait
    context.moveTo(pos.x, pos.y); //déplacer le crayon avec la méthode à la nouvelle position
  }
  if (drawRectangle)
  {
    posInit=getMousePos(canvas,mouse);
    isDrawing = true;
    context.beginPath();
  }
  if(drawCircle)
  {
    posInit=getMousePos(canvas,mouse);
    isDrawing = true;
    context.beginPath();
  }
  if(drawLine)
  {
    posInit=getMousePos(canvas,mouse);
    isDrawing = true;
    context.beginPath();
    context.moveTo(posInit.x, posInit.y);
  }
  if(fillIn)
  {
    posInit=getMousePos(canvas,mouse);
    isDrawing = true;
    context.beginPath();
  }
};

canvas.onmouseup = function (mouse) { //on arrete le dessin
  if (isDrawing  && drawRectangle)
  {
    posEnd=getMousePos(canvas,mouse);
    context.strokeRect(posInit.x, posInit.y, posEnd.x - posInit.x, posEnd.y - posInit.y);
  }

  if(isDrawing && drawCircle)
  {
    posEnd=getMousePos(canvas,mouse);
    context.ellipse(posInit.x, posInit.y, Math.abs(posEnd.x - posInit.x), Math.abs(posEnd.y - posInit.y), 0, 0, 2*3.14);
    context.stroke();
  }
  if(isDrawing && drawLine)
  {
    posEnd=getMousePos(canvas,mouse);
    context.lineTo(posEnd.x, posEnd.y);
    context.stroke();
  }
  if(isDrawing && fillIn)
  {
    posEnd=getMousePos(canvas,mouse);
    //context.fillStyle;
    console.log("blablabla")
  }
  isDrawing = false;
};

canvas.onmousemove = function (mouse) {
  if (isDrawing && drawPinceau) {
    var pos = getMousePos(canvas, mouse); // position (x,y) du crayon
    context.lineTo(pos.x, pos.y); // dessiner une ligne
    context.linecap = 'round'
    context.stroke();
  }

  if (drawRectangle && isDrawing)
  {
    drawDataURIOnCanvas(sourceCanvas);
  }
};


function drawDataURIOnCanvas(strDataURI) {  //elle prend en param l'url d'une image, ici le cache du canvas et le draw.
 console.log("drawDataURIOnCanvas");
  var img2 = new window.Image();
  img2.addEventListener("load", function () {
      canvas.getContext("2d").drawImage(img2, 0, 0,600,600);
  });
  img2.setAttribute("src", strDataURI);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
