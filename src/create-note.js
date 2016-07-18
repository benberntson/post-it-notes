var noteContent = require('./note-content');

module.exports = function(textContent,color){
  var note = document.createElement('div');
  note.innerHTML = noteContent(textContent || " ");
  note.backgroundColor = color || "#ffff94";
}
