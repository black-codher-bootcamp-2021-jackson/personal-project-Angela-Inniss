
import React, { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";

import "./saveToFavourites.css";

const SaveToFavourites = (props) => {

    const [saved, setSaved] = useState(false);
    const className = saved ? "heart-solid" : "heart-outline";

    const handleSavedHeartClick = (event) => {
        console.log(event);
        setSaved(!saved);
    }



    // add use effect with a call to 
    //props.setSalonAsFavourite(saved,props.salonId)  - should run every time saved changes - add saved  to deps array i.e whenuser clicks
    // updates database 
    // adding to DB will be same as adding a user 


    // add use effect
    // set state to match props.salonIsFavourite (true or false)  - run this once on page load
    // check is this salon favourite
    useEffect(() => {
       return props.salonIsFavourite;
    },[]);

    return (

        <div className="heart">
            <button className="heart-button" onClick={(event) => handleSavedHeartClick(event)}>
                <FcLike className={className} />
            </button>
        </div>

    )
}

// TODO
// 
// when salon is saved get user and add saved salon to that user??


export default SaveToFavourites;
