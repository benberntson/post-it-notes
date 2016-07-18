module.exports = function draggable(element){
  element.addEventListener('mousedown',function(e){
    var boundingRect = element.getBoundingClientRect(),
        originalX    = boundingRect.left - e.clientX,
        originalY    = boundingRect.top - e.clientY;
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
