require('dotenv').config()

const express=require('express')

const cors=require('cors')

require('./db/connection')



const router=require('./routes/router')

const server=express()

const PORT=5000


server.use(cors())
server.use(express.json())
server.use(router)

server.get('/',(req,res)=>{
	res.status(200).json('Luminar service response')
})


server.listen(5000,()=>{
	console.log("server has started at port 5000");
})