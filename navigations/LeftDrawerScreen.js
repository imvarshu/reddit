import {View, Text} from 'react-native';
import { 
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import BottomTab from './BottomTab';
import SubredditListItem from '../components/SubredditListItem';
import { recentlyVisited, yourCommunities } from '../data';

const LeftDrawer = createDrawerNavigator();

const LeftDrawerContent = (props) =>{
    return(
        <DrawerContentScrollView {...props}>
            <View style={{ padding: 20,}}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                     }}>
                    <Text style={{fontWeight: '600'}}>Recentlly Visited</Text>
                    <Text>See All</Text>
                </View>
                <View>
                    {
                        recentlyVisited.map((item, index) =>
                            <SubredditListItem {...item} key={index} />
                        )
                    }
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderTopWidth: 1,
                    borderTopColor: '#CACACA',
                    paddingVertical: 10,
                    marginTop: 10,
                }}>
                    <Text style={{fontWeight: '600'}}>Your Communities</Text>
                    <Ionicons name="chevron-down" size={20} color="black" />
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingVertical: 10,
                }}>
                    <Ionicons  style={{ marginRight:10}} name="add" size={20} color="black" />
                    <Text>Create a community</Text>
                </View>
                <View>
                    {
                        yourCommunities.map((item, index) =>
                            <SubredditListItem {...item} key={index} />
                        )
                    }
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderTopWidth: 1,
                    borderTopColor: '#CACACA',
                    paddingVertical: 10,
                    marginTop: 10,
                }}>
                   <Ionicons  style={{ marginRight:10}} name="ios-stats-chart-outline" size={20} color="black" />
                    <Text>All</Text>
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const LeftDrawerScreen = () => {
    return (
        <LeftDrawer.Navigator 
            drawerContent={(props) => <LeftDrawerContent {...props} />}
            screenOptions={{drawerPosition: 'left', headerShown: false}}>
            <LeftDrawer.Screen name="BottomTab" component={BottomTab} />
        </LeftDrawer.Navigator>
    )
}
export default LeftDrawerScreen;