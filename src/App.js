import './App.css';
import React, {useState} from 'react';
import reactCSS from 'reactcss';
import {CirclePicker} from 'react-color';
import {ColorChange} from './index';
import {Connexion} from './connexion';
import {DownloadCanvas} from './index';

function App() {
  //const colorChange = ({ hex }) => hex = ColorChange(hex); // fonction change la couleur du pinceau
  const colorChange = ({hex}) => {
    hex = ColorChange(hex); // fonction change la couleur du pinceau
  }

  return (
    <div className="background">
      <div className="wrapper">
          <div className="titre">
            TITRE !
          </div>
          <div className="drawbox">
            <canvas id="DrawBox" width="750" height="750"></canvas>
          </div>
          <div className="outils">
            <button className="styleB" id="Pen+">Pen+</button>
            <button className="styleB" id="Pen-">Pen-</button>
            <button className="styleB" id="Pinceau">Pen</button>
            <button className="styleB" id="Erase">Eraser</button>
            <button className="styleB" id="Clear">Clear</button>

            <button className="styleB" id="drawRect">Rectangle</button>
            <button className="styleB" id="drawCircle">Cercles</button>
            <button className="styleB" id="drawLine">Lignes</button>
            <button className="styleB" >...</button>
            <button className="styleB" download="example.jpg" id="saveImage">Download</button>
          </div>
          <div className="couleurs">
            <CirclePicker
              onChange={colorChange}
              width = "0"
            />
          </div>
          <div className="chatbox">
            ChatTEST123545
          </div>
          <div className="score">
            Score
          </div>
      </div>
      <div>
        <h3 id="show-peer"></h3>
        <input id="peerID"></input>
        <button onClick={Connexion}> connection </button>
      </div>
    </div>
  )
}

export default App
