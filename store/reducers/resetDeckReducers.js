import {ADD_DECK, RESET_DECK} from '../actions/actionTypes';

const resetDeck = (state = {}, action) => {
  switch (action.type) {
    case ADD_DECK:
      const {deck} = action;
      return {
        ...state,
        newDeckId: deck.id,
      };
    case RESET_DECK:
      return {
        ...state,
        newDeckId: null,
      };
    default:
      return state;
  }
};

export default resetDeck;
