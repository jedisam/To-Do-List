const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config/db')
// DB Connection

mongoose.connect(config.db,{ useNewUrlParser: true })
const db = mongoose.connection
if(db){
  console.log("Successfully Connected to DB!")
} else{
  console.log('Connection Error!')
}
const app =express()

const todo = require('./routes/todo')

// Set public floder
app.use(express.static(path.join(__dirname,'public')))

// View engine
app.set('views',path.join(__dirname,'view'));
app.set('view engine','jade')

  //Bodyparser Middleware
  app.use(bodyParser.urlencoded({extended:false}))
  app.use(bodyParser.json())

// Routes
app.use('/todo',todo)



const PORT = process.env.PORT || 9000

app.listen(PORT,()=>{
  console.log(`Server started on PORT ${PORT}`)
})