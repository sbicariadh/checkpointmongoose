
const express = require ('express')
//jiben router
const listRouter = express.Router()
const {getting,posting,updating,getingone,deleting} =require('../controllers/contactlistcontro')

// jiben schema 
const listSchema = require ('../model/contactlistm')


// route mta3 get all contact
listRouter.get('/',getting )

// route mta3 post 
listRouter.post('/',posting)


// route mta3 update
listRouter.put('/:id',updating)

// route mta3 delete
listRouter.delete('/:id',deleting)

//route mta3 get contact wahid bark
listRouter.get('/:id',getingone)

module.exports = listRouter



