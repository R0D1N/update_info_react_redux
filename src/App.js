import React, {useState} from 'react';
import './styles/App.scss';
import Postlist from "./components/Postlist"
import PostForm from "./components/PostForm";

function App() {

    const [posts, setPosts] = useState([])

    const createPost = (newPost) => {
        let id = posts.length + 1;

        do{
            if(isUniqId(id)){
                newPost.id = id;
                setPosts([...posts, newPost])
            }else{
                id++;
            }
        }while(!isUniqId(newPost.id))
    }

    const isUniqId = (id) => {
        return !posts.some(post => post.id === id)
    }

    const deletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <Postlist posts={posts} delete={deletePost}/>
        </div>
    );
}

export default App;
