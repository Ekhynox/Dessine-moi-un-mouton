import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Peer from 'peerjs';
import {SetJeu, SetWaiting, SetPlayer, GetPlayer, SetTab, GetTab, Connected, CloneTab} from './index';
//import {PersonItem} from './WaitingRoom';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';

//Canvas
var canvas;
var stream;
var video;

//Set le canvas
export function SetCanvas(varCanvas){
  canvas = varCanvas;
  stream = canvas.captureStream(300);
}

//Fonction de PeerJS
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

export function MyId(){
  return peerID;
}

////////////////////////////////////////////////////////
//Connexion
export function ConnectionToHost(id){
  var me = GetPlayer();
  me.etat = "viewer";
  conn = peer.connect(id, {
      reliable: true
});

  var player = GetPlayer();
  conn.on('open', function(id) {
    conn.send(player);
  });
}

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
//Envoyer des messages
export function Send(msg) {
  //var msg = pseudos + " : " + message;
  //messageTemp(msg);
  conn.send(msg);
}

export function SendToAll(msg){
  //var msg = pseudos + " : " + message;
  messageTemp(msg);
  for(let i = 0; i<tabConn.length; i++){
    conn = tabConn[i];
    conn.send(msg);
  }
}

////////////////////////////////////////////////////////
//Reception
peer.on('connection', function(conn) {
  conn.on('data', function(data){
    console.log(data);
    var me = GetPlayer();
    if(me.etat == "host"){
      if(data.co == false){
        data.co = true;
        conn = peer.connect(data.peerID, {
            reliable: true
        });
        tabConn.push(conn);
        SetTab(data);
        coWaitingRoom();
      }
      else{
        SendToAll(data);
        //coWaitingRoom();
      }
    }
    else{
      if(data[0].etat == "host"){
        setPool(data);
        CloneTab(data);
      }
      else{
        messageTemp(data);
      }
      if(data.canvas){
        canvas = data.canvas;
        console.log(canvas);
      }
    }
  });
});

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

///////////////////////////////////////////////////////
//Fonction render
function messageTemp(data){
  var chatBox = document.getElementById("chatBox")
  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var span = document.createElement("span");

  div1.setAttribute("class", "d-flex justify-content-start mb-4");
  div2.setAttribute("class", "msg_cotainer");
  span.setAttribute("class", "msg_time");

  div2.innerHTML = data;

  div2.appendChild(span);
  div1.appendChild(div2);
  chatBox.appendChild(div1);
}

export const PersonItem = ({ src, name}) => {
  //const avatarStyles = useDynamicAvatarStyles({ size: 56 });
  return (
    <Row gap={2} p={2.5}>
      <Item>
        <Avatar src={src} />
      </Item>
      <Row wrap grow gap={0.5} minWidth={0}>
        <Item grow minWidth={0}>
          <div>{name}</div>
        </Item>
      </Row>
    </Row>
  );
};

export function setPool(data){
  tabPlayer = data;
  var playerBox = document.getElementById("playerZone");
  playerBox.innerHTML = " ";
    for(let i=0; i<tabPlayer.length; i++){
      var div = document.createElement("div");
      //const el = React.createElement(PersonItem, {name : tabPlayer[i].pseudos , src : tabPlayer[i].avatar}, document.getElementById("playerZone"));
      //const di = React.createElement(Divider, {variant : "middle" , className : "style.divider" }, document.getElementById("playerZone"));
      //ReactDOM.render(el, document.getElementById("playerZone"));
      //ReactDOM.render(di, document.getElementById("playerZone"));
      //div.textContent += elem;
      div.innerHTML += tabPlayer[i].pseudos;
      playerBox.appendChild(div);
    }
}

////////////////////////////////////////////////////////
//Stream
function VideoStream(myStream){
  video = document.getElementById('Video');
  video.srcObject = myStream;
}
////////////////////////////////////////////////////////
//Connexion Stream
export function Connexion(id) {
  if(GetPlayer().etat == 'host'){
    for(let i = 0; i<tabPlayer.length; i++){
      var call = peer.call(tabPlayer[i].peerID, stream);
      console.log(call);
      call.on('stream', function(remoteStream){
        //VideoStream(remoteStream);
        console.log(remoteStream);
      });
    }
  }
}

////////////////////////////////////////////////////////
//reception stream
peer.on('call', function(call) {
  if(GetPlayer().etat != "host"){
    call.answer(); // Answer the call with an A/V stream.
    SetJeu();
    console.log(call);
    call.on('stream', function(remoteStream){
      VideoStream(remoteStream);
    });
  }
})
