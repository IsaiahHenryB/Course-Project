const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/codesquadComics',{ useNewUrlParser: true, useUnifiedTopology:  true} , error =>{
    if(error){
        console.log('There was an error')
    } else {
        console.log('This was a success')
    }
})