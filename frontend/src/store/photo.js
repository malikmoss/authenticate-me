import { csrfFetch } from './csrf';

const UPLOAD_PHOTO = 'UPLOAD_PHOTO'
const GET_PHOTOS = 'GET_PHOTOS'

const setPhoto = (photo) => ({
    type: UPLOAD_PHOTO,
    payload: photo
});

const setPhotos = (photos) => ({
    type: GET_PHOTOS,
    payload: photos
});

export const createPhoto = (authorId, image) => async(dispatch) => {
    const formData = new FormData()
    formData.append("authorId", authorId)
    formData.append("image", image)
    console.log(image, "!!!")
    const res = await csrfFetch("/api/explore/photo", {
        method: "POST",
        headers: {"Content-Type": "multipart/form-data"},
        body: formData
    })
    const data = await res.json();
    dispatch(setPhoto(data))
};

export const getPhotos = (authorId) => async(dispatch) => {
    const res = await csrfFetch(`/api/explore/${authorId}`)
    const data = await res.json();
    dispatch(setPhotos(data))
}


export default function reducer(state=[], action){
    switch (action.type) {
        case UPLOAD_PHOTO:
            return [...state, action.payload]
        case GET_PHOTOS:
            return [...state, ...action.payload]
        default :
          return state
    }
}