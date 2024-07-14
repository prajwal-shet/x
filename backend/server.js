require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

const cors=require('cors')

// express app
const app = express()
app.use(cors({
  origin: https://x-frontend-rho.vercel.app, //allow request only from these site
  methods: ["GET","POST","PATCH","DELETE"],
  credentials: true, //for getting cookies and other headers from backend
  samesite : "none",
  secure: true,
}))






// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('https://x-backend-uxho.onrender.com/api/workouts', workoutRoutes)
app.use('https://x-backend-uxho.onrender.com/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
