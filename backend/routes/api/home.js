const express = require('express')
const asyncHandler = require("express-async-handler");

const {singlePublicFileUpload, singleMulterUpload} = require("../../awsS3")
const { Photo } = require("../../db/models")
const router = express.Router();


router.post("/photo",singleMulterUpload("image"), asyncHandler(async (req, res) =>{

    const {authorId} = req.body
    const profilePhotoURL = await singlePublicFileUpload(req.file)
    const newPhoto = await Photo.create({authorId:+authorId,photoURL: profilePhotoURL})
    console.log(+authorId, "***")

    if (newPhoto) {
        res.json(newPhoto)
    } else {
        res.json({success: false, message: "Something went wrong..."})
    }
}))

router.get("/:authorId", asyncHandler(async function(req, res){
    const authorId = +req.params.authorId
    console.log(authorId, "!!!!")
    const photos = await Photo.findAll({where:{authorId}});

    res.json(photos) 
}))




module.exports = router;