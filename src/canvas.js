import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Peer from 'peerjs';
import {Connexion,  SetCanvas, Send} from './connexion';
import {getContext, start} from './index';

//Canvas
var canvas;
var context;

//Set le canvas
export function SetCanvasDraw(varCanvas, varContext){
  canvas = varCanvas;
  context = varContext;
  CanvasInit();
  game = true;
}

//initialise le canvas avec un fond blanc et les outils sont de couleur noir de base
function CanvasInit(){
  context.fillStyle = 'white';
  context.fillRect(0,0,canvas.width, canvas.height);
  context.fillStyle = 'black';
  context.strokeStyle = 'black'
  setUpCanvas();
  clear();
}

//Pinceau
var isDrawing;
var drawPinceau = true;
var drawRectangle = false;
var drawRectangleFull = false;
var drawCircle = false;
var drawCircleFull = false;
var drawLine = false;
var fillIn = false;
var sourceCanvas = new Array();

//Fonction sur le pinceau
const hexRgb = require('hex-rgb');
var rgbcolor = hexRgb('#000');

export function ColorChange(hex){
    isDrawing = false;
    context.strokeStyle = hex; // change la couleur du trait
    context.fillStyle = hex;
    rgbcolor = hexRgb(hex);
}

export function verybigPen() {
    isDrawing = false;
    context.lineWidth = 18;
}

export function bigPen() {
    isDrawing = false;
    context.lineWidth = 12;
}

export function smallPen() {
    isDrawing = false;
    context.lineWidth = 6;
}

export function verysmallPen() {
    isDrawing = false;
    context.lineWidth = 2;
}

export function erase() {
    drawPinceau = true;
    drawRectangle = false;
    drawRectangleFull = false;
    drawCircle = false;
    drawCircleFull=false;
    drawLine = false;
    fillIn = false;
    isDrawing = false;
    context.strokeStyle = "white";
}

export function pinceau() {
    isDrawing = false;
    drawPinceau = true;
    drawRectangle = false;
    drawRectangleFull = false;
    drawCircle = false;
    drawCircleFull=false;
    drawLine = false;
    fillIn = false;
    context.strokeStyle = "black";
}

export function clear() {
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
    ajoutActionCanvas();
}

export function rect() {
    drawPinceau = false;
    drawRectangle = true;
    drawRectangleFull = false;
    drawCircle = false;
    drawCircleFull=false
    drawLine = false;
    fillIn = false;
}

export function rectfull() {
    drawPinceau = false;
    drawRectangle = false;
    drawRectangleFull = true;
    drawCircle = false;
    drawCircleFull=false;
    drawLine = false;
    fillIn = false;
}

export function circle() {
    drawPinceau = false;
    drawRectangle = false;
    drawRectangleFull = false;
    drawCircle = true;
    drawCircleFull=false;
    drawLine = false;
    fillIn = false;
}

export function circlefull() {
    drawPinceau = false;
    drawRectangle = false;
    drawRectangleFull = false;
    drawCircle = false;
    drawCircleFull=true;
    drawLine = false;
    fillIn = false;
}

export function line(){
    drawPinceau = false;
    drawRectangle = false;
    drawRectangleFull = false;
    drawCircle = false;
    drawCircleFull=false;
    drawLine = true;
    fillIn = false;
}

export function fill(){
  drawPinceau = false;
  drawRectangle = false;
  drawRectangleFull = false;
  drawCircle = false;
  drawCircleFull=false;
  drawLine = false;
  fillIn = true;
}

export function undo(){
  if (sourceCanvas.length > 1){
    sourceCanvas.pop(); // supprime à la fin
    drawDataURIOnCanvas(sourceCanvas[sourceCanvas.length-1]);
  }
}

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'z' && sourceCanvas.length > 1) {
    sourceCanvas.pop(); // supprime à la fin
    drawDataURIOnCanvas(sourceCanvas[sourceCanvas.length-1]);
  }
});


//Enregister une image
export function save() {
  var img = document.createElement('a');
  img.href = canvas.toDataURL('image/jpg', 1.0); //premier param demande d'être en jpg , le deuxieme dit que la conversion ce fait en HD.
  img.download = ('dessine-moi.jpg');
  img.click();
}


