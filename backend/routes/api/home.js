const express = require("express");
const asyncHandler = require("express-async-handler");

const {singlePublicFileUpload, multiplePublicFileUpload} = require("../../awsS3")
const { Photo } = require("../../db/models")
const router = express.Router()

Router.post("/", singlePublicFileUpload("image"), asyncHandler(async (req, res) =>{

    const {authorId, photoURL} = req.body
    const newPhoto = await Photo.create({authorId, photoURL})

    if (newPhoto) {
        res.json(newPhoto)
    } else {
        res.json({success: false, message: "Something went wrong..."})
    }
}))

module.exports = router