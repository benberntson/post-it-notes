var makeDragable  = require('./make-dragable'),
    loadState     = require('./load-state'),
    randomPos     = require('./random-pos'),
    noteToElement = require('./note-to-element'),
    initCreateBtn = require('./init-create-btn');

window.addEventListener('load',function(){
  var draggableContent = document.querySelectorAll('.note');
  Array.prototype.forEach.call(draggableContent,makeDragable);

  window.state = loadState();
  window.state.notes
    .map(noteToElement)
    .map(makeDragable)
    .map(randomPos)
    .forEach(noteElement => document.body.appendChild(noteElement));

  var createNoteButton = document.getElementById('createNoteButton');
  initCreateBtn(createNoteButton);

  console.log('app loaded');
})
