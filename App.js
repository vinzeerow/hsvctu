import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry,Layout, Text } from '@ui-kitten/components';
// import 'react-native-gesture-handler';
import NavigationApp from './src/navigator';
// import { registerRootComponent } from 'expo';
// import { AppRegistry, Platform } from "react-native";
// import { name as appName } from './app.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
// const HomeScreen = () => (
//   <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text category='h1'>HOME</Text>
//   </Layout>
// );

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light}}>
      <NavigationApp />
    </ApplicationProvider>
  </>
);
{/* <IconRegistry icons={EvaIconsPack} />
if (Platform.OS == "android") {
  registerRootComponent(App);
} else {
  AppRegistry.registerComponent('main', () => App);
} */}
// npm install -g expo-cli
// npx create-expo-app name_project
// expo install @ui-kitten/components @ui-kitten/eva-icons @eva-design/eva react-native-svg@^9.13.6
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/stack
// npm install @react-navigation/bottom-tabs
// npx expo install react-native-gesture-handler
// npx expo install react-native-svg
