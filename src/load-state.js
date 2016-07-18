const NOTES_APP_ID = 'notes',
      defaultState  = require('./default-state');

module.exports = function(){
  return localStorage.getItem(NOTES_APP_ID) ?
        JSON.parse(localStorage.getItem(NOTES_APP_ID)) : defaultState;
}
