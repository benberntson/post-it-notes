const PIZZA_NOTE = {
  content: "Order pizza\nwith:\nolives\nonions\nanchovies\n\nno:pickles",
  zIndex: 1,
  id: '1'
};

const PHONE_NUMBER_NOTE = {
  content: "Call Ted\nNumber: 435-555-5555",
  zIndex: 2,
  id: '2'
};

const DEFAULT_STATE = {
  notes : [PIZZA_NOTE,PHONE_NUMBER_NOTE],
  maxId: 2
};


module.exports = DEFAULT_STATE;
