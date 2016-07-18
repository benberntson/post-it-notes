var insertLineBreaks = require('./insert-line-breaks');
module.exports = function(noteContent){
  return ['<div class="note-content" contenteditable="true">',
          insertLineBreaks(noteContent),
          '</div>'].join('');
}
