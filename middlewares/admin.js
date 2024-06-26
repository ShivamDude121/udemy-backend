const { z }=require("zod")
const mongoose=require("mongoose")
const { admin }=require("../db/databaes")
const jwt=require('jsonwebtoken')
const key='shivam'
mongoose.connect("mongodb+srv://Shivam:Shivamrock@cluster0.baeqe26.mongodb.net/udemy");



const schema=z.object({

    username:z.string(),
    password:z.string()

})


async function middle(req,res,nxt){

    const z=await admin.find({
        username:req.headers.username,
        password:req.headers.password 

    })

    if (z.length){
        nxt()
    }
    else{
        res.json({
            msg:"not a valid user"
        })
    }



}

function zod_auth(req,res,nxt){

    if(schema.safeParse(req.body).success==true){
        nxt();
    }
    else{
        res.json({
            msg:"invalid input"
        })
    }
}
function jwt_m(req,res,nxt){
    let x=req.headers.auth;
    try{
        jwt.verify(x,key)
        nxt()
    }
    catch{
        res.json({
            msg:'bad auth'
        })
    }
}
module.exports={
    middle,
    zod_auth,
    jwt_m
}