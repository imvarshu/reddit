import { useState,useEffect } from 'react';
import { FlatList } from 'react-native';
import FeedItems from './FeedItems';

const Feeds = (props) => {
    const [posts,setPosts] = useState([]);

    useEffect(()=> {
        fetchPosts();
    },[]);
    
    const fetchPosts = () => {
        fetch('https://www.reddit.com/r/pics.json')
        .then(response => response.json())
        .then(res => {
            setPosts(res.data.children)
        })
        .catch(error => {
            console.log(error);
        })
    }


    return (
        <FlatList data={posts} renderItem={FeedItems} keyExtractor={(item, index) => index} />
    )
}
export default Feeds;