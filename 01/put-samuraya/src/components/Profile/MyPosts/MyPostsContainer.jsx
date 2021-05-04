import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/ProfilePage-Reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPosts = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    }
    return (<MyPosts updetenewPostText={onPostChange}
                     addPosts={addPosts}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/> )
}

export default MyPostsContainer;


