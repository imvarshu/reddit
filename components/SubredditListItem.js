import { View, Text, TouchableOpacity, Image } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

const SubredditListItem = (props) => {
     //console.log(props);

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 10}}>
            <Image source={{
                uri: props.pic,
                width: 24,
                height: 24,
            }}
            style={{marginRight: 10, borderRadius: 12}} />
            <Text>r/{ props.subreddit }</Text>
            { props.star && <Ionicons style={{ marginLeft: 'auto'}} name="star-outline" size={20} color="black" /> }
        </View>
    )
}
export default SubredditListItem;