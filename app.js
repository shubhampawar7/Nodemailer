const express=require("express");
const sendMail=require("./sendMail");
const app=express();  //create obj app so we can access properties and methods

app.get("/",(req,res)=>{
res.send("i am server")
});

app.get("/sendmail",sendMail)

const start=async()=>{
    try{
        app.listen(5000,()=>{
            console.log("port 5000")
        });
    }
    catch(error){}
}
start();