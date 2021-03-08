import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Peer from 'peerjs';
import {Connexion, SetCanvas, Send} from './connexion';
import {SetCanvasDraw} from './canvas';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

//Canvas
var canvas = document.getElementById('DrawBox');
var context = canvas.getContext('2d');
SetCanvas(canvas);
SetCanvasDraw(canvas, context);


//initialise le canvas avec un fond blanc et les outils sont de couleur noir de base
function CanvasInit(){
  context.fillStyle = 'white';
  context.fillRect(0,0,canvas.width, canvas.height);
  context.fillStyle = 'black';
  context.strokeStyle = 'black'
}
CanvasInit();

//setup les variables pour la fonction Send() ('envoyer un message')
var send = document.getElementById('send');
send.onclick = function(){
  var message = document.getElementById("message").value;
  var pseudos = document.getElementById('pseudos').value;
  Send(message, pseudos);
  document.getElementById("message").value = "";
}

document.addEventListener('keydown', function(event) {
  if ((event.key === 'Enter') && (document.getElementById("message").value != ""))
  {
    var message = document.getElementById("message").value;
    var pseudos = document.getElementById('pseudos').value;
    Send(message, pseudos);
    document.getElementById("message").value = "";
  }

  if ((event.key === 'Enter') && (document.getElementById("pseudos").value != "") && (document.getElementById("peerID").value != "") )
  {
    Connexion();
  }

});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
