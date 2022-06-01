import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatTab from './screens/ChatTab';
import ExploreTab from './screens/ExploreTab';
import NotificationTab from './screens/NotificationTab';
import HomeTab from './screens/HomeTab';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeTab} />
    <Tab.Screen name="Chat" component={ChatTab} />
    <Tab.Screen name="Explore" component={ExploreTab} />
    <Tab.Screen name="Notifications" component={NotificationTab} />
  </Tab.Navigator>
  </NavigationContainer>
  );
}

