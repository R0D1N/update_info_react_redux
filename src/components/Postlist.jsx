import React from 'react';
import Postitem from "./Postitem";

const Postlist = (props) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Post list</h1>
            {props.posts.map(el => <Postitem delete={props.delete} post={el} key={el.key}/>)}
        </div>
    );
};

export default Postlist;