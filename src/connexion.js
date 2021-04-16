import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Peer from 'peerjs';
import {SetJeu, SetWaiting, SetPlayer, GetPlayer, AddInTab, GetTab, Connected, SetTab, meInTab, ChangePlayer} from './index';
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
//Envoyer le tableau player
export function SendTabPlayerToAll() {
  tabPlayer = GetTab();
  setPool(tabPlayer);
  for(let i = 0; i<tabConn.length; i++){
    conn = tabConn[i];
    conn.send(tabPlayer);
  }
}

export function SendTabPlayer() {
  tabPlayer = GetTab();
  conn.send(tabPlayer);
  setPool(tabPlayer); //fonctionnel côtés stream mais casse le côté host
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
    if(data == "NouvelleManche"){
      if(me.etat == "host"){
        ChangePlayer();
        SendTabPlayerToAll();
        SetJeu();
      }
      else{
        SetJeu();
      }
    }
    if(me.etat == "host"){
      if(data.co == false){
        data.co = true;
        conn = peer.connect(data.peerID, {
            reliable: true
        });
        tabConn.push(conn);
        AddInTab(data);
        coWaitingRoom();
        SendTabPlayerToAll();
      }
      else{
        if(data[0].etat == "host"){
          setPool(data);
          SetTab(data);
        }
        else{
          SendToAll(data);
          //coWaitingRoom();
        }
      }
    }
    else{
      if(data[0].etat == "host"){
        setPool(data);
        SetTab(data);
      }
      else{
        messageTemp(data);
      }
      if(data.canvas){
        canvas = data.canvas;
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

export const PersonItem = ({ src, name, score}) => {
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
        <Item>
          <div>{score}</div>
        </Item>
      </Row>
    </Row>
  );
};

export function setPool(data){
  tabPlayer = data;
  //var playerZone = document.getElementById("playerZone");
  //playerZone.innerHTML = " ";
    for(let i=0; i<tabPlayer.length; i++){
      //var div = document.createElement("div");
      const el = React.createElement(PersonItem, {name : tabPlayer[i].pseudos , src : tabPlayer[i].avatar, score : tabPlayer[i].score}, document.getElementById("playerZone"));
      //const di = React.createElement(Divider, {variant : "middle" , className : "style.divider" }, document.getElementById("playerZone"));
      ReactDOM.render(el, document.getElementById("playerZone"));
      //ReactDOM.render(di, document.getElementById("playerZone"));
      //div.textContent += elem;
      //div.innerHTML += tabPlayer[i].pseudos + " " + tabPlayer[i].score;
      //playerZone.appendChild(div);
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
      console.log("setjeu de peer.on");
      if(connect == true){
        SetJeu();
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
//NouvelleManche
export function NouvelleManche(){
  if(GetPlayer.etat != "host"){
    Send("NouvelleManche");
  }
  else
  {
    //SendTabPlayerToAll();
    SendToAll("NouvelleManche");
  }
}
