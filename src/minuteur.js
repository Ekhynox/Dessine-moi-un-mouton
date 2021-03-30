import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss';
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
//fonction minuteur;

// var time_draw_init=10;  //temps de dessins choisi
// var time_draw=time_draw_init; //variable globale qui sera utiliser pour d'autre fonction ("score").

//fonction qui prend en param la balise (elem) où le temps est afficher.
export function CountDown(){
  // var element = document.getElementById('aff_time');
  // // element.innerHTML = "Remaining Time: " + time_draw + " seconds";
  // if (time_draw < 1){  //si le temps "time" est a zero on affiche un pop-up alert et on quite la fonction.
  //   // element.innerHTML = "";
  //   alert("Stop drawing !");
  //   time_draw=time_draw_init;
  //   return;
  // }
  // time_draw--; //on décrémente le "time" pour simuler le minuteur
  // setTimeout(function (){ CountDown(); },1000); // on rappel la fonction avec un temps d'attente de 1sec
}
