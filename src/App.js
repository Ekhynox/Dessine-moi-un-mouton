import './App.css';
import React, {useState} from 'react';
import reactCSS from 'reactcss';
import 'bootstrap/dist/css/bootstrap.css';
// React Color
import {CirclePicker} from 'react-color';
// React Icons
import { BiSave, BiEraser, BiSend} from 'react-icons/bi';
import { FaPaintBrush, FaTrashAlt, FaCircle, FaSquare } from 'react-icons/fa';
import { BsCircle, BsSquare } from 'react-icons/bs';
import { SiCurl } from "react-icons/si";
import { VscPaintcan } from 'react-icons/vsc';
import { RiArrowGoBackFill } from "react-icons/ri";
// fonction
import {ColorChange, DownloadCanvas} from './index';
import {Connexion} from './index';
import {Send} from './index.js';

function App() {
  //const colorChange = ({ hex }) => hex = ColorChange(hex); // fonction change la couleur du pinceau
  const colorChange = ({hex}) => {
    hex = ColorChange(hex); // fonction change la couleur du pinceau
  }

  return (
<html>
	<head>
	</head>
    <body>
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
            <button className="styleB tresgrand" id="Pen++"><FaCircle/></button>
            <button className="styleB grand" id="Pen+"><FaCircle/></button>
            <button className="styleB moyen" id="Pen"><FaCircle/></button>
            <button className="styleB petit" id="Pen-"><FaCircle/></button>
            <button className="styleB" id="Pinceau"><FaPaintBrush/></button>
            <button className="styleB" id="Erase"><BiEraser/></button>
            <button className="styleB" id="Clear"><FaTrashAlt/></button>

            <button className="styleB" id="drawRect"><BsSquare/></button>
            <button className="styleB" id="drawRectFull"><FaSquare/></button>
            <button className="styleB" id="drawCircle"><BsCircle/></button>
            <button className="styleB" id="drawCircleFull"><FaCircle/></button>
            <button className="styleB" id="drawLine"><SiCurl/></button>
            <button className="styleB" id="fillIn"><VscPaintcan/></button>
            <button className="styleB" id="Bundo"><RiArrowGoBackFill/></button>
            <button className="styleB" download="example.jpg" id="saveImage"><BiSave/></button>
          </div>
          <div className="couleurs">
            <CirclePicker
              onChange={colorChange}
              width = {1}
              circleSize ={26}
              colors = {["#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#00bcd4", "#009688", "#4caf50", "#ffeb3b", "#ffc107", "#ff9800", "#795548", "#607d8b", "black", "white"]}

            />
          </div>
            <div className="card">
              <div id="chatBox" className="card-body msg_card_body">

                <div className="d-flex justify-content-start mb-4">
                  <div className="msg_cotainer">
                    Ekhynox : Hello toi !
                    <span className="msg_time">46 Sec</span>
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <div className="input-group">
                  <input id="message" className="form-control type_msg" placeholder="Type your message..."></input>
                  <div className="input-group-append">
                    <button id="send" onClick={Send} className="input-group-text send_btn" ><BiSend/></button>
                  </div>
                </div>
            </div>
          </div>

          <div className="score">
            Score
          </div>

          <div className="video">
            <video autoPlay id="Video" width="600" height="600"></video>
          </div>
      </div>
    </div>
    </body>
  </html>
  )
}

export default App
