const NOTES_APP_ID = 'notes';

module.exports = function(state){
  localStorage.setItem(NOTES_APP_ID,JSON.stringify(state));
}
