
const { z }=require("zod");
const jwt=require('jsonwebtoken')
const key="shivam"
const schema=z.object({
    username:z.string(),
    password:z.string(),
    purchasedCourses: z.array(z.string())
})

const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://Shivam:Shivamrock@cluster0.baeqe26.mongodb.net/udemy");
const { user }=require("../db/databaes");



async function middle(req,res,nxt){

    const z=await user.find({
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



function zz_auth(req,res,nxt){
    
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
    zz_auth,
    jwt_m
};