import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeTab from './HomeTab';
import NewsTab from './NewsTab';
import PopulatTab from './PopularTab';

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeTab} />
      <Tab.Screen name="News" component={NewsTab} />
      <Tab.Screen name="Popular" component={PopulatTab} />
    </Tab.Navigator>
  );
}