import React from 'react';

const Postitem = (props) => {

        return (
            <div className="post">
                <div className="post__content">
                    <h3>{props.post.id}</h3>
                    <strong>{props.post.title}</strong>
                    <div>{props.post.description}</div>
                </div>
                <div className="post__btns">
                    <button>Delete</button>
                </div>
            </div>
        );
};

export default Postitem;