import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TopNavigationAction, BottomNavigation, BottomNavigationTab, Divider, Text } from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './screens/ProfileScreen/profile';
import EventScreen from './screens/EventScreen/event';
import NotificationScreen from './screens/NotificationScreen/notification';
import HomeScreen from './screens/HomeScreen/home';
import EnrollScreen from './screens/HomeScreen/enroll';
import FiveGoodScreen from './screens/HomeScreen/fiveGood';
import OpinionScreen from './screens/HomeScreen/opinion';
import GameScreen from './screens/HomeScreen/game';
import CalendarScreen from './screens/HomeScreen/calendarEvent';
import ArchivementScreen from './screens/HomeScreen/archivement';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';

var Bottom
const HomeIcon = () => (
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
const Tab = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (

    <BottomNavigation
        activeTintColor={'#ccc'}
        indicatorStyle={{ backgroundColor: '#fff' }}
        style={{ backgroundColor: "#02598C", height: 60 }}
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
        <Tab.Navigator
            tabBar={props => <BottomTabBar {...props} />}
            initialRouteName='HOME'
            screenOptions={{
                headerStyle: { backgroundColor: '#fff', height: 70 },
                headerTintColor: '#02598C',
                headerTitleAlign: 'center',
                headerTitleStyle: { fontWeight: 'bold', },
            }}>

            <Tab.Screen name="HOME" component={HomeScreen} options={{ headerTitle: "Trang chủ", headerLeft: false }} />
            <Tab.Screen name='EVENT' component={EventScreen} options={{ headerTitle: "Sự kiện" }} />
            <Tab.Screen name='NOTIFICATION' component={NotificationScreen} options={{ headerTitle: "Thông báo" }} />
            <Tab.Screen name='PROFILE' component={ProfileScreen} options={{ headerTitle: "Hồ sơ" }} />
        </Tab.Navigator>
    )
};
export default Bottom = () => {
    return (
        <View style={{ flex: 1 }}>
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

