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

//crée un fond blanc
canvas.onload = function (){
  ctx.fillStyle("white");
  ctx.fillRect(0,0,700,700);
}

//Enregister une image
save.onclick = function() {
  var img = document.createElement('a');
  img.href = canvas.toDataURL('image/jpeg', 1.0);
  img.download = ('dessine-moi.png');
  img.click();
}

// load image from data url
var sourceCanvas;
// function loadCanvas() {
//   console.log("load data");
//   var dd=new Image;
//   dd.src=sourceCanvas;
//   ctx.drawImage(dd, 0,0,700,700);
// }



//gere les actions de la souris
canvas.onmousedown = function draw(mouse) { //On commence le dessin
    posInit=getMousePos(canvas,mouse);
    des=true;

    sourceCanvas=canvas.toDataURL('image/jpeg', 1.0);  // load image from data url
    // sourceCanvas='file:///home/kevin/T%C3%A9l%C3%A9chargements/cover.jpg';

};

canvas.onmouseup = function(mouse) { //on arrete le dessin
  if (des)
  {
    // drawDataURIOnCanvas(sourceCanvas);

    posEnd=getMousePos(canvas,mouse);
    ctx.strokeRect(posInit.x, posInit.y, posEnd.x - posInit.x, posEnd.y - posInit.y);
    des=false;
  }
};

canvas.onmousemove = function (mouse) {
  if (des)
  {
    var posEnd = getMousePos(canvas, mouse); // position (x,y) du crayon
    // ctx.clearRect(posInit.x, posInit.y, posEnd.x - posInit.x, posEnd.y - posInit.y);
    ctx.strokeRect(posInit.x, posInit.y, posEnd.x - posInit.x, posEnd.y - posInit.y);
    // loadCanvas(); // load image from data url
    // drawDataURIOnCanvas(sourceCanvas);

  }
};



function drawDataURIOnCanvas(strDataURI) {
    "use strict";
    var img2 = new window.Image();
    img2.addEventListener("load", function () {
        canvas.getContext("2d").drawImage(img2, 0, 0,700,700);
    });
    img2.setAttribute("src", strDataURI);
}
