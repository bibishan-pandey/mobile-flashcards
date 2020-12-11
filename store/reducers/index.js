import {combineReducers} from 'redux';
import decks from './deckReducers';
import resetDeck from './resetDeckReducers';

export default combineReducers({
  decks,
  resetDeck,
});
