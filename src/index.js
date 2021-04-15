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
import {Connexion, MyId, SetCanvas, Send, SendTabPlayer, SendTabPlayerToAll, SendToAll, setPool, NouvelleManche} from './connexion';
import {SetCanvasDraw} from './canvas';
import {GetWordUse, JaroDistance, SansAccent, Words_list} from './words';

var tabPlayer = [];
var player;
var etatjeu="sign";
var indicejoueur = 0;

export function SetMot() {
  tabPlayer[indicejoueur].mot=GetWordUse();
  console.log("tabPlayer[indicejoueur].mot : " + tabPlayer[indicejoueur].mot);
  SendTabPlayerToAll();
}

export function meInTab(){
  for (var i = 0; i < tabPlayer.length; i++) {
    if (tabPlayer[i].pseudos == player.pseudos){
      return tabPlayer[i];
    }
  }
}

export function AddInTab(playerInfo){
  tabPlayer.push(playerInfo);
}

export function GetTab(){
  return tabPlayer;
}

export function SetTab(data){
  tabPlayer = data;
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

export function SetSignInSide(){
  ReactDOM.render(
    <React.StrictMode>
    <SignInSide/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
SetSignInSide();

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
  etatjeu="WaitingRoom";
}

export function SetJeu(){
  if(meInTab().canvas == true){
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
    setTimeout(() => { setPool(tabPlayer); }, 100); //PROMISE !! /!\ !!
  }
  setTimeout(() => { Connexion(); }, 100); //PROMISE !! /!\ !!
  etatjeu="Jeu";
}

function chat(){
  //setup les variables pour la fonction Send() ('envoyer un message')
  var send = document.getElementById('send');

  send.onclick = function(){
    var message = document.getElementById("message").value;
    if (etatjeu=="Jeu"){
       compartToChat(message); //Ne pas envoyer le message aux autres si il a trouver le mots
    }
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
      if (etatjeu=="Jeu"){
        compartToChat(message); //Ne pas envoyer le message aux autres si il a trouver le mots
      }
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

function compartToChat(msg){
  if (true){ //vérifier que le joueur n'a pas déjà donnée la bonne réponse
    setTimeout(() => {
      var word = tabPlayer[indicejoueur].mot;
      msg = SansAccent(msg);
      if (JaroDistance(msg, word)>0.99){  //ici c'est bon, on incrémente le score.
        console.log("JaroDistance : " + JaroDistance(msg, word));
        console.log("La comparaison est valider");
        addScore();
        SendTabPlayer();
        console.log(tabPlayer);
      }
      else {
        console.log("JaroDistance : " + JaroDistance(msg, word));
        console.log("La comparaison n'est pas valider");
      }
    }, 100) //PROMISE !! /!\ !!
  }
  return false;
}

function addScore(){
  for (var i = 0; i < tabPlayer.length; i++) {
    if (tabPlayer[i].pseudos==player.pseudos){
      tabPlayer[i].score+=100;
    }
  }
}

function whoDraw(){
  var i=0;
  while(tabPlayer[i].canvas == false){
    i++;
  }
  return i;
}

export function ChangePlayer(){
<<<<<<< HEAD
      indicejoueur = whoDraw();
      tabPlayer[indicejoueur].canvas = false;
      console.log(tabPlayer);
      console.log(indicejoueur);
      indicejoueur = indicejoueur+1;
      if(indicejoueur < tabPlayer.length){
        tabPlayer[indicejoueur].canvas = true;
        SendTabPlayerToAll();
      }
      else{
          indicejoueur = 0;
          tabPlayer[indicejoueur].canvas = true;
          SendTabPlayerToAll();
          console.log(tabPlayer);
      }
=======
    tabPlayer[indicejoueur].canvas = false;
    if(indicejoueur < tabPlayer.length - 1){
      indicejoueur++;
      tabPlayer[indicejoueur].canvas = true;
      SendTabPlayerToAll();
    }
>>>>>>> d86ae4646fe5d6d5411725083ad4acf203b75d01
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
