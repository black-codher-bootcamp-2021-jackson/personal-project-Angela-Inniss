// single componetn with one thumb
// on click opens tooltip kinda thing with thumb up thumb down  and number underneath like unlike search
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import React, { useState } from 'react';

import "./vote.css";

const Vote = () => {

    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(0)
    const [dislike, setDislike] = useState(false);
    const [dislikeCount, setDislikeCount] = useState(0);

    const handleLikeClick = () => {
        console.log("liked")
        setLike(true);
        setLikeCount(prevState => prevState + 1)
    }
    const handleClick = () => {
        console.log("hello")
       
    }
    const handleDislikeClick = () => {
        console.log("disliked");
        setDislike(true);
        setDislikeCount(prevState => prevState + 1)
    }
    const likeClassName = (like && likeCount > 0) ? "fill-black" : "fill-white"
    const dislikeClassName = dislike ? "fill-black" : "fill-white"
    // user clicks like and is the first user
    // the thumb turns black and increment counter by one 
    // the user can also dislike and it will turn to white 

    return (
        <div className="vote-container">
            <div className="vote">
                <button onClick={handleLikeClick}><AiFillLike className={likeClassName} />{likeCount}</button>

                <span className="center">like</span>
            </div>
            <div className="vote">
                <button onClick={handleDislikeClick}><AiFillDislike className={dislikeClassName} />{dislikeCount}</button>

                <span className="center">dislike</span>
            </div>


        </div>
    )
}
export default Vote;