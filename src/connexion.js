import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Peer from 'peerjs';
import {SetJeu,SetWaiting, SetPlayer, GetPlayer, SetTab, GetTab, Connected} from './index';

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
  for(let i = 0; i<tabPlayer.lenght; i++){
    conn = peer.connect(tabPlayer[i].peerID, {
        reliable: true
    });
    conn.on('open', function(id) {
        conn.send(msg);
    });
  }
}

////////////////////////////////////////////////////////
//Reception tabPlayer
peer.on('connection', function(conn) {
  if(msgBool == false){
      conn.on('data', function(data){
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
      });
    }
    if(msgBool == true){
      conn.on('data', function(data){
        messageTemp(data);
        for(let i = 0; i<tabPlayer.length; i++){
          conn = peer.connect(tabPlayer[i].peerID, {
            reliable: true
          });
          conn.on('open', function(id) {
            conn.send(data);
          });
        }
      });
    }
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

function setPool(){
  var tabPlayer = GetTab();
  console.log(tabPlayer);
  var playerBox = document.getElementById("playerZone")
  playerBox.innerHTML = " ";
  for(let i=0; i<tabPlayer.length; i++){
    var div = document.createElement("div");
    div.innerHTML = tabPlayer[i].pseudos;
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
