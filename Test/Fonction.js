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
  img.href = canvas.toDataURL("image/jpg").replace('png','jpg');
  img.download = ('dessine-moi.jpg');
  img.click();
}



//gere les actions de la souris
canvas.onmousedown = function draw(mouse) { //On commence le dessin
    posInit=getMousePos(canvas,mouse);
    des=true;
};


canvas.onmouseup = function(mouse) { //on arrete le dessin
  if (des)
  {
    posEnd=getMousePos(canvas,mouse);
    ctx.strokeRect(posInit.x, posInit.y, posEnd.x - posInit.x, posEnd.y - posInit.y);
    des=false;
  }
};

canvas.onmousemove = function (mouse) {
  if (des)
  {
    var posEnd = getMousePos(canvas, mouse); // position (x,y) du crayon
    ctx.clearRect(posInit.x, posInit.y, posEnd.x - posInit.x, posEnd.y - posInit.y);
    ctx.strokeRect(posInit.x, posInit.y, posEnd.x - posInit.x, posEnd.y - posInit.y)
  }
};


async function downloadCanvas(el) //Fonction de download du canvas en jpg
{
  const imageURI = canvas.toDataURL("image/jpg");
  el.href = imageURI;
};
