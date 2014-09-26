var Mouse;

module.exports = Mouse = {
  getRel: function(e) {
    var mouseX, mouseY, rect, target;
    mouseX = e.offsetX;
    mouseY = e.offsetY;
    if (mouseX == null) {
      rect = target.getBoundingClientRect();
      target = e.target || e.srcElement;
      if (mouseX == null) {
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
      }
      if (mouseX == null) {
        mouseX = e.pageX - target.offsetLeft;
        mouseY = e.pageY - target.offsetTop;
      }
      if (mouseX == null) {
        console.log(e, "no mouse event defined. your browser sucks");
        return;
      }
    }
    return [mouseX, mouseY];
  },
  getAbs: function(e) {
    var mouseX, mouseY;
    mouseX = e.pageX;
    mouseY = e.pageY;
    if (mouseX == null) {
      mouseX = e.layerX;
      mouseY = e.layerY;
    }
    if (mouseX == null) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    if (mouseX == null) {
      mouseX = e.x;
      mouseY = e.y;
    }
    return [mouseX, mouseY];
  },
  getWheelDelta: function(e) {
    var delta, dir;
    delta = [e.deltaX, e.deltaY];
    if (delta[0] == null) {
      dir = Math.floor(e.detail / 3);
      delta = [0, e.mozMovementX * dir];
    }
    return delta;
  },
  // legacy stuff
  getMouseCoordsScreen: Mouse.getAbs,
  getMouseCoords: Mouse.getRel,
};
