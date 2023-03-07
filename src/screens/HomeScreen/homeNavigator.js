import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home';
import EnrollScreen from './enroll';
import FiveGoodScreen from './fiveGood';
import OpinionScreen from './opinion';
import GameScreen from './game';
import CalendarScreen from './calendarEvent';
import ArchivementScreen from './archivement'
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
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
      <Stack.Screen name="HOME" component={HomeScreen} options={{ headerTitle: "Trang chủ", headerLeft: false}} />
      <Stack.Screen name="ENROLL" component={EnrollScreen} options={{ headerTitle: "Đăng ký kết nạp" }} />
      <Stack.Screen name="FIVE_GOOD" component={FiveGoodScreen} options={{ headerTitle: "Sinh viên 5 tốt" }}/>
      <Stack.Screen name="ARCHIVEMENT" component={ArchivementScreen} options={{ headerTitle: "Khen thưởng, kỷ luật" }}/>
      <Stack.Screen name="CALENDAR" component={CalendarScreen} options={{ headerTitle: "Lịch sự kiện" }}/>
      <Stack.Screen name="OPINION" component={OpinionScreen} options={{ headerTitle: "Đóng góp ý kiến" }}/>
      <Stack.Screen name="GAME" component={GameScreen} options={{ headerTitle: "Trò chơi lớn" }}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <MyStack />
  );
}