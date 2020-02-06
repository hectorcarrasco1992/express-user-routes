const express = require('express')
const router = express.Router()
//const path = require('path')
const users = require('../models/Users')
const uuid = require('uuid/v4')

// router.get('/',(req,res)=>{
//     res.send(path.join(__dirname,'public'))

// })
// router.use(express.static(path.join(__dirname,'public')))





router.get('/',(req,res)=>{
    return res.send('hello express')
})

router.get('/api/users',(req,res)=>{
    res.json(users)
})

router.get('/api/users/:id',(req,res)=>{
    const existingUser = users.filter(users=>users.id === parseInt(req.params.id))
    if(existingUser.length !== 0){
        return res.status(200).json(existingUser[0])
    }else{
        return res
        .status(418)
        .json(`${req.params.id} does not exist so quit playing`)
    }
    
})

router.post('/',(req,res)=>{
    if(!req.body.name || !req.body.email) return res.status(418).json({message:"Please enter name and email"})
    
    const newUser ={}
    newUser.id = uuid(),
    newUser.name = req.body.name,
    newUser.email = req.body.email
    users.push(newUser)
    return  res.json(req.body)
})


module.exports=router

//module.exports = app
//module.exports = path
