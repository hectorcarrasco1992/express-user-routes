const express = require('express')
const app = express()
const path = require('path')
const uuid = require('uuid/v4')
//const date = require('./middleware/moment')
//const logger = require('./middleware/logger')
const users = require('./models/Users.js')
const userRoutes = require('./routes/userRoutes')

const port = process.env.Port || 3000


app.use(express.json())
app.use(express.urlencoded({extended:true}))    
app.use('/',userRoutes)




// app.get('/',(req,res)=>{
//     return res.send('hello express')
// })

//  app.get('/',(req,res)=>{
//     res.send(path.join(__dirname,'public'))

//  })

// router.get('/',(req,res)=>{
//         res.json(users)
//     })

// get logger
// const logger = (req, res, next)=>{
    //     console.log('Hello');
    //     next();
    // }
    // app.use(logger.logMe)
    // app.use(date.myDate)
    
    
    
//app.use(express.static(path.join(__dirname,'public')))
//get all users
// app.get('/api/users',(req,res)=>{
//     res.json(users)

// })

// get a single user
// app.get('/api/users/:id',(req,res)=>{
//     const existingUser = users.filter(users=>users.id === parseInt(req.params.id))
//     if(existingUser.length !== 0){
//         return res.status(200).json(existingUser[0])
//     }else{
//         return res
//         .status(418)
//         .json(`${req.params.id} does not exist so quit playing`)
//     }
    
// })

// create user
// app.post('/',(req,res)=>{
//     if(!req.body.name || !req.body.email) return res.status(418).json({message:"Please enter name and email"})
    
//     const newUser ={}
//     newUser.id = uuid(),
//     newUser.name = req.body.name,
//     newUser.email = req.body.email
//     users.push(newUser)
//     return  res.json(req.body)
// })

app.listen(port,()=>{
    console.log(`listening on ${port}`)
})
