var createNote = require('./create-note'),
    getMaxZIndex = require('./get-max-z-index'),
    makeDragable = require('./make-dragable'),
    randomPos = require('./random-pos');

module.exports = function initCreateBtn(element){
  element.addEventListener('click',function(){
    var note = createNote(window.state.maxId,getMaxZIndex());
    note = makeDragable(note);
    note = randomPos(note);
    document.body.appendChild(note);
  });
  return element;
}
