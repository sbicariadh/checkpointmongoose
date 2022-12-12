
const express = require ('express')
const connecter = require ('./config/connectdb')
const listRouter = require ('./routes/contactlistr')
const app = express ()
const port = 5000

// tawa rbatna server bil BD
connecter()

app.use (express.json())

// jiben router fi server
 app.use ('/route/cont',listRouter)



app.listen (port,err=>{
    console.log(err)?console.log(err):console.log(`you are connected to port ${port}`)
})