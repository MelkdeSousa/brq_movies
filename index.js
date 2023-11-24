/**
 * @format
 */

import { AppRegistry, StatusBar } from 'react-native';
import { name as appName } from './app.json';
import { App } from './src/App';
import { theme } from './src/styles/theme';

StatusBar.setBackgroundColor(theme.colors.neutral, true);
StatusBar.setBarStyle('light-content');

AppRegistry.registerComponent(appName, () => App);
