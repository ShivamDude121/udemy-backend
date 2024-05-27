const { Router } = require("express");
const m = require("../middlewares/admin");

const router = Router();
const { z }=require("zod");
const mongoose=require("mongoose")
const { admin }=require("../db/databaes")
const {courses  }=require("../db/databaes")
mongoose.connect("mongodb+srv://Shivam:Shivamrock@cluster0.baeqe26.mongodb.net/udemy");

const jwt=require('jsonwebtoken');
const JWT_KEY="shivam"
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
router.post('/signin',m.middle,(req,res)=>{
    

    const x=req.headers.username

    const key=jwt.sign(x,JWT_KEY)
    res.json({

        key

    })

})


router.post('/courses', m.middle,async (req, res) => {

    let x=new courses(req.body);

    x.save().then((
        res.json({
            msg: "courses added sussfully"
        })
    )) .catch(()=>{
        res.json({
            msg:"something went wrong"
        })
    })


 

   
});

router.get('/courses', m.middle,async (req, res) => {

    let x= await courses.find();
    res.send(x);




    
});

module.exports = router;