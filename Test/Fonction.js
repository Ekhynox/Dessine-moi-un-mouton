function getMousePos(canvas, mouse) {
  var rect = canvas.getBoundingClientRect(); // retourne sa position par rapport à la zone d'affichage.
  return {
    x: mouse.clientX - rect.left, // position en X de la souris - ditance depuis la droite de la fenêtre par rapport à la zone  de dessin.
    y: mouse.clientY - rect.top // position en Y de la souris - ditance depuis le haut de la fenêtre par rapport à la zone de dessin.
  };
}

var canvas = document.getElementById('test');
var ctx = canvas.getContext('2d');


var save = document.getElementById('saveImage');
ctx.lineWidth = 4;

var posInit;
var posEnd;
var des=false;

//crée un fond blanc dans le canvas, cette fonction DOIT rester au dessus du save
function fillBackground(){
  ctx.fillStyle = 'white';
  ctx.fillRect(0,0,700,700);
}
fillBackground();

//Enregister une image
save.onclick = function() {
  var img = document.createElement('a');
  img.href = canvas.toDataURL('image/jpeg', 1.0);
  img.download = ('dessine-moi.png');
  img.click();
}

//gere les actions de la souris
canvas.onmousedown = function draw(mouse) { //On commence le dessin
    posInit=getMousePos(canvas,mouse);
    des=true;
    sourceCanvas=canvas.toDataURL('image/jpeg', 1.0);  // load image from data url
};

canvas.onmouseup = function(mouse) { //on arrete le dessin
  if (des)
  {
    posEnd=getMousePos(canvas,mouse);

    // ctx.strokeRect(posInit.x, posInit.y, posEnd.x - posInit.x, posEnd.y - posInit.y);  //canvas du rectangle

    // ctx.beginPath();
    // ctx.ellipse(posInit.x, posInit.y, Math.abs(posEnd.x - posInit.x ) , Math.abs(posEnd.y - posInit.y), 0, 0, 2 * Math.PI);
    // ctx.stroke(); //canvas de l'ellipse(cerlce)

    ctx.beginPath();
    ctx.moveTo(posInit.x, posInit.y);
    ctx.lineTo(posEnd.x, posEnd.y);
    ctx.stroke();   //canvas de la ligne

    des=false;
    // console.log(sourceCanvas);

  }
};

canvas.onmousemove = function (mouse) {
  if (des)
  {
    var posEnd = getMousePos(canvas, mouse); // position (x,y) du crayon

    // ctx.beginPath();
    // ctx.ellipse(posInit.x, posInit.y, Math.abs(posEnd.x - posInit.x ) , Math.abs(posEnd.y - posInit.y), 0, 0, 2 * Math.PI);
    // ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(posInit.x, posInit.y);
    ctx.lineTo(posEnd.x, posEnd.y);
    ctx.stroke(); //canvas de la ligne

    drawDataURIOnCanvas(sourceCanvas);

  }
};

function drawDataURIOnCanvas(strDataURI) {  //fonction de prévisualisation
    "use strict";
    var img2 = new window.Image();
    img2.addEventListener("load", function () {
        canvas.getContext("2d").drawImage(img2, 0, 0,700,700);
    });
    img2.setAttribute("src", strDataURI);
}

fetch('https://github.com/Ekhynox/Dessine-moi-un-mouton/blob/Desmond/Test/wordsliste.json')
.then(function(response) {
  return console.log(response);
});

function readSingleFile(e) {
  console.log(e);

  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    // console.log(contents);
  };
  reader.readAsText(file);
}
// readSingleFile("wordlist.txt")

document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);
