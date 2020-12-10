import {addCardToDeck, addDeck, getDecks, removeDeck} from './actionCreators';

/**
 * HandleGetDecks async action creator that dispatches
 * getDecks action creator with decks object
 * @returns {function(*)}
 */
export const handleGetDecks = () => {
  return (dispatch) => {
    // TODO: implement getDecksAPI
    // return getDecksAPI().then((decks) => {
    //   dispatch(getDecks(decks));
    // });
  };
};

/**
 * HandleAddDeck async action creator that dispatches
 * addDeck action creator with deck object
 * @param deckTitle, takes in title as a parameter
 * @returns {function(*)}
 */
export const handleAddDeck = (deckTitle) => {
  return (dispatch) => {
    // TODO: implement addDeckAPI
    // return addDeckAPI(deckTitle).then((deck) => {
    //   dispatch(addDeck(deck));
    // });
  };
};

/**
 * HandleAddCardToDeck async action creator that dispatches
 * addCardToDeck action creator with card object along with
 * the deckId to identify where the card needs to be added
 * @param deckId, takes in the id of the deck
 * @param card, takes in the card object
 * @returns {function(*)}
 */
export const handleAddCardToDeck = (deckId, card) => {
  return (dispatch) => {
    // TODO: implement addCardToDeckAPI
    // return addCardToDeckAPI(deckId, card).then(() => {
    //   dispatch(addCardToDeck(deckId, card));
    // });
  };
};

/**
 * HandleRemoveDeck async action creator that dispatches
 * removeDeck action creator with deckId to identify which
 * deck needs to be removed
 * @param deckId, takes in deckId as a parameter
 * @returns {function(*)}
 */
export const handleRemoveDeck = (deckId) => {
  return (dispatch) => {
    // TODO: implement removeDeckAPI
    // return removeDeckAPI(deckId).then(() => {
    //   dispatch(removeDeck(deckId));
    // });
  };
};
