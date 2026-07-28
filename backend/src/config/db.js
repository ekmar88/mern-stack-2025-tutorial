import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB connected successfully")
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1) // exit with failure
  }
}
// mongodb://localhost:27017/nombre_de_tu_base_de_datos
