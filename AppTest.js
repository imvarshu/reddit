import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from './navigations/BottomTab';
const LeftDrawer = createDrawerNavigator();
const RightDrawer = createDrawerNavigator();

const LeftDrawerScreen = () => {
    return (
        <LeftDrawer.Navigator screenOptions={{ drawerPosition: 'left', headerShown: false }}>
            <LeftDrawer.Screen name="BottomTab" component={BottomTab} />
        </LeftDrawer.Navigator>
    )
}

export default function App() {
  return (
    <NavigationContainer>
        <RightDrawer.Navigator screenOptions={{ drawerPosition: 'right',headerShown: false }}>
            <RightDrawer.Screen name="LeftDrawerScreen" component={LeftDrawerScreen} />
        </RightDrawer.Navigator>
    </NavigationContainer>
  );
}