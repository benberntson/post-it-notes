const OFFSET_VAL = 750;

module.exports = function randomPos(element){
  element.style.top  = Math.floor(Math.random() * OFFSET_VAL) + 'px';
  element.style.left = Math.floor(Math.random() * OFFSET_VAL) + 'px';
  return element;
}
