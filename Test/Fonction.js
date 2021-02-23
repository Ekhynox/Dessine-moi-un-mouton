function getMousePos(canvas, mouse) {
  var rect = canvas.getBoundingClientRect(); // retourne sa position par rapport à la zone d'affichage.
  return {
    x: mouse.clientX - rect.left, // position en X de la souris - ditance depuis la droite de la fenêtre par rapport à la zone  de dessin.
    y: mouse.clientY - rect.top // position en Y de la souris - ditance depuis le haut de la fenêtre par rapport à la zone de dessin.
  };
}

var canvas = document.getElementById('test');

canvas.onmousedown = function draw(mouse) {
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var pos=getMousePos(canvas,mouse);

    ctx.strokeRect(pos.x, pos.y, 200, 200);
  }
};
