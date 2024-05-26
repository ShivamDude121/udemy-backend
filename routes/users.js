const { Router} =require("express");
const middle=require('../middlewares/users.js')
const router=Router();




router.post('/signup', (req, res) => {
    // Implement user signup logic
    
    res.json({
        msg:"port working"
    })
    
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    
    res.json({
        msg:"port working"
    })
    
});

router.post('/courses/:courseId', middle, (req, res) => {
    
    res.json({
        msg:"port working"
    })
    
    // Implement course purchase logic
});

router.get('/purchasedCourses', middle, (req, res) => {
    // Implement fetching purchased courses logic
    
    res.json({
        msg:"port working"
    })
    
});

module.exports = router





