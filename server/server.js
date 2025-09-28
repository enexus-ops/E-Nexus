const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const eventRoutes = require('./eventRoutes');
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
const uri = process.env.MONGO_URI

app.use('/api/events', eventRoutes);

mongoose.connect(uri)
.then(()=>{
    console.log("Database connected successfully")
    app.listen(PORT,()=>{
        console.log(`Server is running on port: ${PORT}`)
    })
})