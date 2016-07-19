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
