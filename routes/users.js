const { Router} =require("express");
const middle=require('../middlewares/users.js')
const router=Router();
const m=require("../middlewares/users.js")
const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://Shivam:Shivamrock@cluster0.baeqe26.mongodb.net/udemy");
const { user }=require("../db/databaes.js")
const { courses }=require("../db/databaes.js")



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

router.get('/courses', m.middle,async (req, res) => {
    // Implement listing all courses logic
    
    
    let x= await courses.find();
    res.send(x);


});

router.post('/courses/:courseId', (req, res) => {
    
    res.json({
        msg:"port working"
    })
    
    // Implement course purchase logic
});

router.get('/purchasedCourses' , (req, res) => {
    // Implement fetching purchased courses logic
    
    res.json({
        msg:"port working"
    })
    
});

module.exports = router





