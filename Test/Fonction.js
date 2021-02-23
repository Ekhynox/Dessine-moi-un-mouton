function getMousePos(canvas, mouse) {
  var rect = canvas.getBoundingClientRect(); // retourne sa position par rapport à la zone d'affichage.
  return {
    x: mouse.clientX - rect.left, // position en X de la souris - ditance depuis la droite de la fenêtre par rapport à la zone  de dessin.
    y: mouse.clientY - rect.top // position en Y de la souris - ditance depuis le haut de la fenêtre par rapport à la zone de dessin.
  };
}

var canvas = document.getElementById('test');

var posInit;
var posEnd;

canvas.onmousedown = function draw(mouse) { //On commence le dessin
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    posInit=getMousePos(canvas,mouse);
  }
};


canvas.onmouseup = function(mouse) { //on arrete le dessin
  posEnd=getMousePos(canvas,mouse);
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.strokeRect(posInit.x, posInit.y, posEnd.x - posInit.x, posEnd.y - posInit.y);
  }
};
