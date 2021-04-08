import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss';
import {get_wordlist} from './wordslist';


var words_copy=get_wordlist().slice();  //cree une copie de la liste de mots c'est avec elle qu'on évite les doublon
var words_use=[]; //tab des 3 propositions de mots
var wordUse;
var choisi = false;

export function GetChoisi(){
  return choisi;
}

export function GetWordUse(){
  return wordUse;
}

export function SetChoisi(tmp){
  choisi=tmp;
}

function Click_choose_word(val) {
  words_use=[]; //liste de propositions vider
  wordUse=val;
  const tmp = (element) => element === val;
  var ind = words_copy.findIndex(tmp);
  if (ind !== -1)
    words_copy.splice(ind, 1);  //on suprime le mot de la liste que si il exist dedans
  document.getElementById("wchoixfinal").innerHTML= `<h3>${val}</h3>`
  choisi=true;
}

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
  var bt1 = document.createElement("BUTTON");
  var bt2 = document.createElement("BUTTON");
  var bt3 = document.createElement("BUTTON");

  bt1.setAttribute("id", "choose_word");
  bt2.setAttribute("id", "choose_word");
  bt3.setAttribute("id", "choose_word");

    bt3.setAttribute("class", "buttoncss");

  bt1.setAttribute("value", words_use[0]);
  bt2.setAttribute("value", words_use[1]);
  bt3.setAttribute("value", words_use[2]);

  bt1.className = "btn";
  bt2.className = "btn";
  bt3.className = "btn";

  bt1.innerHTML = words_use[0];
  bt2.innerHTML = words_use[1];
  bt3.innerHTML = words_use[2];

  wchoix.appendChild(bt1);
  wchoix.appendChild(bt2);
  wchoix.appendChild(bt3);


    //on récupère la liste des boutons choix mots et on regarde si y'a un click dessus
    const choose_word_button=document.querySelectorAll('#choose_word');
    choose_word_button.forEach((q) => {
        q.onclick = function () {
          Click_choose_word(q.value)
        }
    });
}
