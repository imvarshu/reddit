import {View, Text,Image} from 'react-native';
const FeedItem = () => {
    return (
        <View style={{padding:20, backgroundColor:'#fff'}}>
            <View style={{flexDirection:'row', justifyContent:'flex-start',marginBottom:10}}>
                <Image 
                style={{width:30, height:30,borderRadius:15,marginRight:10}}
                source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}/>
                <View>
                    <Text
                    style={{}}
                    >r/jokes</Text>
                    <Text>u/almostsane67</Text>
                </View>
            </View>
            <View> 
                <Text style={{fontSize:16,fontWeight:'600'}}>Lorem spum blablabla louytrvn ghjmnbb</Text>
            </View>
            <View></View>
        </View>
    )
}

export default FeedItem;