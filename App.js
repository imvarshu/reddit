import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LeftDrawerScreen from './navigations/LeftDrawerScreen';
const RightDrawer = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer>
        <RightDrawer.Navigator screenOptions={{drawerPosition: 'right', headerShown: false}}>
             <RightDrawer.Screen name="LeftDrawerScreen" component={LeftDrawerScreen} />
        </RightDrawer.Navigator>
    </NavigationContainer>
  );
}

export default App;