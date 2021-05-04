import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let posts = props.posts.map(p => <Post message={p.message} likeCounter={p.likeCounter}/>)

    let newPostElement = React.createRef();

    let onAddPosts = () => {
        props.addPosts();

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updetenewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h4> My posts</h4>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <button onClick={onAddPosts}>Add post</button>
            </div>
            {posts}
        </div>
    )
}

export default MyPosts;


