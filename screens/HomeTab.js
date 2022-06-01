import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './HomeScreen';
import NewsScreen from './NewsScreen';
import PopularScreen from './PopularScreen';


const Tab = createMaterialTopTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator initialRouteName='HomeTab'>
      <Tab.Screen 
      options={{
          title: 'News'
      }}
      name="NewsTab" component={NewsScreen} />
      <Tab.Screen 
       options={{
        title: 'Home'
    }}
      name="HomeTab" component={HomeScreen} />
      <Tab.Screen 
       options={{
        title: 'Popular'
    }}
      name="PopularTab" component={PopularScreen} />
    </Tab.Navigator>
  );
}