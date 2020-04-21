const express = require('express')
const router = express.Router()
const ToDos = require('../models/toDo')

router.get('/',(req,res)=>{
    let todo = ToDos.find({},(err,data)=>{
        if(err){
            console.log(err)
        } else{
            res.render('todo',{
                data
            })
        }
    })
})

router.post('/',(req,res)=>{

    let todo = new ToDos({
        item:req.body.item
    })
    todo.save((err,todoo)=>{
        if(err){
            throw err
        } else{
            res.json('success')
        }
    })
})

router.delete('/:id',(req,res)=>{   
    let query = {_id:req.params.id}
    ToDos.find(query,(err,result)=>{
        if(err){
            console.log(err)
        } else{
            ToDos.deleteOne(query,(err)=>{
                if(err){
                    throw err
                } else{
                    res.send(result)
                }
            })
        }
    })
})

module.exports = router