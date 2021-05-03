import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/ProfilePage-Reducer";



const MyPosts = (props) => {
    let posts = props.postData.map(p => <Post message={p.message} likeCounter={p.likeCounter}/>)

    let newPostElement = React.createRef();

    let addPosts = () => {

        props.dispatch(addPostActionCreator())

    }
    let onPostChenge = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text))
    }

    return (
        <div className={s.postsBlock}>
            <h4> My posts</h4>
            <div>
                <div>
                    <textarea onChange={onPostChenge} ref={newPostElement} value={props.newPostText}/>
                </div>
                <button onClick={addPosts}>Add post</button>
            </div>
            {posts}
        </div>
    )
}

export default MyPosts;


