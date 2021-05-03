import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://w-dog.ru/wallpapers/16/17/small/491915527448240.jpg'/>
            {props.message}
            <div>
                <span>likes - {props.likeCounter}</span>
            </div>
        </div>
    )
}

export default Post;