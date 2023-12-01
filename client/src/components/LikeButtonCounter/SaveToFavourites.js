
import React, { useState, useEffect } from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";

import "./saveToFavourites.css";

const SaveToFavourites = (props) => {
    return (
        <div className="heart">
            <button className="heart-button" onClick={props.setSavedSalon}>
                {props.salonIsFav ? <FcLike /> : <FcLikePlaceholder/>}
            </button>
        </div>

    )
}

export default SaveToFavourites;
