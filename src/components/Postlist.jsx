import React from 'react';
import Postitem from "./Postitem";

const Postlist = ({posts}) => {


    return (
        <div>
            <h1 style={{textAlign: "center"}}>Post list</h1>
            {posts.map(el => <Postitem post={el} key={el.key}/>)}
        </div>
    );
};

export default Postlist;