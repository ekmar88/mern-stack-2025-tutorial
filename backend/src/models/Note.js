import mongoose from "mongoose"

// 1st - You need to create a schema
// 2 - You would create a model based off of that schema
const noteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, { timestamps: true } // createdAt, up
)

const Note = mongoose.model("Note", noteSchema)

export default Note
