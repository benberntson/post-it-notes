var draggable = require('./draggable');

window.addEventListener('load',function(){
  var draggableContent = document.querySelectorAll('.note');
  Array.prototype.forEach.call(draggableContent,draggable);
  console.log('app loaded');
})
