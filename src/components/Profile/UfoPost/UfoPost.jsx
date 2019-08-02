import React from 'react';
import postStyle from './UfoPost.module.css';
import Post from './Post/Post'

const UfoPost = () => {
    let posts = [
        {id: 1, message1: "Hello i saw Ufo!!!", lickCount: 10},
        {id: 2, message1: "You sure!!?? Bitch !", lickCount: 12}
    ]

    let postElement = posts.map(post => <Post message={post.message1} like={post.lickCount}/>)

    return (
        <div>
            <div className={postStyle.myPost}><h3>myPost</h3>
                <div>
                    <div><textarea></textarea></div>
                    <div>
                        <button className={postStyle.button}> add post</button>
                    </div>
                </div>
            </div>
            <div className={postStyle.posts}>
                {postElement}
            </div>
        </div>
    )
}
export default UfoPost;
