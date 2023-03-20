import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', description: ''})

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!post.title || !post.description) {
            return alert('Заполните все поля')
        }else{
            create({...post, key: Date.now(), id : 1})
            setPost({title: '', description: ''})
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <MyInput value={post.title} type="text" onChange={event => setPost({...post, title: event.target.value})} placeholder="Post title"/>
            <MyInput value={post.description} type="text" onChange={event => setPost({...post, description: event.target.value})} placeholder="Post description"/>
            <MyButton>Добавить пост</MyButton>
        </form>
    );
};

export default PostForm;