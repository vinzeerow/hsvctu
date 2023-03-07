import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen/profile';
import EventScreen from './screens/EventScreen/event';
import NotificationScreen from './screens/NotificationScreen/notification';
// import HomeScreen from './screens/home';
import HomeNavigator from './screens/HomeScreen/homeNavigator'
import { View, StyleSheet } from 'react-native';
import { TopNavigationAction, BottomNavigation, BottomNavigationTab, Icon, Button, Divider, Layout, TopNavigation, Text } from '@ui-kitten/components';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
// import { useRoute } from '@react-navigation/native';
// const route = useRoute();
var Bottom
const HomeIcon = () => (
  // fill={state.index == 0 ? '#000' : '#fff'}
  // <Ionicons name="home-outline" size={24} color="white" />
  <Feather name="home" size={24} color="white" />
);
const BellIcon = (props) => (

  <Feather name="bell" size={24} color="white" />
);
const CalendarIcon = (props) => (
  <Feather name="calendar" size={24} color="white" />
);
const PersonIcon = (props) => (
  <Ionicons name="person-outline" size={24} color="white" />
);
const renderRightActions = () => (
  <TopNavigationAction icon={PersonIcon} />
);
// const BottomTab = createBottomTabNavigator();
const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (

  <BottomNavigation
    // appearance='noIndicator'
    activeTintColor={'#ccc'}
    indicatorStyle={{ backgroundColor: '#fff' }}
    style={{ backgroundColor: "#02598C", height:60 }}
    // inactiveTintColor={'red'}
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab icon={HomeIcon} title={evaProps => <Text style={styles.container}>Trang chủ</Text>} />
    <BottomNavigationTab icon={CalendarIcon} title={evaProps => <Text style={styles.container}>Sự kiện</Text>} />
    <BottomNavigationTab icon={BellIcon} title={evaProps => <Text style={styles.container}>Thông báo</Text>} />
    <BottomNavigationTab icon={PersonIcon} title={evaProps => <Text style={styles.container}>Cá nhân</Text>} />
  </BottomNavigation>

);
const BottomNavigator = () => {
  return (
    <Navigator
        tabBar={props => <BottomTabBar {...props} />}
        initialRouteName='HOME_NAVIGATOR'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
            height: 70
          },
          headerTintColor: '#02598C',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            
            
          },
        }}
      >
      <Screen name='HOME_NAVIGATOR' component={HomeNavigator} options={{ headerShown: false}} />
      <Screen name='EVENT' component={EventScreen} options={{headerTitle: "Sự kiện"}}/>
      <Screen name='NOTIFICATION' component={NotificationScreen} options={{headerTitle: "Thông báo"}}/>  
      <Screen name='PROFILE' component={ProfileScreen} options={{headerTitle: "Hồ sơ"}}/>
    </Navigator>
  )
};
export default Bottom = ({ navigation, state }) => {

  return (

    <View style={{ flex: 1 }}>
      {/* <TopNavigation
        alignment='center'
        title={state.routeNames[index]}
        // subtitle='Subtitle'
        // accessoryLeft={renderBackAction}
        accessoryRight={renderRightActions}
      /> */}
      <Divider />
      <BottomNavigator />
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02598C',
    color: "#fff"
  },
  icon: {
    color: '#000',
  }
});