//Dessine un canvas celon l'url données
function drawDataURIOnCanvas(strDataURL)  //elle prend en param l'url d'une image, ici le cache du canvas et le draw.
{
  var img2 = new window.Image();
  img2.addEventListener("load", function ()
  {
    canvas.getContext("2d").drawImage(img2, 0, 0,canvas.width, canvas.height);
  });

  img2.setAttribute("src", strDataURL);
}

function ajoutActionCanvas() {
  if (sourceCanvas.length >= 6) {
    sourceCanvas.shift(); // supprime au début
    sourceCanvas.push(canvas.toDataURL('image/jpeg', 1.0));
  }
  else {
    sourceCanvas.push(canvas.toDataURL('image/jpeg', 1.0));
  }
}

var time;
//Ecoute sur la redimension de la fenêtre
window.addEventListener('resize', () => {
  clearTimeout(time);
  time = setTimeout(reDraw, 100); //Pour éviter de spam la redimension
});

//Fonction de redimension
function setUpCanvas(){
  // Feed the size back to the canvas.
  context.canvas.width  = window.innerHeight; //redimension a la taille de la fenêtre
  context.canvas.height = window.innerHeight; //redimension a la taille de la fenêtre

  context.canvas.width  = canvas.clientWidth; //puis on set les coordonnées en fonction de l'utilisateur
  context.canvas.height = canvas.clientWidth; //puis on set les coordonnées en fonction de l'utilisateur
};

//on redimensionne puis on redessine le canvas
function reDraw(){
  if(canvas != undefined){ //si le canvas existe
    setUpCanvas();                                      // redimensionne le canvas
    drawDataURIOnCanvas(sourceCanvas[sourceCanvas.length-1]);                  // redessine le canvas avec la taille redimensionnée
  }
}

//Fonction de dessin
function getMousePos(canvas, mouse) {
  var rect = canvas.getBoundingClientRect(); // retourne sa position par rapport à la zone d'affichage.
  return {
    x: mouse.clientX - rect.left, // position en X de la souris - distance entre le canvas et la droite de la fenêtre.
    y: mouse.clientY - rect.top // position en Y de la souris - distance entre le canvas et le haut de la fenêtre.
  };
}

var posInit;
var posEnd;
var game = false;

document.addEventListener('mousedown', function(mouse) //on commence le dessin
{
  if(game){
    var posBegin = getMousePos(canvas, mouse); // position (x,y) du crayon
    if(posBegin.x > 0 && posBegin.x < canvas.width && posBegin.y > 0 && posBegin.y < canvas.height){
      if (drawPinceau)
      {
        isDrawing = true;
        posInit = getMousePos(canvas, mouse); // position (x,y) du crayon
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
        context.beginPath();
        var imageData = context.getImageData(posInit.x, posInit.y, 1, 1);
        var pixel = imageData.data;
        var pixelPos = posInit;
        var tab = [];
        tab.push(pixelPos.x, pixelPos.y);
        var nord, sud, est,ouest;
        while(tab.length != 0)
        {
          //NORD
          if(tab[1]-1 >= 0){
            nord = context.getImageData(tab[0], tab[1]-1, 1, 1);
            if(testPixel(nord, pixel)){
              tab.push(tab[0], tab[1]-1);
              setPixel(tab[0], tab[1]-1);
            }
          }

          //SUD
          if(tab[1]+1 <= canvas.height){
            sud = context.getImageData(tab[0], tab[1]+1, 1, 1);
            if(testPixel(sud, pixel)){
              tab.push(tab[0], tab[1]+1);
              setPixel(tab[0], tab[1]+1);
            }
          }

          //OUEST
          if(tab[0]-1 >= 0){
            ouest = context.getImageData(tab[0]-1, tab[1], 1, 1);
            if(testPixel(ouest, pixel)){
              tab.push(tab[0]-1, tab[1]);
              setPixel(tab[0]-1, tab[1]);
            }
          }

          //EST
          if(tab[0]+1 <= canvas.width){
            est = context.getImageData(tab[0]+1, tab[1], 1, 1);
            if(testPixel(est, pixel)){
              tab.push(tab[0]+1, tab[1]);
              setPixel(tab[0]+1, tab[1]);
            }
          }
          tab.shift();
          tab.shift();
        }
      }
    }
  }
});

