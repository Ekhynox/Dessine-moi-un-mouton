import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Peer from 'peerjs';
import {SetJeu, SetWaiting, SetPlayer, GetPlayer, AddInTab, GetTab, Connected, SetTab, meInTab, ChangePlayer, SetScoreFinal, SetConnecte, setRepondu} from './index';
//import {PersonItem} from './WaitingRoom';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';

//Canvas
var canvas;
var stream;
var video;
var connect = true;

//Set le canvas
export function SetCanvas(varCanvas){
  canvas = varCanvas;
  stream = canvas.captureStream(300);
}

//PeerJS
var peer = new Peer();
var conn;
var peerID;
var connID;
var player;
var rdy = false;
var msgBool = false;
var tabPlayer = GetTab();
var tabConn = [];
var currentPlayer = 0;

////////////////////////////////////////////////////////
//Mon ID peerJS
peer.on('open', function(id) {
    peerID = id
});

//Retourne mon id de connexion
export function MyId(){
  return peerID;
}

////////////////////////////////////////////////////////
// setup le stream
function VideoStream(myStream){
  video = document.getElementById('Video');
  video.srcObject = myStream;
}
////////////////////////////////////////////////////////
//Connexion Stream
export function Connexion() {
  if(meInTab().canvas == true){
    for(let i = 0; i<tabPlayer.length; i++){
      var call = peer.call(tabPlayer[i].peerID, stream);
      call.on('stream', function(remoteStream){
        //VideoStream(remoteStream);
      });
    }
  }
}

////////////////////////////////////////////////////////
//reception stream
peer.on('call', function(call) {
  if(meInTab().canvas != true){
    if(meInTab().etat != "host"){
      if(connect == true){
        SetJeu();
        setRepondu();
        connect = false;
      }
    }
    call.answer(); // Answer the call with an A/V stream.
    call.on('stream', function(remoteStream){
      VideoStream(remoteStream);
    });
  }
})

////////////////////////////////////////////////////////
//Connexion à l'hote de la partie, puis envoie de mes informations.
export function ConnectionToHost(id){
  document.getElementById("textAndButton").innerHTML = "";
  var me = GetPlayer();
  me.etat = "viewer";
  me.canvas = "false";
  conn = peer.connect(id, {
      reliable: true
});
  var player = GetPlayer();
  conn.on('open', function(id) {
    conn.send(player);
  });
  SetConnecte(true);
}

//Envoyer le tableau mise à jour à tous les joueurs lors de la connexion d'une nouvelle personne.
function coWaitingRoom() {
  tabPlayer = GetTab();
  setPool(tabPlayer);
  for(let i = 0; i<tabConn.length; i++){
    conn = tabConn[i];
    conn.on('open', function(id) {
      conn.send(tabPlayer);
    });
  }
}

////////////////////////////////////////////////////////
//Envoyer le tableau de joueur à tous les joueurs
export function SendTabPlayerToAll() {
  tabPlayer = GetTab();
  setPool(tabPlayer);
  for(let i = 0; i<tabConn.length; i++){
    conn = tabConn[i];
    conn.send(tabPlayer);
  }
}

//Envoyer le tableau de joueur à l'hote
export function SendTabPlayer() {
  tabPlayer = GetTab();
  conn.send(tabPlayer);
  setPool(tabPlayer); //fonctionnel côtés stream mais casse le côté host
}

////////////////////////////////////////////////////////
//Envoyer le message à tous les joueurs
export function SendToAll(msg){
  messageTemp(msg);
  for(let i = 0; i<tabConn.length; i++){
    conn = tabConn[i];
    conn.send(msg);
  }
}

//Envoyer le message à l'hote
export function Send(msg) {
  conn.send(msg);
}

