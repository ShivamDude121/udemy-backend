const { Router } = require("express");
const m = require("../middlewares/admin");

const router = Router();
const { z }=require("zod");
const mongoose=require("mongoose")
const { admin }=require("../db/databaes")

mongoose.connect("mongodb+srv://Shivam:Shivamrock@cluster0.baeqe26.mongodb.net/udemy");


router.post('/signup',m.zod_auth,async (req, res) => {

    const user =await new admin({

        username:req.body.username,
        password:req.body.password

    })

    user.save().then(()=>{
        res.json({
            msg: "admin added"
        })
    }).catch(()=>{
        res.json({
            msg:'something went wrong'
        })
    })



    
    
});

router.post('/courses', (req, res) => {

    
    res.json({
        msg:"port working"
    })
    
    // Implement course creation logic
});

router.get('/courses', (req, res) => {

    
    res.json({
        msg:"port working"
    })
    
    // Implement fetching all courses logic
});

module.exports = router;