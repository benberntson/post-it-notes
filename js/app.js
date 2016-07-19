(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./inner-note":5,"./random-color":12}],2:[function(require,module,exports){
const PIZZA_NOTE = {
  content: "Order pizza\nwith:\nolives\nonions\nanchovies\n\nno:pickles",
  id: '1'
};

const PHONE_NUMBER_NOTE = {
  content: "Call Ted\nNumber: 435-555-5555",
  id: '2'
};

const DEFAULT_STATE = {
  notes : [PIZZA_NOTE,PHONE_NUMBER_NOTE],
  maxId: 2,
  topZIndex: 3
};


module.exports = DEFAULT_STATE;

},{}],3:[function(require,module,exports){
module.exports = function(state){
  state = state || window.state;
  var currentZIndex = state.topZIndex + 1;
  state.topZIndex = currentZIndex;
  return currentZIndex;
}

},{}],4:[function(require,module,exports){
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

},{"./create-note":1,"./get-max-z-index":3,"./make-dragable":8,"./random-pos":13}],5:[function(require,module,exports){
var noteContent = require('./note-content');

module.exports = function(noteText){
  return '<div class="terminator">X</div>' + noteContent(noteText);
};

},{"./note-content":9}],6:[function(require,module,exports){
module.exports = function insertLineBreaks(text){
  return text.split('\n').join('<br>');
};

},{}],7:[function(require,module,exports){
const NOTES_APP_ID = 'notes',
      defaultState  = require('./default-state');

module.exports = function(){
  return localStorage.getItem(NOTES_APP_ID) ?
        JSON.parse(localStorage.getItem(NOTES_APP_ID)) : defaultState;
}

},{"./default-state":2}],8:[function(require,module,exports){
var getMaxZIndex = require('./get-max-z-index');

module.exports = function makeDragable(element){
  element.addEventListener('mousedown',function(e){
    element.style.zIndex = '' + getMaxZIndex();
    var boundingRect = element.getBoundingClientRect(),
        originalX    = boundingRect.left - e.clientX,
        originalY    = boundingRect.top  - e.clientY;
    document.onmousemove = function(e){
      element.style.left = originalX + e.clientX + 'px';
      element.style.top  = originalY + e.clientY + 'px';
    };
  });
  element.addEventListener('mouseup',function(){
    document.onmousemove = null;
  });
  return element;
};

},{"./get-max-z-index":3}],9:[function(require,module,exports){
var insertLineBreaks = require('./insert-line-breaks');
module.exports = function(noteContent){
  return ['<div class="note-content" contenteditable="true">',
          insertLineBreaks(noteContent),
          '</div>'].join('');
}

},{"./insert-line-breaks":6}],10:[function(require,module,exports){
var createNote = require('./create-note');

module.exports = function noteToElement(card){
  return createNote(card.id,card.zIndex,card.content);
}

},{"./create-note":1}],11:[function(require,module,exports){
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

},{"./init-create-btn":4,"./load-state":7,"./make-dragable":8,"./note-to-element":10,"./random-pos":13}],12:[function(require,module,exports){
const LIGHT_PINK   = "#ffe9ec",
      LIGHT_BLUE   = "#e9fffc",
      LIGHT_ORANGE = "#fff4b6",
      LIGHT_GREEN  = "#e6ffb7",
      LIGHT_YELLOW = "#feffb7",
      COLORS       = [
        LIGHT_PINK,
        LIGHT_BLUE,
        LIGHT_ORANGE,
        LIGHT_GREEN,
        LIGHT_YELLOW
      ];

module.exports = function(){
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};

},{}],13:[function(require,module,exports){
const OFFSET_VAL = 750;

module.exports = function randomPos(element){
  element.style.top  = Math.floor(Math.random() * OFFSET_VAL) + 'px';
  element.style.left = Math.floor(Math.random() * OFFSET_VAL) + 'px';
  return element;
}

},{}]},{},[11]);
