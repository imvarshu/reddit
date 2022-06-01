import { useState } from 'react';
import { FlatList } from "react-native";
import FeedItem from './FeedItem';


const Feeds = () => {
    const [posts, setPosts] = useState([{id:1}]);
    return (
        <FlatList data={posts} renderItem={FeedItem} keyExtractor={item => item.id} />
    )
}

export default Feeds;