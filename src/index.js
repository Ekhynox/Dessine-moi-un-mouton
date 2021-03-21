import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Peer from 'peerjs';
import SignInSide from './SignInSide';
import WaitingRoom from './WaitingRoom';
import {Connexion, SetCanvas, Send} from './connexion';
import {SetCanvasDraw} from './canvas';

var player;

export function SetPlayer(playerInfo){
  player = playerInfo;
  console.log(player);
}

export function GetPlayer(){
  return player;
}

ReactDOM.render(
  <React.StrictMode>
  <SignInSide/>
  </React.StrictMode>,
  document.getElementById('root')
);

export function SetWaiting(){
  ReactDOM.render(
  <React.StrictMode>
  <WaitingRoom/>
  </React.StrictMode>,
  document.getElementById('root')
  );
}

export function SetJeu(){
  ReactDOM.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
  document.getElementById('root'),
  );
  setTimeout(() => { start(); }, 100); //PROMISE !! /!\ !!
}

function start(){
  //Canvas
  var canvas = document.getElementById('DrawBox');
  var context = canvas.getContext('2d');
  SetCanvas(canvas);
  SetCanvasDraw(canvas, context);

  //setup les variables pour la fonction Send() ('envoyer un message')
  var send = document.getElementById('send');
  send.onclick = function(){
    var message = document.getElementById("message").value;
    var pseudos = player.pseudos;
    Send(message, pseudos);
    document.getElementById("message").value = "";
  }

  document.addEventListener('keydown', function(event) {
    if ((event.key === 'Enter') && (document.getElementById("message").value != ""))
    {
      var message = document.getElementById("message").value;
      var pseudos = player.pseudos;
      Send(message, player);
      document.getElementById("message").value = "";
    }
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
