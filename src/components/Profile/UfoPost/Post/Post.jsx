import React from 'react';
import postStyle from './Post.module.css';


const Post = (props) => {

    return < div>
        <div className={postStyle.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTqWw0g9hyh6wDAL-_SXHY9_Pu-AWyemTRzZPYazzvrxZeBxL3MA'/>
            {props.message}
            <div className={postStyle.like}><span>Like {props.like}</span></div>
        </div>
    </div>
}
export default Post;
