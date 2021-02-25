import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss';
import Peer from 'peerjs';
import App from './App';

//Fonction de PeerJS
var peer = new Peer();
var peerID;

//var btnConnexion = document.getElementById("connexion");
var connID;
var conn;

 export function Connexion() {
  connID = document.getElementById("peerID").value;
  var conn = peer.connect(connID);
  conn.on('open', function(id) {
    conn.send("hello toi <3 !");
    console.log("Check la console sur l'autre navigateur");
  });
}

peer.on('open', function(id) {
  peerID = id;
  document.getElementById("show-peer").innerHTML = peerID;
});

peer.on('connection', function(conn) {
  conn.on('data', function(data){
    // Will print 'hello!'
    console.log(data);
  });
});

//MediaConnection
var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

getUserMedia({video: true, audio: true}, function(stream) {
  var call = peer.call(connID, stream);
  call.on('stream', function(remoteStream) {
    console.log("ok")
      // Show stream in some video/canvas element.
  });
},
  function(err) {
    console.log('Failed to get local stream' ,err);
  });

peer.on('connection', function(call) {
  getUserMedia({video: true, audio: true}, function(stream) {
    console.log("ok")
    call.answer(stream); // Answer the call with an A/V stream.
    call.on('stream', function(remoteStream) {
      console.log("connection ok!")// Show stream in some video/canvas element.
    });
  }, function(err) {
    console.log('Failed to get local stream' ,err);
  });
});
