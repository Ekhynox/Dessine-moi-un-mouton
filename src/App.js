import './App.css';
import React, {useState} from 'react';
import reactCSS from 'reactcss';
import {CirclePicker} from 'react-color';
import {ColorChange} from './index';
import {Connexion} from './index';
import {DownloadCanvas} from './index';
import { BiSave } from 'react-icons/bi';
import { FaPaintBrush } from 'react-icons/fa';
import { BiEraser } from 'react-icons/bi';
import { BiRectangle } from 'react-icons/bi';
import { BsCircle } from 'react-icons/bs';
import { SiCurl } from "react-icons/si";
import { FaTrashAlt } from 'react-icons/fa';
import { VscPaintcan } from 'react-icons/vsc';


function App() {
  //const colorChange = ({ hex }) => hex = ColorChange(hex); // fonction change la couleur du pinceau
  const colorChange = ({hex}) => {
    hex = ColorChange(hex); // fonction change la couleur du pinceau
  }

  return (
    <div className="background">
      <div className="wrapper">
          <div className="titre">
            <h3 id="show-peer"></h3>
            <input id="peerID"></input>
            <button onClick={Connexion}> Connexion </button>
          </div>
          <div className="drawbox">
            <canvas id="DrawBox" width="600" height="600"></canvas>
          </div>
          <div className="outils">
            <button className="styleB" id="Pen+">Pen+</button>
            <button className="styleB" id="Pen-">Pen-</button>
            <button className="styleB" id="Pinceau"><FaPaintBrush/></button>
            <button className="styleB" id="Erase"><BiEraser/></button>
            <button className="styleB" id="Clear"><FaTrashAlt/></button>

            <button className="styleB" id="drawRect"><BiRectangle/></button>
            <button className="styleB" id="drawCircle"><BsCircle/></button>
            <button className="styleB" id="drawLine"><SiCurl/></button>
            <button className="styleB" id="fillIn"><VscPaintcan/></button>
            <button className="styleB" download="example.jpg" id="saveImage"><BiSave/></button>
          </div>
          <div className="couleurs">
            <CirclePicker
              onChange={colorChange}
              width = "0"
            />
          </div>
          <div className="chatbox">
            Chatbox
            <p id="chat"></p>
          </div>
          <div className="score">
            Score
          </div>
          <div className="video">
            <video autoPlay id="Video" width="600" height="600"></video>
          </div>
      </div>
    </div>
  )
}

export default App
