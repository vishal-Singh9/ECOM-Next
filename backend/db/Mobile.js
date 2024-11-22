const mongoose = require('mongoose');

const MobileSchema = new mongoose.Schema({
    Title:String,
    Price:Number,
    Description:String,
    Thumbnail:String,
    Rating:Number,
    Stock:Number,
    Brand:String,
    imageUrl:String,



})
module.exports = mongoose.model('mobiles', MobileSchema)