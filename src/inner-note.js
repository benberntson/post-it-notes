var noteContent = require('./note-content');

module.exports = function(noteText){
  return '<div class="terminator">X</div>' + noteContent(noteText);
};
