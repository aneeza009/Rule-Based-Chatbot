import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import chatbotRoutes from './routes/chatbot.route.js';
import cors from 'cors'

const app = express()

dotenv.config()
app.use(express.json());
app.use(cors())

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Database connection 

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
      console.log("Connected to Database")
}).catch((error)=>{
      console.log("Error connecting to mongodb", error)
})

// Definning Routes

app.use("/bot/v1", chatbotRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
