var getMaxZIndex = require('./get-max-z-index');

module.exports = function makeDragable(element){
  element.addEventListener('mousedown',function(e){
    element.style.zIndex = '' + getMaxZIndex();
    var boundingRect = element.getBoundingClientRect(),
        originalX    = boundingRect.left - e.clientX,
        originalY    = boundingRect.top  - e.clientY;
    document.onmousemove = function(e){
      element.style.left = originalX + e.clientX + 'px';
      element.style.top  = originalY + e.clientY + 'px';
    };
  });
  element.addEventListener('mouseup',function(){
    document.onmousemove = null;
  });
  return element;
};
