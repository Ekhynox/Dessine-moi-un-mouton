import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import AppViewer from './AppViewer';
import Peer from 'peerjs';
import SignInSide from './SignInSide';
import WaitingRoom from './WaitingRoom';
import {Connexion, SetCanvas, Send, SendToAll, MyId, setPool} from './connexion';
import {SetCanvasDraw} from './canvas';
import {Words_list, GetWordUse} from './words';

var tabPlayer = [];
var player;

export function SetTab(playerInfo){
  tabPlayer.push(playerInfo);
}

export function GetTab(){
  return tabPlayer;
}

export function Connected(id){
  tabPlayer[id].co = true;
}

export function SetPlayer(playerInfo){
  player = playerInfo;
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
  setTimeout(() => { chat(); }, 100); //PROMISE !! /!\ !!
  setTimeout(() => { setPool(tabPlayer); }, 100); //PROMISE !! /!\ !!
  setTimeout(() => { player.peerID = MyId(); }, 100); //PROMISE !! /!\ !!
}

export function SetJeu(){
  if(player.etat == "host"){
    ReactDOM.render(
    <React.StrictMode>
    <App/>
    </React.StrictMode>,
    document.getElementById('root'),
    );
    setTimeout(() => { start(); }, 100); //PROMISE !! /!\ !!
    setTimeout(() => { chat(); }, 100); //PROMISE !! /!\ !!
    setTimeout(() => { Words_list(); }, 100); //PROMISE !! /!\ !!
  }
  else{
    ReactDOM.render(
    <React.StrictMode>
    <AppViewer/>
    </React.StrictMode>,
    document.getElementById('root'),
    );
    setTimeout(() => { chat(); }, 100); //PROMISE !! /!\ !!
  }
}

function chat(){
  //setup les variables pour la fonction Send() ('envoyer un message')
  var send = document.getElementById('send');

  send.onclick = function(){
    var message = document.getElementById("message").value;

    comparttochat(message); //Ne pas envoyer le message aux autres si il a trouver le mots

    var pseudos = player.pseudos;
    var msg = pseudos + " : " + message;
    if(player.etat == "host"){
      SendToAll(msg);
    }
    else{
      Send(msg);
    }
    document.getElementById("message").value = "";
  }

  document.addEventListener('keydown', function(event) {
    if ((event.key === 'Enter') && (document.getElementById("message").value != ""))
    {
      var message = document.getElementById("message").value;

      comparttochat(message); //Ne pas envoyer le message aux autres si il a trouver le mots

      var pseudos = player.pseudos;
      var msg = pseudos + " : " + message;
      if(player.etat == "host"){
        SendToAll(msg);
      }
      else{
        Send(msg);
      }
      document.getElementById("message").value = "";
    }
  });
}

function comparttochat(msg){
  console.log("comparttochat()");
  if (true){ //vérifier que le joueur n'a pas déjà donnée la bonne réponse

    setTimeout(() => {
      var word = GetWordUse();
      console.log(msg);
      console.log(word);
      JaroDistance (msg, word)
    }, 100) //PROMISE !! /!\ !!
  }
  return false;
}

function JaroDistance (Word1, Word2) {
  var Word1 = Word1
  var Word2 = Word2

  var MaxLength

  if (Word1.length > Word2.length) {
    MaxLength = Word1.length
  } else {
    MaxLength = Word2.length
  }
  var MaxDistance = (MaxLength / 2) - 1

  var SameChar = 0
  var Transposition = 0

  var Index1 = []
  var Index2 = []

  for (var i = 0; i < Word1.length; i++) {
    for (var j = 0; j < Word2.length; j++) {
      if (Word1[i] === Word2[j] &&
          Math.abs(i - j) < MaxDistance) {
        Index1.push(i)
        Index2.push(j)
        SameChar += 1
        break
      }
    }
  }

  for (var i = 0; i < Index1.length-1; i++) {
      if ( (Index1[i] > Index1[i+1] && Index2[i] < Index2[i+1])
          || (Index1[i] < Index1[i+1] && Index2[i] > Index2[i+1]) ) {
          Transposition += 2
      }
  }

  var Distance = (1 / 3) *
              ((SameChar / Word1.length) +
               (SameChar / Word2.length) +
               ( (SameChar - Transposition / 2) ) / SameChar)

  console.log(Word1 + ' => ' + Word2)
  console.log(Distance)
}


function start(){
  //Canvas
  var canvas = document.getElementById('DrawBox');
  var context = canvas.getContext('2d');
  SetCanvas(canvas);
  SetCanvasDraw(canvas, context);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
