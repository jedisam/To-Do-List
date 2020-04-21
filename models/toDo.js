const mongoose = require('mongoose')

const ToDo = mongoose.Schema({
    item:{
        type:String,
        required:true
    }
})

const ToDos = module.exports = mongoose.model('todo',ToDo) 