////////////////////////////////////////////////////////
//Reception
peer.on('connection', function(conn) {
  conn.on('data', function(data){
    var me = GetPlayer();

    ////////////////////////////////////////////
    //Si une NouvelleManche
    if(data == "NouvelleManche"){
      if(me.etat == "host"){     //  Si je suis l'hote
        ChangePlayer();          //  je donne la mains au prochain joueur
        SendTabPlayerToAll();    //  renvoyer le tableau mise à jour à tous les utilisateurs
        setRepondu();
      }
      if(me.etat != "host" && meInTab().canvas == true){ // si je ne suis pas l'hote et que j'ai le canvas (donc je suis le joueur qui click sur nouvelle Manche)
        SetJeu();                //  j'actualise la page pour passer en viewer
        setRepondu();
      }
    }

    ////////////////////////////////////////////
    //Si fin de jeu
    if(data == "Fin de jeu"){
      setTimeout(() => {SetScoreFinal();}, 100);
    }

    ////////////////////////////////////////////
    //  Si je suis l'hote
    if(me.etat == "host"){       //  Si je suis l'hote
      if(data.co == false){      //  Si la personne(data) n'est pas connecté
        data.co = true;
        conn = peer.connect(data.peerID, {
            reliable: true
        });
        tabConn.push(conn);      // Ajoute la connexion dans mon tableau de connexion
        AddInTab(data);          // Ajoute le joueur dans mon tableau de joueurs
        coWaitingRoom();         // Dire a tous les utilisateur qu'un nouveau joueurs est connecté
        SendTabPlayerToAll();    // Renvoyer le tableau mise à jour à tous les utilisateurs
      }
      else{                      //  Si c'est pas une connection
        if(data[0].etat == "host"){ // Si je réceptionne d'un tableau
          setPool(data);         // j'actualise le tableau de joueurs
          SetTab(data);          // et je copie le tableau en local
          SendTabPlayerToAll();  // Renvoyer le tableau mise à jour à tous les utilisateurs
        }
        else{                       // Si je réceptionne un message
          SendToAll(data);       //je transmet le message aux autres joueurs
        }
      }
    }

    ////////////////////////////////////////////
    //  Si je ne suis pas l'hote
    else{
      if(data[0].etat == "host"){  // Si je réceptionne le tableau de l'hote
        setPool(data);             // j'actualise le tableau de joueurs
        SetTab(data);              // et je copie le tableau en local
      }
      else{                       // Si je réceptionne un message
        messageTemp(data);        // Affiche le message dans le chat
      }
    }
  });
});

///////////////////////////////////////////////////////
//Fonction render Chat
// Affiche le message dans le chat
function messageTemp(data){
  var chatBox = document.getElementById("chatBox")
  var div = document.createElement("div");
  div.innerHTML = data;
  chatBox.appendChild(div);
}

///////////////////////////////////////////////////////
//Fonction render tableau de joueurs
// Met à jour le tableau de joueurs
export function setPool(data){
  tabPlayer = data;
  var rows = []
    for(let i=0; i<tabPlayer.length; i++){
      rows[i] = React.createElement(PersonItem, {name : tabPlayer[i].pseudos , src : tabPlayer[i].avatar, score : tabPlayer[i].score}, document.getElementById("playerZone"));
    }
    ReactDOM.render(rows, document.getElementById("playerZone"));
}

export const PersonItem = ({ src, name, score}) => {
  return (
    <Row gap={1} p={1}>
      <Item>
        <Avatar src={src} />
      </Item>
      <Row wrap grow gap={0.5} minWidth={0}>
        <Item grow minWidth={0}>
          <div>{name}</div>
        </Item>
        <Item>
          <div>{score}</div>
        </Item>
      </Row>
    </Row>
  );
};

////////////////////////////////////////////////////////
//Envoyer l'informations a l'hote qu'une nouvelle manche est lancé
export function NouvelleManche(){
  if(GetPlayer().etat != "host"){
    Send("NouvelleManche");
  }
  else
  {
    //SendTabPlayerToAll();
    SendToAll("NouvelleManche");
  }
}

////////////////////////////////////////////////////////
//Retourne vrai si je suis le joueur est deja présent dans le tableau
function inTab(tab, data){
  if(tabPlayer.length > 0){
    for(let i = 0; i<tab.length;i++){
      if(tab[i].peerID == data[i].peerID){
        return true;
      }
    }
    return false;
  }
  return false;
}
