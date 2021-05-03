import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <Profileinfo/>
            <MyPosts postData={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;