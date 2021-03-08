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
import {ColorChange, DownloadCanvas} from './canvas';
import {Connexion} from './connexion';
import {verybigPen, bigPen, smallPen, verysmallPen, erase, pinceau, clear, rect, rectfull, circle, circlefull, line, fill, save, undo} from './canvas';

function App() {
  //const colorChange = ({ hex }) => hex = ColorChange(hex); // fonction change la couleur du pinceau
  const colorChange = ({hex}) => {
    hex = ColorChange(hex); // fonction change la couleur du pinceau
  }

  return (
<div className="background row">
        <div className="row">
            <div className="titre ">
              <h3 id="show-peer"></h3>
              <input id="pseudos" placeholder="Nicknames"></input>
              <input id="peerID" placeholder="Host ID"></input>
              <button onClick={Connexion}> Connexion </button>
            </div>
        </div>


        <div className="row">
            <div className="score col-sd">Score</div>

            <div className="drawbox col-sd">
              <canvas id="DrawBox" width="670" height="670"></canvas>
            </div>

            <div className= "col-sd">
                <button onClick={verybigPen} className="styleB tresgrand outils1" id="Pen++"><FaCircle/></button>
                <button onClick={bigPen} className="styleB grand outils1" id="Pen+"><FaCircle/></button>
                <button onClick={smallPen} className="styleB moyen outils1" id="Pen"><FaCircle/></button>
                <button onClick={verysmallPen} className="styleB petit outils1" id="Pen-"><FaCircle/></button>
                <button onClick={pinceau} className="styleB outils1" id="Pinceau"><FaPaintBrush/></button>
                <button onClick={rect} className="styleB outils1" id="drawRect"><BsSquare/></button>
                <button onClick={rectfull} className="styleB outils1" id="drawRectFull"><FaSquare/></button>
                <button onClick={circle} className="styleB outils1" id="drawCircle"><BsCircle/></button>
                <button onClick={circlefull} className="styleB outils1" id="drawCircleFull"><FaCircle/></button>
                <button onClick={line} className="styleB outils1" id="drawLine"><SiCurl/></button>
                <button onClick={fill} className="styleB outils1" id="fillIn"><VscPaintcan/></button>
            </div>

            <div className="couleurs col-sd">
                <CirclePicker
                  onChange={colorChange}
                  width = {1}
                  circleSize ={26}
                  colors = {["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "black", "white"]}
                />
            </div>

            <div className="card  col-sd">
                <div id="chatBox" className="card-body msg_card_body"></div>
                    <div className="card-footer input-group">
                        <input id="message" className="form-control type_msg" placeholder="Type your message..."></input>
                        <div className="input-group-append">
                            <button id="send" className="input-group-text send_btn" ><BiSend/></button>
                        </div>
                    </div>
                </div>
           </div>

           <div className="row  col-5">
              <button onClick={erase} className="styleB outils2" id="Erase"><BiEraser/></button>
              <button onClick={clear} className="styleB outils2" id="Clear"><FaTrashAlt/></button>
              <button onClick={undo} className="styleB outils2" id="Bundo"><RiArrowGoBackFill/></button>
              <button onClick={save} className="styleB outils2" download="example.jpg" id="saveImage"><BiSave/></button>
            </div>

            <div className="row  col-5">
                <video autoPlay id="Video" width="600" height="600"></video>
            </div>
</div>
  )
}

export default App
