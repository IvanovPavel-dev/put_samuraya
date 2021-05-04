import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/ProfilePage-Reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updeteNewPostText: (text) => {
            let action = updateNewPostActionCreator(text);
            dispatch(action)
        },
        addPosts: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


