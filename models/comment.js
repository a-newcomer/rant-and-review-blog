const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
  comment: {
    type: String,
    required: true
  },
  controversy: {
    type: Schema.Types.ObjectId,
    ref: "Controversy",
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("Comment", commentSchema)