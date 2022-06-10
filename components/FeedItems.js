import {Text,View,Image, Dimensions} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Video } from 'expo-av';
import moment from 'moment';

const FeedItems = ({item}) => {
    const card_padding = 20;
    const { title, author, ups, created_utc, num_comments, selftext, selftext_html, subreddit, preview, url_overridden_by_dest } = item.data;
    
    const mp4 = preview?.images[0]?.variants?.mp4?.resolutions[0] ?? null;
   const thumbnail = preview?.images[0]?.source ?? null;
    const media_width = Dimensions.get('window').width - (2*card_padding);
    const media_height = thumbnail && (thumbnail.height/thumbnail.width) * media_width;
    // console.log(moment().format());
    return (
        <View style={{padding: card_padding, backgroundColor: '#fff', marginBottom: 10}}>
            <View style={{flexDirection:'row'}}>
                <View>
                    <Image
                        style={{width:30,height:30,borderRadius:15,marginRight:10}}
                        source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}/>
                </View>
                <View>
                    <Text>r/{subreddit}</Text>
                    <Text>{ author} <Text>{moment.unix(created_utc).fromNow()}</Text></Text>
               </View>
            </View>
           
            <View>
                <Text style={{fontSize:20,marginTop:10,marginBottom:10}}>{title}</Text>
                { thumbnail && <Image 
                    style={{
                        width: media_width,
                        height: media_height,
                        marginBottom: 10,
                        borderRadius: 5,
                    }}
                    source={{
                        uri: url_overridden_by_dest
                    }} />
                }
                { mp4 && <Video
                    style={{ width: '100%', height: 'auto'}}
                    source={{
                        uri: mp4.url,
                    }}
                    resizeMode="contain"
                    isLooping
                    useNativeControls
                    posterSource={{
                        uri: url_overridden_by_dest
                    }}
                    />
                } 
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Ionicons name="arrow-up-circle-outline" size={24} color="black" />
                    <Text style={{paddingHorizontal:10}}>{ups}</Text>
                    <Ionicons name="arrow-down-circle-outline" size={24} color="black" />
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Ionicons name="chatbox-outline" size={24} color="black" />
                    <Text style={{paddingHorizontal:10}}>{num_comments}</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Ionicons name="md-share-outline" size={24} color="black" />
                    <Text style={{paddingHorizontal:10}}>Share</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Ionicons name="ios-gift-outline" size={24} color="black" />
                   
                </View>
              

            </View>
        </View>
    )
}
export default FeedItems;