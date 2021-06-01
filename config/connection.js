const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true, useUnifiedTopology:  true, useCreateIndex: true} , error =>{
    if(error){
        console.log('There was an error')
    } else {
        console.log('This was a success')
    }
})