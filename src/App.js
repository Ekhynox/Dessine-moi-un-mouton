import './App.css';
import React, {useState} from 'react';
import reactCSS from 'reactcss';
import {CirclePicker} from 'react-color';
import {ColorChange} from './index';
import {Connexion} from './connexion';

function App() {
  //const colorChange = ({ hex }) => hex = ColorChange(hex); // fonction change la couleur du pinceau
  const colorChange = ({hex}) => {
    hex = ColorChange(hex); // fonction change la couleur du pinceau
  }
  return (
    <div class="background">
      <div class="wrapper">
          <div class="titre">
            TITRE !
          </div>
          <div class="drawbox">
            <canvas id="DrawBox" width="750" height="750"></canvas>
          </div>
          <div class="outils">
            <button class="styleB" id="Pen+">Pen+</button>
            <button class="styleB" id="Pen-">Pen-</button>
            <button class="styleB" id="Pinceau">Pen</button>
            <button class="styleB" id="Erase">Eraser</button>
            <button class="styleB" id="Clear">Clear</button>

            <button class="styleB" id="drawRect">Rectangle</button>
            <button class="styleB" >...</button>
            <button class="styleB" >...</button>
            <button class="styleB" >...</button>
            <button class="styleB" >...</button>
          </div>
          <div class="couleurs">
            <CirclePicker
              onChange={colorChange}
              width = "0"
            />
          </div>
          <div class="chatbox">
            ChatTEST123545
          </div>
          <div class="score">
            Score
          </div>
      </div>
        <h3 id="show-peer"></h3>
        <input id="peerID"></input>
        <button onClick={Connexion}> connection </button>
    </div>
  )
}

export default App
