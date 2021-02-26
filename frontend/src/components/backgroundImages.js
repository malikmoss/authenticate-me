import React from 'react';
import {useSelector} from 'react-redux';
import {getPhotos} from "../store/photo"

const Photos = ({obj}) => {
    console.log(obj, "OBJ")
    return (
        <img src={obj.photoURL} />
    )
}

export default Photos;