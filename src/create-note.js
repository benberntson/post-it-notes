var innerNote   = require('./inner-note'),
    randomColor = require('./random-color');

module.exports = function createNote(id,zIndex,textContent,color){
  var note = document.createElement('div');
  note.innerHTML = innerNote(textContent || " ");
  note.classList.add('note');
  note.style.backgroundColor = color || randomColor();
  note.style.zIndex = zIndex;
  note.id = id;
  note.firstChild.addEventListener('click',function(){
    note.parentNode.removeChild(note);
  });
  return note;
}
