import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss';
import {useStylesLight, useStylesDark} from './css/AppStyle';
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControl, FormControlLabel, Grid, Link, Paper, TextField, Typography} from '@material-ui/core';
import {SetMot} from './index';
import {get_wordlist} from './wordslist';
import {getTheme, setTheme} from './theme';

//gestion du darkTheme pour les boutons de choix de mots
var light;
var dark;
var classes;

export function ChangeTheme(){
  var theme = getTheme();

  if(theme == "light") {
    classes = light;
  }
  else {
    classes = dark;
  }
}


var words_copy=get_wordlist().slice();  //cree une copie de la liste de mots c'est avec elle qu'on évite les doublon
var words_use=[]; //tab des 3 propositions de mots
var wordUse;
var choisi = false;

export function GetChoisi(){ //retourne le booléen de choix
  return choisi;
}

export function SetChoisi(tmp){ //modifie le booléen de choix
  choisi=tmp;
}

export function GetWordUse(){ //retourne le mot choisi modifier
  return SansAccent(wordUse);
}

export function SansAccent(msg){ //retourne le mot choisi sans accent, sans espaces avant et après, transforme le string en minuscule
  var accent = [
      /[\300-\306]/g, /[\340-\346]/g, // A, a
      /[\310-\313]/g, /[\350-\353]/g, // E, e
      /[\314-\317]/g, /[\354-\357]/g, // I, i
      /[\322-\330]/g, /[\362-\370]/g, // O, o
      /[\331-\334]/g, /[\371-\374]/g, // U, u
      /[\321]/g, /[\361]/g, // N, n
      /[\307]/g, /[\347]/g, // C, c
  ];
  var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];
  for(var i = 0; i < accent.length; i++){
      msg = msg.replace(accent[i], noaccent[i]);
  }
  msg = msg.trim(); //supprime les espaces en trop avant et après le string
  msg  = msg.toLowerCase(); //transforme le string en minuscule
  return msg;
}

export function Click_choose_word(val) { //fait l'affichage du mot choisi et l'envoie à tout les joueurs
  words_use=[]; //liste de propositions vider
  wordUse=val;  //sauvegarde le mot choisi
  const tmp = (element) => element === val; //crée une condition pour le findIndex
  var ind = words_copy.findIndex(tmp);  //on récupère l'indice du mot choisi dans la liste de mot disponible
  if (ind !== -1) //on regarde si on est dans la liste de mots
    words_copy.splice(ind, 1);  //on suprime le mot de la liste que si il exist dedans
//  document.getElementById("wchoixfinal").innerHTML= `<h3>${val}</h3>` //on affiche le mot choisi
  const el = React.createElement(MotChoisiItem, {value : val}, document.getElementById("wchoixfinal"));
  ReactDOM.render(el, document.getElementById("wchoixfinal"));

  choisi=true; //on set le booléen en true
  SetMot(); //on envoie le mot choisi a tout les joueurs
}


export const MotChoisiItem= ({value}) => {
  light = useStylesLight();
  dark = useStylesDark();
  ChangeTheme();
  return(
      <Typography className={classes.motChoisi}>{value}</Typography>
  );
};

export function Words_list()
{
  while (words_use.length < 3) {  //on continue tant qu'on a pas nos 3 propositions

    if (words_copy.length<3) //controle si on arrive a la fin de la liste de mots, très peu probable.
      words_copy = get_wordlist().slice();

    const tt = words_copy[Math.floor(Math.random()*words_copy.length)]; //tire aléatoire d'un indice
    if(words_use.find(element => element === tt)===undefined) //on regarde si un on a pas déjà tiree ce mots(indice)
      words_use.push(tt);
  }
/*
  document.getElementById("wchoix").innerHTML = words_use.map(
   d => `<button id="choose_word" value="${d}"> ${d} </button>`);//crée l'HTML des propositions
*/
  //var d = words_use;
  var wchoix = document.getElementById("wchoix");
  if (wchoix != undefined){
  //création des boutons de choix de mots
var rows = [];
rows[0] = React.createElement(ButtonItem, {value : words_use[0]}, document.getElementById("wchoix"));
rows[1] = React.createElement(ButtonItem, {value : words_use[1]}, document.getElementById("wchoix"));
rows[2] = React.createElement(ButtonItem, {value : words_use[2]}, document.getElementById("wchoix"));

ReactDOM.render(rows, document.getElementById("wchoix"));

      //on récupère la liste des boutons choix mots et on regarde si y'a un click dessus
      const choose_word_button=document.querySelectorAll('#choose_word');
      choose_word_button.forEach((q) => {
          q.onclick = function () {
            Click_choose_word(q.value)
          }
      });
  }
}

//élément react pour créer un bouton dans la modale
export const ButtonItem= ({value}) => {
  light = useStylesLight();
  dark = useStylesDark();
  ChangeTheme();
  return(
      <Button className={classes.BtnMots} variant="outlined" value ={value} id="choose_word">{value}</Button>
  );
};


export function JaroDistance(a, b) {
  console.log(a + " => " + b);
  var matches = _matching(a, b);
  if (matches > 0) {
    //on calcule la jaro distance
    var m = matches;
    var t = _transpositions(a, b);
    var s1 = a.length;
    var s2 = b.length;
    var similarity = (m / s1 + m / s2 + (m - t) / m) / 3;

    // return jaro if less than boost
    var boost = 0.7;
    if (similarity < boost) return similarity;

    // transform to jaro winkler
    // prefix scale gives more favorable ratings to strings that share common prefixes
    var prefixScale = 0.1;
    var prefix = _prefix(a, b);
    return similarity + prefix * prefixScale * (1 - similarity);
  }

  return 0;
};

var _matching = function _matching(a, b) {
  var bound = Math.floor(Math.max(a.length, b.length) / 2) - 1;
  var matched = [];
  var matches = 0;
  for (var i = 0; i < a.length; i++) {
    for (var j = Math.max(0, i - bound); j <= Math.min(b.length, i + bound); j++) {
      if (a[i] === b[j] && !matched[j]) {
        matched[j] = true;
        matches++;
        break;
      }
    }
  }
  return matches;
};


var _transpositions = function _transpositions(a, b) {
  var bound = Math.floor(Math.max(a.length, b.length) / 2) - 1;

  var matches = {
    a: "",
    b: ""
  };
  var matched = [];

  // get order of string matches between each word
  for (var i = 0; i < a.length; i++) {
    for (var j = Math.max(0, i - bound); j <= Math.min(b.length, i + bound); j++) {
      if (a[i] === b[j] && !matched[j]) {
        matches.a += a[i];
        matched[j] = true;
        break;
      }
    }
  }

  matched = [];
  for (var _i = 0; _i < b.length; _i++) {
    for (var _j = Math.max(0, _i - bound); _j <= Math.min(a.length, _i + bound); _j++) {
      if (b[_i] === a[_j] && !matched[_j]) {
        matches.b += b[_i];
        matched[_j] = true;
        break;
      }
    }
  }

  // get transpositions
  var transpositions = 0;
  for (var _i2 = 0; _i2 < matches.a.length; _i2++) {
    if (matches.a[_i2] != matches.b[_i2]) transpositions++;
  }

  return Math.floor(transpositions / 2);
};


var _prefix = function _prefix(a, b) {
  var prefixLimit = 4;
  var p = 0;

  for (; p < prefixLimit; p++) {
    if (a[p] != b[p]) return p;
  }

  return ++p;
};
