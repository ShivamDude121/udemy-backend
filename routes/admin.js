const { Router } = require("express");
const adminMiddleware = require("../middlewares/admin");
const router = Router();


router.post('/signup', (req, res) => {
    // Implement admin signup logic

    res.json({
        msg:"port working"
    })
    
    
});

router.post('/courses', adminMiddleware, (req, res) => {

    
    res.json({
        msg:"port working"
    })
    
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {

    
    res.json({
        msg:"port working"
    })
    
    // Implement fetching all courses logic
});

module.exports = router;