const { Router} =require("express");
const middle=require('../middlewares/users.js')
const router=Router();
const m=require("../middlewares/users.js")
const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://Shivam:Shivamrock@cluster0.baeqe26.mongodb.net/udemy");
const { user }=require("../db/databaes.js")
const { courses }=require("../db/databaes.js")
const JWT_KEY="shivam"
const jwt=require('jsonwebtoken');

router.post('/signup', m.zz_auth,async (req, res) => {

    let x= await new user(req.body);
    
    x.save().then(()=>{
        res.json({
            msg: "user added"
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

router.get('/courses', m.jwt_m,async (req, res) => {
    // Implement listing all courses logic
    
    
    let x= await courses.find();
    res.send(x);


});

router.post('/courses/:courseId', m.jwt_m,async (req, res) => {
    
    const z=await user.findOne({
        username:req.headers.username,
        password:req.headers.password 

    });

    z.purchasedCourses.push(req.params.courseId);

    z.save().then(()=>{
        res.json({
            msg:"courses purchased sussfully"
        })
    }).catch(()=>{
        res.json({
            msg:"something went wrong"
        })
    })

    


    
    // Implement course purchase logic
});

router.get('/purchasedCourses',m.jwt_m, async (req, res) => {
    // Implement fetching purchased courses logic
    const z=await user.findOne({
        username:req.headers.username,
        password:req.headers.password 

    });
    res.json(

        z.purchasedCourses
    )

    
});

module.exports = router





