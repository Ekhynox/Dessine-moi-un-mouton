import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import AppViewer from './AppViewer';
import SignInSide from './SignInSide';
import WaitingRoom from './WaitingRoom';
import ScoreFinal from './ScoreFinal';
import Peer from 'peerjs';
import {Connexion, ConnectionToHost, MyId, SetCanvas, Send, SendTabPlayer, SendTabPlayerToAll, SendToAll, setPool, NouvelleManche} from './connexion';
import {SetCanvasDraw} from './canvas';
import {GetWordUse, JaroDistance, SansAccent, Words_list} from './words';
import { HelpView, HelpViewEnd} from './Help';
import { AboutUsView } from './AboutUs';
import avatar4 from './img/4.jpg';

SetSignInSide();

var tabPlayer = [];
var etatjeu;
var indicejoueur = 0;
var game = true;
var connecte=false;
var repondu = false;
var nbManche = 0;
var player = {
  etat: "host",
  pseudos: "",
  avatar: avatar4,
  peerID: "",
  score: 0,
  co: false,
  msg: false,
  canvas : true,
  mot: "",
  temps : "",
  manche :"",
};

////////////////////////////////////////////////////////////
//                    GETTER et SETTER
///////////////////////////////////////////////////////////

export function setGame(statut){
  game = statut;
}

export function SetMot() {
  tabPlayer[0].mot=GetWordUse();
  if(player.etat == "host"){
      SendTabPlayerToAll();
  }
  else{
    SendTabPlayer();
  }
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
  tabPlayer = [];
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

export function Getetat(){
  return etatjeu;
}

export function setRepondu(){
  repondu = false;
}

////////////////////////////////////////////////////////////
//                  RENDER DES PAGES
////////////////////////////////////////////////////////////

//Render de la page d'accueil
export function SetSignInSide(){
  DellInTab(player);
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
  setTimeout(() => { chat(); }, 100);
  setTimeout(() => { setPool(tabPlayer); }, 100);
  setTimeout(() => { player.peerID = MyId(); }, 100);
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
    repondu = false;
    if(meInTab().canvas == true){
      ReactDOM.render(
      <React.StrictMode>
      <App/>
      </React.StrictMode>,
      document.getElementById('root'),
      );
      setTimeout(() => { start(); }, 100);
      setTimeout(() => { chat(); }, 100);
      setTimeout(() => { Words_list(); }, 100);
      setTimeout(() => { Connexion(); }, 100);
      etatjeu="Jeu";
    }
    else{
      ReactDOM.render(
      <React.StrictMode>
      <AppViewer/>
      </React.StrictMode>,
      document.getElementById('root'),
      );
      setTimeout(() => { chat(); }, 100);
      setTimeout(() => { setPool(tabPlayer); }, 100);
      etatjeu="JeuViewer";
    }
  }
}

