import {DefaultTheme} from 'react-native-paper';
import {error, primary, secondary} from './colors';

export const themeOrange = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: primary,
    secondary: secondary,
    error: error,
  },
};
