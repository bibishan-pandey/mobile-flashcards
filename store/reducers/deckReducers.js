import {
  ADD_CARD_TO_DECK,
  ADD_DECK,
  GET_DECKS,
  REMOVE_DECK,
} from '../actions/actionTypes';

const decks = (state = {}, action) => {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      const {deck} = action;
      return {
        ...state,
        [deck.id]: deck,
      };
    case ADD_CARD_TO_DECK:
      const {deckId, card} = action;
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          questions: state[deckId].questions.concat([card]),
        },
      };
    case REMOVE_DECK:
      delete state[action.deckId];
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default decks;
