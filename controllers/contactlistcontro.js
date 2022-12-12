const express = require('express')
const listSchema = require ('../model/contactlistm')

const getting =async(req,res)=>{
    try{const Nchouf = await listSchema.find()
     res.status(200).json({msg:'hethi lista',Nchouf})
 }catch(err){
     res.status(400).json({msg:"matchoufech"})
 }
     
 }
 const posting = async(req,res)=>{
    try {
        
        const Nzid = await new listSchema(req.body)
        Nzid.save()
        res.status(200).send({msg:"mabrouk ma nzedlik",Nzid})


    }catch(err){
        console.log(err)
        res.status(500).json({msg: "contact non ajouter"})
    }

}
const updating = async(req,res)=>{
    try{
        const {id} = req.params 
        const updatelist = await listSchema.findByIdAndUpdate(id,{$set:{...req.body}}) 
        res.status(200).json({msg:"hak itbadalt",updatelist})

    }catch(err){
        console.log(err)
        res.status(400).json({msg:"chay maho update"})
    }

}
const deleting =async(req,res)=>{
    try{
        const {id} = req.params
        const deletconatct = await listSchema.findByIdAndDelete(id)
    res.status(200).json({msg:"tir",deletconatct})
    }
    catch(err){
        console.log(err)
            res.status(400).json({msg:"chey ma sar"})
        
    }
}
const getingone = async(req,res)=>{
    try{
        const {id} = req.params
        const ijawahdik =await listSchema.findById (id)
        res.status(200).json({msg:"hak jit wahdik",ijawahdik})

    }catch(err){
        console.log(err)
        res.status(400).json({msg:"ma chouftekch"})
    }

}
module.exports ={getting,posting,updating,deleting,getingone}