// import React, { useState, useEffect } from "react";
// import './ExplorePage.css'
// import {useSelector, useDispatch} from 'react-redux'
// import {getPhotos} from "../../store/photo";
// import {Redirect, useHistory} from 'react-router-dom';

// function ExplorePage() {
//     const dispatch = useDispatch()
//     const user = useSelector(state => state.session.user)
//     const photos = useSelector(state => state.photos)
//     useEffect(()=>{
//         dispatch(getPhotos(user))
//     }, [])

//     // const elements = photos.map((el, i) => {
//     //     return <Photos obj={el} key={i}/>
//     // })

//     const history = useHistory();
//     const sessionUser = useSelector((state) => state.session.user);

//        return ( 
//     <div className="explore-container">
//      {/* <h1 className="landing">LandingPage</h1> */}
//      {/* {elements} */}
//      </div>
//     )
// }

// export default ExplorePage;