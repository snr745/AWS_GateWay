const express=require('express');
const app=express();

const PORT=3000

const server =app.listen(PORT,(req,res)=>{
    console.log(`Express server running at http://localhost:${PORT}/`);
});

app.get("/api/v1/getUsers",(req,res)=>{
    res.status(200).json({
        status: "success",
    message:"first API",
    })
})
process.on("uncaughtException",err=>{
    console.log(err);
    server.close(()=>{
        process.exit;
    })
});