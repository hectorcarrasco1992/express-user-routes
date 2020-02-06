const moment = require('moment')

const myDate = (req,res,next)=>{
   let date = moment().format('MMMM Do YYYY, h:mm:ss a');
   console.log(date)
   next()

}

module.exports={
    myDate
}