import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Peer from 'peerjs';
import {SetJeu,SetWaiting, SetPlayer, GetPlayer, SetTab, GetTab, Connected} from './index';
import {PersonItem} from './WaitingRoom';
import { Column, Row, Item } from '@mui-treasury/components/flex';

//Canvas
var canvas;
var stream;

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
export function CoWaitingRoom(id) {
  conn = peer.connect(id, {
      reliable: true
  });
  var player = GetPlayer();
  msgBool = false;
  conn.on('open', function(id) {
    conn.send(player);
  });
}

////////////////////////////////////////////////////////
//Envoyer des messages
export function Send(message, pseudos) {
  msgBool = true;
  var msg = pseudos + " : " + message;
  messageTemp(msg);
  tabPlayer = GetTab();
  console.log(tabPlayer);
  for(let i = 0; i<tabPlayer.length; i++){
    console.log(tabPlayer[i].peerID);
    conn = peer.connect(tabPlayer[i].peerID, {
        reliable: true
    });
    conn.on('open', function(id) {
        conn.send(msg);
        console.log(msg);
    });
  }
}

////////////////////////////////////////////////////////
//Reception tabPlayer
peer.on('connection', function(conn) {
  conn.on('data', function(data){
    //if(msgBool == false){
        console.log(data);
          SetTab(data);
          setPool();
          tabPlayer = GetTab();
          for(let i = 0; i<tabPlayer.length; i++){
            if(tabPlayer[i].co == false){
              tabPlayer[i].co = true;
              //Connected(i);
              conn = peer.connect(tabPlayer[i].peerID, {
                  reliable: true
              });
              conn.on('open', function(id) {
                conn.send(GetPlayer());
              });
            }
          }
      //  }
      //else{
        messageTemp(data);
      //}
      });
});

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

export function setPool(){
  var tabPlayer = GetTab();
  console.log(tabPlayer);
  var playerBox = document.getElementById("playerZone")
  playerBox.innerHTML = " ";
  for(let i=0; i<tabPlayer.length; i++){
    var div = document.createElement("div");
    const elem = `<PersonItem name={'`+ tabPlayer[i].pseudos + `'} src={'` + tabPlayer[i].avatar+`'} />`;
    div.textContent += elem;
    //div.innerHTML += tabPlayer[i].pseudos;
    playerBox.appendChild(div);
  }
}

////////////////////////////////////////////////////////
//Stream
function VideoStream(myStream){
  var video = document.getElementById('Video');
  video.srcObject = myStream;
}
////////////////////////////////////////////////////////
//Connexion Stream
export function Connexion(id) {
  connID = id;
  conn = peer.connect(connID);
  var mystream = peer.call(connID, stream);
  mystream.on('stream', function(remoteStream){
    VideoStream(remoteStream);
  });
}

////////////////////////////////////////////////////////
//reception stream
peer.on('call', function(call) {
  call.answer(stream); // Answer the call with an A/V stream.
})
