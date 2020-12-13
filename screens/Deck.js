import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {Button as PaperButton, Colors} from 'react-native-paper';
import {TextHeader, Paragraph, Button} from '../components';

import {removeDeck} from '../store/actions/actionCreators';
import Loading from '../components/Loading';

class Deck extends React.Component {
  render() {
    const {deck} = this.props;

    if (!deck) {
      return <Loading />;
    }

    return (
      <View style={styles.container}>
        <TextHeader style={styles.deckTitle}>{deck.title}</TextHeader>
        <Paragraph style={styles.deckCardCount}>
          {deck.questions.length} cards
        </Paragraph>
        <Button
          mode="contained"
          disabled={deck.questions.length <= 0}
          onPress={() => this.onStartQuizPress(deck.id)}>
          Start Quiz
        </Button>

        <Button mode="outlined" onPress={() => this.onAddCardPress(deck.id)}>
          Add New Card
        </Button>

        <PaperButton
          labelStyle={styles.buttonRemoveDeckLabel}
          mode="text"
          onPress={() => this.onRemoveDeckPress(deck.id)}>
          Delete Deck
        </PaperButton>
      </View>
    );
  }
}

function mapStateToProps({decks}, props) {
  const {deckId} = props.route.params;
  return {
    deck: decks[deckId],
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRemoveDeckLabel: {
    color: Colors.red500,
    textTransform: 'none',
  },
  deckTitle: {
    fontSize: 30,
  },
  deckCardCount: {
    fontSize: 15,
  },
});

export default connect(mapStateToProps, {removeDeck})(Deck);
