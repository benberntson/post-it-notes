module.exports = function maxZIndex(cards){
  return cards
    .map(card => card.zIndex)
    .sort((index0,index1) => index1 - index0)[0];
};
