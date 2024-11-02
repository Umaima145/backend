import mongoose from "mongoose";

const Schema = mongoose.Schema({
    titlr:String,
    desc:String,
    postid:Number
})

const postModal = mongoose.model("post", Schema)

export default postModal;