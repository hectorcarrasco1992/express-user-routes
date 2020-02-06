const express = require('express')
const app = express()
const path = require('path')
const uuid = require('uuid/v4')
const users = require('./models/Users.js')
const userRoutes = require('./routes/userRoutes')
const port = process.env.Port || 3000




app.use(express.json())
app.use(express.urlencoded({extended:true}))    
app.use('/',userRoutes)






app.listen(port,()=>{
    console.log(`listening on ${port}`)
})
