import React, { useState, useEffect } from "react";
import './LandingPage.css'
import {useSelector, useDispatch} from 'react-redux'
import Photos from '../backgroundImages'
import {getPhotos} from "../../store/photo";
import {Redirect, useHistory} from 'react-router-dom';

function LandingPage() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const photos = useSelector(state => state.photos)
    useEffect(()=>{
        dispatch(getPhotos(user))
    }, [])
    const elements = photos.map((el, i) => {
        return <Photos obj={el} key={i}/>
    })
       return ( 
    <div className="landing-container">
     {/* <h1 className="landing">LandingPage</h1> */}
     {elements}
     </div>
    )
}

export default LandingPage;