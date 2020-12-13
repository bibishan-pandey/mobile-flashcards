import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {primaryDark, white} from '../utils/colors';

import NavTab from './NavTab';
import Deck from '../screens/Deck';

const Stack = createStackNavigator();

const stackScreenOptions = {
  headerTitle: '',
  headerTintColor: white,
  headerStyle: {
    backgroundColor: primaryDark,
  },
};

const NavStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Mobile Flashcards"
      component={NavTab}
      options={stackScreenOptions}
    />
    <Stack.Screen
      name="Add New Card"
      component={''}
      options={stackScreenOptions}
    />
    <Stack.Screen name="Deck" component={Deck} options={stackScreenOptions} />
    <Stack.Screen name="Quiz" component={''} options={stackScreenOptions} />
  </Stack.Navigator>
);

export default NavStack;
