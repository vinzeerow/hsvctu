import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './tabNavigator';
// import StackNavigator from './stackNavigator';
import LoginScreen from './screens/SignInScreen/sign-in';
import HomeScreen from './screens/HomeScreen/home';
import EnrollScreen from './screens/HomeScreen/enroll';
import FiveGoodScreen from './screens/HomeScreen/fiveGood';
import OpinionScreen from './screens/HomeScreen/opinion';
import GameScreen from './screens/HomeScreen/game';
import CalendarScreen from './screens/HomeScreen/calendarEvent';
import ArchivementScreen from './screens/HomeScreen/archivement';
var NavigationApp
const RootStack = createStackNavigator();

export default NavigationApp = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName='LOGIN'
                screenOptions={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#fff', height: 70 },
                    headerTintColor: '#02598C',
                    headerTitleAlign: 'center',
                    headerTitleStyle: { fontWeight: 'bold' },
                }}>
                <RootStack.Screen name="LOGIN" component={LoginScreen} options={{ headerShown: false }} />
                <RootStack.Screen name="HOME" component={HomeScreen} options={{ headerTitle: "Trang chủ", headerLeft: false, }} />
                <RootStack.Screen name="ENROLL" component={EnrollScreen} options={{ headerTitle: "Đăng ký kết nạp", }} />
                <RootStack.Screen name="FIVE_GOOD" component={FiveGoodScreen} options={{ headerTitle: "Sinh viên 5 tốt" }} />
                <RootStack.Screen name="ARCHIVEMENT" component={ArchivementScreen} options={{ headerTitle: "Khen thưởng, kỷ luật" }} />
                <RootStack.Screen name="CALENDAR" component={CalendarScreen} options={{ headerTitle: "Lịch sự kiện" }} />
                <RootStack.Screen name="OPINION" component={OpinionScreen} options={{ headerTitle: "Đóng góp ý kiến" }} />
                <RootStack.Screen name="GAME" component={GameScreen} options={{ headerTitle: "Trò chơi lớn" }} />
                <RootStack.Screen name="TAB" component={TabNavigator} options={{ headerShown: false }} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
};