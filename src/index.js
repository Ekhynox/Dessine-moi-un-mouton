import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss'
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
//import Peer from 'peerjs';


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
var drawRect = document.getElementById('drawRect');
context.lineWidth = 8;
var isDrawing;
var drawPinceau;
var drawRectangle;

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
/*
//Fonction de PeerJS
window.addEventListener('load', (event) =>{
  var peer = new Peer();
  var conn = peer.connect('another-peers-id');

  conn.on('open', () => {
    conn.send('hi!');
  });

  peer.on('connection', (conn) => {
    conn.on('data', (data) => {
      // Will print 'hi!'
      console.log(data);
    });
    conn.on('open', () => {
      conn.send('hello!');
    });
  });
});

*/
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

//Fonction sur le pinceau
export function ColorChange(hex){
    isDrawing = false;
    context.strokeStyle = hex; // change la couleur du trait
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
    isDrawing = false;
    context.strokeStyle = "white";
};

pinceau.onclick = function() {
    isDrawing = false;
    drawPinceau = true;
    drawRectangle = false;
    context.strokeStyle = "black";
};

clear.onclick = function() {
    isDrawing = false;
    context.clearRect(0,0,1000,1000);
    context.strokeStyle = "black";
};

//Fonction de dessin
function getMousePos(canvas, mouse) {
    var rect = canvas.getBoundingClientRect(); // retourne sa position par rapport à la zone d'affichage.
    return {
      x: mouse.clientX - rect.left, // position en X de la souris - ditance depuis la droite de la fenêtre par rapport à la zone  de dessin.
      y: mouse.clientY - rect.top // position en Y de la souris - ditance depuis le haut de la fenêtre par rapport à la zone de dessin.
    };
}

canvas.onmousedown = function(mouse) { //on commence le dessin
  var pos = getMousePos(canvas, mouse); // position (x,y) du crayon
  isDrawing = true;
  context.beginPath(); // commencer un nouveau trait
  context.moveTo(pos.x, pos.y); //déplacer le crayon avec la méthode à la nouvelle position
};

canvas.onmouseup = function() { //on arrete le dessin
  isDrawing = false;
  drawRectangle =false;
};

canvas.onmousemove = function(mouse) {
  if (isDrawing && drawPinceau) {
    var pos = getMousePos(canvas, mouse); // position (x,y) du crayon
    context.lineTo(pos.x, pos.y); // dessiner une ligne
    context.linecap = 'round'
    context.stroke();
  }
};

//Dessin de formes
drawRect.onclick = function(mouse)
{
  drawPinceau = false;
  drawRectangle = true;
  if(drawRectangle)
  {
    context.beginPath();
    var pos = getMousePos(canvas, mouse);
    var xdeb = 100;
    var ydeb = 100;
    context.strokeRect(pos.x, pos.y, largeur, hauteur);
  }
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
