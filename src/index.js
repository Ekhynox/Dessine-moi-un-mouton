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
import {Connexion, ConnectionToHost, MyId, SetCanvas, Send, SendTabPlayer, SendTabPlayerToAll, SendToAll, setPool, NouvelleManche} from './connexion';
import {SetCanvasDraw} from './canvas';
import {GetWordUse, JaroDistance, SansAccent, Words_list} from './words';
import { HelpView, HelpViewEnd} from './Help';
import { AboutUsView } from './AboutUs';

var tabPlayer = [];
var etatjeu;
var indicejoueur = 0;
var game = true;
SetSignInSide();

var connecte=false;

var player = {
  etat: "host",
  pseudos: "",
  avatar: "",
  peerID: "",
  score: 0,
  co: false,
  msg: false,
  canvas : true,
  mot: "",
 }


export function setGame(statut){
  game = statut;
}

export function SetMot() {
  tabPlayer[indicejoueur].mot=GetWordUse();
  SendTabPlayerToAll();
}

export function SetConnecte(val){
  connecte = val;
}

//trouve la position de l'utilisateur et envoie les informations depuis le tableau des joueurs.
export function meInTab(){
  for (var i = 0; i < tabPlayer.length; i++) {
    if (tabPlayer[i].pseudos == player.pseudos){
      return tabPlayer[i];
    }
  }
}

//Ajoute un joueur dans le tableau
export function AddInTab(playerInfo){
  tabPlayer.push(playerInfo);
}

//Supprime un joueur dans le tableau
export function DellInTab(playerInfo){
  tabPlayer.pop(tabPlayer.indexOf(playerInfo));
}

//Retourne le tableau de joueurs
export function GetTab(){
  return tabPlayer;
}

//Modifie le tableau de joueurs
export function SetTab(data){
  tabPlayer = data;
}

//Retourne vrai si le joueurs est deja connecté
export function Connected(id){
  tabPlayer[id].co = true;
}

//Modifie le joueur
export function SetPlayer(playerInfo){
  player = playerInfo;
}

//Retourne le joueur
export function GetPlayer(){
  return player;
}

//Render de la page d'accueil
export function SetSignInSide(){
 // DellInTab(player);
  ReactDOM.render(
    <React.StrictMode>
    <SignInSide/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  etatjeu="sign";
}

/*
-- Render de la WaitingRoom
-- Mise a jour des fonction du chat
-- Mise a jour du tableau de joueur
-- Ajout du peerID dans dans les informations du joueur
*/
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

/*
Si j'ai le canvas :
-- Render de la l'app version Canvas
-- Set le canvas ainsi que le context, on met a jour des fonction du chat
-- Choix trois mots a faire deviner et on envoi le stream au viewer
Si je suis viewer :
-- Render de la l'app version viewer
-- On met a jour des fonction du chat, Mise a jour du tableau de joueur
*/
export function SetJeu(){
  if(game == true){
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
      setTimeout(() => { Connexion(); }, 100); //PROMISE !! /!\ !!
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
    etatjeu="Jeu";
  }
}

export function Help() {
  ReactDOM.render(
    <React.StrictMode>
    <HelpView/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  etatjeu="Help";
}

export function HelpEnd() {
  ReactDOM.render(
    <React.StrictMode>
    <HelpViewEnd/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  etatjeu="HelpEnd";
}

export function AboutUs() {
  ReactDOM.render(
    <React.StrictMode>
    <AboutUsView/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  etatjeu="AboutUs";
}

/*
-- Lors d'un click sur le bouton, on recupere les entrée dans le champ input du chat puis envoie le message à tout les utilisateurs
-- Version click sur un bouton
-- Version ecoute sur la touche entée
*/
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
      }
      else {
        console.log("JaroDistance : " + JaroDistance(msg, word));
        console.log("La comparaison n'est pas valider");
      }
    }, 100) //PROMISE !! /!\ !!
  }
  return false;
}

/*
-- auguemente le score du joueur dans le tableau de joueurs
*/
function addScore(){
  for (var i = 0; i < tabPlayer.length; i++) {
    if (tabPlayer[i].pseudos==player.pseudos){
      tabPlayer[i].score+=100;
    }
  }
}

//Renvoie la personne qui est actuellement le dessinateur
function whoDraw(){
  var i=0;
  while(tabPlayer[i].canvas == false){
    i++;
  }
  return i;
}

//Recupere le dessinateur actuel puis le passe de viewer puis donne le cancas au prochain joueur
export function ChangePlayer(){
      indicejoueur = whoDraw();
      tabPlayer[indicejoueur].canvas = false;
      indicejoueur = indicejoueur+1;
      if(indicejoueur < tabPlayer.length){
        tabPlayer[indicejoueur].canvas = true;
        if(GetPlayer().etat == "host"){
          SendTabPlayerToAll();
        }
      }
      else{
          indicejoueur = 0;
          tabPlayer[indicejoueur].canvas = true;
          if(GetPlayer().etat == "host"){
            SendTabPlayerToAll();
            SetJeu();
          }
      }
}

//Set le canvas ainsi que le context puis le transmet aux outils de dessin
function start(){
  var canvas = document.getElementById('DrawBox');
  var widthRatio = 2;
  canvas.width = canvas.width * widthRatio;
  canvas.height = canvas.width;
  var context = canvas.getContext('2d');
  SetCanvas(canvas);
  SetCanvasDraw(canvas, context);
}

document.addEventListener('keydown', function(event) {
  if ((etatjeu == "sign") && (event.key === 'Enter') && (document.getElementById("pseudos").value != "")){
    player.pseudos = document.getElementById("pseudos").value;
    SetPlayer(player);
    AddInTab(player);
    SetWaiting();
  }
  else if ((etatjeu == "WaitingRoom") && (event.key === 'Enter') && (connecte==false) && (document.getElementById("peerID").value != "")){
    var id = document.getElementById("peerID").value;
    ConnectionToHost(id);
    document.getElementById("zoneId").innerHTML = "Connecté!";
    connecte=true;
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
