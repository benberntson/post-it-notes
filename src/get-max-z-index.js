module.exports = function(state){
  state = state || window.state;
  var currentZIndex = state.topZIndex + 1;
  state.topZIndex = currentZIndex;
  return currentZIndex;
}
