import React, {useState} from 'react';
import './styles/App.scss';
import Postlist from "./components/Postlist"

function App() {


    const [posts, setPosts] = useState([])

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')



    const handleSubmit = (event) => {
        event.preventDefault()
        const newPost = {
            key: Date.now(),
            id: posts[posts.length - 1]?.id + 1 || 1,
            title,
            description
        }
        if (!title || !description) {
            return alert('Заполните все поля')
        }else{
            setPosts([...posts, newPost])
            setTitle('')
            setDescription('')
        }

    }

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
    }


    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input value={title} type="text" onChange={handleChangeTitle} placeholder="Post title"/>
                <input value={description} type="text" onChange={handleChangeDescription} placeholder="Post description"/>
                <button type="submit">Create post</button>
            </form>

            <Postlist posts={posts}/>
        </div>
    );
}




export default App;
