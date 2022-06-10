import * as React from 'react';
import { Text, View, TouchableHighlight, TextInput, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ChatScreen from '../screens/ChatScreen';
import NotificationScreen from '../screens/NotificationScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const LeftAction = ({navigation})=> {
    
    return (
        <TouchableHighlight style={{padding: 10}} onPress={()=> navigation.openDrawer()}>
            <Ionicons name="ios-menu-outline" size={24} color="black" />
        </TouchableHighlight>
    )
}
const RightAction =({navigation})=> {
    return (
        <TouchableHighlight style={{padding: 10}} onPress={()=> navigation.getParent().openDrawer()}>
            <Ionicons name="person-circle-outline" size={24} color="black" />
        </TouchableHighlight>
    )
}
const SearchBar = () => {
    const [query, setQuery] = React.useState('');
    const width = Dimensions.get('window').width * 0.6
    return (
        <View style={{width: width}}>
            <TextInput placeholder='Search' style={{ paddingVertical: 5, paddingHorizontal:10, backgroundColor: '#CACACA', width: '100%', borderRadius: 8, fontSize: 16}} onChangeText={setQuery} value={query} />
        </View>
    )
}
export default function BottomTab (props) {
  return (
         <Tab.Navigator screenOptions={{
                headerLeft: ()=> <LeftAction {...props} /> ,
                headerRight: ()=> <RightAction {...props} />,
             }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerTitle: SearchBar,
            }}/>
            <Tab.Screen name="Explore" component={ExploreScreen} options={{
                headerTitle: SearchBar,
            }} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Notification" component={NotificationScreen} />
        </Tab.Navigator> 
  );
}