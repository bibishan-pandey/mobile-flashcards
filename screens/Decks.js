import React from 'react';
import {
  View,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Avatar, Card, ActivityIndicator} from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {connect} from 'react-redux';

import {primaryDark, secondaryLight, white} from '../utils/colors';
import {getDecksFromStorage, saveAllDecksInStorage} from '../utils/api';
import {setupDummyData} from '../utils/helpers';
import {getDecks} from '../store/actions/actionCreators';

class Decks extends React.Component {
  state = {
    ready: false,
  };

  async componentDidMount() {
    // await removeAllDecksFromStorage();
    const {dispatch} = this.props;
    let decks = await getDecksFromStorage();
    try {
      if (decks === null) {
        await saveAllDecksInStorage(setupDummyData());
        decks = await getDecksFromStorage();
        dispatch(getDecks(decks));
      } else {
        dispatch(getDecks(decks));
      }
      this.setState({ready: true});
    } catch (error) {
      this.setState({ready: false});
      console.warn('Error occurred while getting decks: ', error);
    }
  }

  onDeckCardPress(deck) {
    this.props.navigation.navigate('Deck', {
      deckId: deck.id,
      title: deck.title,
      navigation: this.props.navigation,
    });
  }

  render() {
    const {decks} = this.props;
    if (!this.state.ready) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator color={primaryDark} />
        </View>
      );
    }
    const renderIcon =
      Platform.OS === 'ios' ? (
        <Ionicons
          name={'ios-folder-open-outline'}
          color={primaryDark}
          size={24}
        />
      ) : (
        <MaterialCommunityIcons
          name={'folder-outline'}
          color={primaryDark}
          size={24}
        />
      );
    return (
      <ScrollView>
        {decks &&
          Object.keys(decks).length !== 0 &&
          Object.keys(decks).map((id) => (
            <TouchableOpacity
              key={id}
              style={styles.card}
              onPress={() => this.onDeckCardPress(decks[id])}>
              <Card.Title
                title={decks[id].title}
                left={(props) => renderIcon}
                right={(props) => (
                  <Avatar.Text
                    {...props}
                    size={24}
                    style={styles.avatarText}
                    label={decks[id].questions.length}
                  />
                )}
              />
            </TouchableOpacity>
          ))}
      </ScrollView>
    );
  }
}

function mapStateToProps({decks}) {
  return {
    decks,
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  card: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    marginBottom: 10,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  cardText: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
    color: white,
  },
  avatarText: {
    marginRight: 16,
    backgroundColor: secondaryLight,
  },
});

export default connect(mapStateToProps)(Decks);
