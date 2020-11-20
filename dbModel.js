import mongoose from "mongoose";

const instance = mongoose.Schema ({
    From: String,
    to: String,
    title: String,
    msgContent: String
})

export default mongoose.model('posts', instance)