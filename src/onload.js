var makeDragable  = require('./make-dragable'),
    loadState     = require('./load-state'),
    randomPos     = require('./random-pos'),
    noteToElement = require('./note-to-element');

window.addEventListener('load',function(){
  var draggableContent = document.querySelectorAll('.note');
  Array.prototype.forEach.call(draggableContent,makeDragable);

  window.state = loadState();
  window.state.notes.map(note => {
    return noteToElement(note);
  }).map(makeDragable)
  .map(randomPos)
  .forEach(noteElement => document.body.appendChild(noteElement));


  console.log('app loaded');
})
