
import React, { useState } from "react";
// import { FcLike } from "react-icons/fc";

import "./saveToFavourites.css";

const SaveToFavourites = () => {

    const [saved, setSaved] = useState(false);
    const className = saved ? "heart-solid" : "heart-outline"

    const handleSavedHeartClick = (event) => {
        console.log(event);
        setSaved(!saved);
    }

    // if the like count is greater than or equal to 1 keep the heart solid ele 
    return (

        <div className="heart">
            <button className="heart-button" onClick={(event) => handleSavedHeartClick(event)}>
                {/* <FcLike className={className} /> */}
            </button>
        </div>

    )
}

export default SaveToFavourites;
