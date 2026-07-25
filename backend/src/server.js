import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
const app = express()

// notes routes
app.use("/api/notes", notesRoutes)


app.listen(5001, () => {
  console.log("Server started on PORT: 5001")

})
