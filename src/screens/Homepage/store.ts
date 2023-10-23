import { createStore } from 'redux';

// This is a simple reducer, just for example
const reducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;