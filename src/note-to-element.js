var createNote = require('./create-note');

module.exports = function noteToElement(card){
  return createNote(card.id,card.zIndex,card.content);
}