/*
-- Render de la Page Help
*/
export function Help() {
  ReactDOM.render(
    <React.StrictMode>
    <HelpView/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  etatjeu="Help";
}

/*
-- Render de la Page HelpEnd
*/
export function HelpEnd() {
  ReactDOM.render(
    <React.StrictMode>
    <HelpViewEnd/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  etatjeu="HelpEnd";
}

/*
-- Render de la Page AboutUs
*/
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
-- Render de la WaitingRoom
-- Mise a jour du tableau de joueur
*/
export function SetScoreFinal(){
  ReactDOM.render(
    <React.StrictMode>
    <ScoreFinal/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  setTimeout(() => { setPool(tabPlayer); }, 100);
  etatjeu="ScoreFinal";
}

////////////////////////////////////////////////////////////
//                       CHAT
////////////////////////////////////////////////////////////

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
    if (etatjeu=="Jeu" || etatjeu=="JeuViewer"){
       compartToChat(message); //Ne pas envoyer le message aux autres si il a trouver le mots
    }
    if(etatjeu == "WaitingRoom"){
      var pseudos = player.pseudos;
      message = pseudos + " : " + message;
      if(player.etat == "host" ){
        SendToAll(message);
      }
      else{
        Send(message);
      }
    }
    document.getElementById("message").value = "";
  }

  document.addEventListener('keydown', function(event) {
    if ((event.key === 'Enter') && (document.getElementById("message").value != ""))
    {
      var message = document.getElementById("message").value;
      if (etatjeu=="Jeu" || etatjeu=="JeuViewer") {
        compartToChat(message); //Ne pas envoyer le message aux autres si il a trouver le mots
      }
      if(etatjeu == "WaitingRoom"){
        var pseudos = player.pseudos;
        message = pseudos + " : " + message;
        if(player.etat == "host" ){
          SendToAll(message);
        }
        else{
          Send(message);
        }
      }
    document.getElementById("message").value = "";
    }
  });
}

/*
-- Lors l'on envoie un message, On compare le message avec le mot choisi par le dessinateur
-- Si c'est le bon mot :
    - On affiche @ pseudo a trouvé,
    - On incrémente le score du joueur,
    - On renvoie le tableau aux autres joueurs.
  Si ce n'est pas le bon mot :
    - On affiche le message.
*/
function compartToChat(msg){
  if (true){ //vérifier que le joueur n'a pas déjà donnée la bonne réponse
    setTimeout(() => {
      var word = tabPlayer[0].mot;
      var pseudos = player.pseudos;
      var pseudosMessage = pseudos + " : " + msg;
      var trouvé = pseudos + " a trouvé !";
      msg = SansAccent(msg);
      if (JaroDistance(msg, word)>0.99){  //ici c'est bon, on incrémente le score.
        if(player.etat == "host" && meInTab().canvas != true && repondu == false){
          addScore();
          SendTabPlayer();
          SendToAll(trouvé);
          repondu = true;
        }
        if(player.etat != "host" && meInTab().canvas != true && repondu == false){
          addScore();
          SendTabPlayer();
          Send(trouvé);
          repondu = true;
        }
      }
      else {
        if(player.etat == "host"){
          SendToAll(pseudosMessage);
        }
        if(player.etat != "host"){
          Send(pseudosMessage);
        }
      }
    }, 100)
  }
  return false;
}

////////////////////////////////////////////////////////////
//          SCORE, TABLEAU DE JOUEUR, MANCHE
////////////////////////////////////////////////////////////

//Auguemente le score du joueur dans le tableau de joueurs
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

//Récupère la position du dessinateur actuel, puis le passe la main au prochain joueur
export function ChangePlayer(){
      indicejoueur = whoDraw();
      tabPlayer[indicejoueur].canvas = false;
      indicejoueur = indicejoueur+1;
      if(indicejoueur < tabPlayer.length && tabPlayer.length > 1){
        tabPlayer[indicejoueur].canvas = true;
        if(GetPlayer().etat == "host"){
          SendTabPlayerToAll();
          repondu = false;
        }
      }
      else{
        nbManche = nbManche+1;
        indicejoueur = 0;
        tabPlayer[indicejoueur].canvas = true;
        if(GetPlayer().etat == "host" && nbManche < tabPlayer[0].manche){
          SendTabPlayerToAll();
          SetJeu();
          repondu = false;
        }
        if(GetPlayer().etat == "host" && nbManche == tabPlayer[0].manche && tabPlayer.length > 1){
          setTimeout(() => {FinDeJeu();}, 100);
        }
    }
}

//Termine la manche et affiche le score final
function FinDeJeu(){
  if(nbManche == tabPlayer[0].manche){
    var fin = "Fin de jeu";
    SendToAll(fin);
    SetScoreFinal();
  }
}

////////////////////////////////////////////////////////////
//                     CANAVAS
////////////////////////////////////////////////////////////

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


////////////////////////////////////////////////////////////
//             Ecoute sur la touche entrée
////////////////////////////////////////////////////////////

document.addEventListener('keydown', function(event) {
  if ((etatjeu == "sign") && (event.key === 'Enter') && (document.getElementById("pseudos").value != "")){
    player.pseudos = document.getElementById("pseudos").value;
    SetPlayer(player);
    AddInTab(player);
    SetWaiting();
  }
  else if ((etatjeu == "WaitingRoom") && (event.key === 'Enter') && (connecte == false) && (document.getElementById("peerID").value != "")){
    var id = document.getElementById("peerID").value;
    ConnectionToHost(id);
    document.getElementById("zoneId").innerHTML = "Connecté!";
    document.getElementById("gridJouer").innerHTML = "";
    connecte=true;
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
