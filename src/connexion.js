import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Peer from 'peerjs';
import {SetWaiting} from './index';
import {SetJeu} from './index';

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

////////////////////////////////////////////////////////
//Stream
function VideoStream(myStream){
  var video = document.getElementById('Video');
  video.srcObject = myStream;
}

////////////////////////////////////////////////////////
//Mon ID peerJS
peer.on('open', function(id) {
    peerID = id;
});

export function MyId(){
    return peerID;
}

////////////////////////////////////////////////////////
//Connexion
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

////////////////////////////////////////////////////////
//Envoyer des messages
export function Send(message, pseudos) {
  var chatBox = document.getElementById("chatBox")
  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var span = document.createElement("span");

  conn = peer.connect(connID);

  connID = document.getElementById("peerID").value; //Id du host
  document.getElementById("show-peer").innerHTML = "Connexion " + connID;

  div1.setAttribute("class", "d-flex justify-content-start mb-4");
  div2.setAttribute("class", "msg_cotainer");
  span.setAttribute("class", "msg_time");

  div2.innerHTML = pseudos + " : " + message;

  div2.appendChild(span);
  div1.appendChild(div2);
  chatBox.appendChild(div1);

  peer.on('open', function(id) {
    peerID = id;
    console.log(peerID);
  });

  conn.on('open', function(id) {
    conn.send(pseudos + " : " + message);
  });
}

////////////////////////////////////////////////////////
//Reception
peer.on('connection', function(conn) {
  conn.on('data', function(data){

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

    console.log(data);
  });
});
