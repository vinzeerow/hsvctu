import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry,Layout, Text } from '@ui-kitten/components';
import NavigationApp from './src/appNavigator';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as mapping } from './mapping.json';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider 
    {...eva} 
    customMapping={mapping}
    theme={{ ...eva.light}}>
      <NavigationApp />
    </ApplicationProvider>
  </>
);
// npm install -g expo-cli
// npx create-expo-app name_project
// expo install @ui-kitten/components @ui-kitten/eva-icons @eva-design/eva react-native-svg@^9.13.6
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/stack
// npm install @react-navigation/bottom-tabs
// npx expo install react-native-gesture-handler
// npx expo install react-native-svg
