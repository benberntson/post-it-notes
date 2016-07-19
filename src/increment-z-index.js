var getMaxZIndex = require('./get-max-z-index');

module.exports = function incrementZIndex(element){
  element.style.zIndex = '' + getMaxZIndex();
  console.log("hello!" + typeof element.style.zIndex);
  return element;
}
