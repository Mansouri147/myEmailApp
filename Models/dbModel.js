import mongoose from "mongoose";

const emailSchema = mongoose.Schema ({
    From: String,
    to: String,
    title: String,
    msgContent: String
})

export default mongoose.model('emails', emailSchema)