function testPixel(dir, pixel){
  if(pixel = dir.data[0] && pixel[1] == dir.data[1] && pixel[2] == dir.data[2] && pixel[3] == dir.data[3]){
    return true;
  }
  return false;
}
var newColor;
function setPixel(posx, posy){
  /*
  context.fillStyle = rgbcolor;
  context.fillRect(posx, posy, 1, 1)
  */
  newColor = context.createImageData(1,1);
  newColor.data[0] = rgbcolor.red;
  newColor.data[1] = rgbcolor.green;
  newColor.data[2] = rgbcolor.blue;
  newColor.data[3] = 255;
  context.putImageData(newColor, posx, posy);
}

document.addEventListener('mouseup', function (mouse) { //on arrete le dessin
  if(game){
    var posBegin = getMousePos(canvas, mouse); // position (x,y) du crayon
    if(posBegin.x > 0 && posBegin.x < canvas.width && posBegin.y > 0 && posBegin.y < canvas.height){
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
      isDrawing = false;
      ajoutActionCanvas();
    }
  }
});

document.addEventListener('mousemove', function (mouse) {
  if(game){
    var posBegin = getMousePos(canvas, mouse); // position (x,y) du crayon
    if(posBegin.x > 0 && posBegin.x < canvas.width && posBegin.y > 0 && posBegin.y < canvas.height){
      if (isDrawing && drawPinceau) {
        var pos = getMousePos(canvas, mouse); // position (x,y) du crayon
        context.lineTo(pos.x, pos.y); // dessiner une ligne
        context.stroke();
      }

      if (isDrawing && drawRectangle)
      {
        drawDataURIOnCanvas(sourceCanvas[sourceCanvas.length-1]);
        posEnd = getMousePos(canvas, mouse); // position (x,y) du crayon
        setTimeout(() => {
            context.beginPath();
            context.strokeRect(posInit.x, posInit.y, posEnd.x - posInit.x, posEnd.y - posInit.y);
          }, 100);
      }
      if (isDrawing && drawRectangleFull)
      {
        drawDataURIOnCanvas(sourceCanvas[sourceCanvas.length-1]);
        posEnd = getMousePos(canvas, mouse); // position (x,y) du crayon
        setTimeout(() => {
            context.beginPath();
            context.fillRect(posInit.x, posInit.y, posEnd.x - posInit.x, posEnd.y - posInit.y);
          }, 100);
      }

      if(isDrawing && drawCircle)
      {
        drawDataURIOnCanvas(sourceCanvas[sourceCanvas.length-1]);
        posEnd=getMousePos(canvas,mouse);
        setTimeout(() => {
            context.beginPath();
            context.ellipse(posInit.x, posInit.y, Math.abs(posEnd.x - posInit.x), Math.abs(posEnd.y - posInit.y), 0, 0, 2*Math.PI);
            context.stroke();
          }, 100);
      }
      if(isDrawing && drawCircleFull)
      {
        drawDataURIOnCanvas(sourceCanvas[sourceCanvas.length-1]);
        posEnd=getMousePos(canvas,mouse);
        setTimeout(() => {
            context.beginPath();
            context.ellipse(posInit.x, posInit.y, Math.abs(posEnd.x - posInit.x), Math.abs(posEnd.y - posInit.y), 0, 0, 2*Math.PI);
            context.fill();
          }, 100);
      }

      if(isDrawing && drawLine)
      {
        drawDataURIOnCanvas(sourceCanvas[sourceCanvas.length-1]);
        posEnd=getMousePos(canvas,mouse);
        setTimeout(() => {
            context.beginPath();
            context.moveTo(posInit.x, posInit.y);
            context.lineTo(posEnd.x, posEnd.y);
            context.stroke();
          }, 100);
      }
    }
  }
});
