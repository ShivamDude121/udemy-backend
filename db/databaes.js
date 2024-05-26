const mongoose=require("mongoose");
const { string } = require("zod");
mongoose.connect("mongodb+srv://Shivam:Shivamrock@cluster0.baeqe26.mongodb.net/udemy");


const userSchema=new mongoose.Schema({

    username:String,
    password:String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]

})

const adminSchema=new mongoose.Schema({
    username:String,
    password:String

})


const courseSchema=new mongoose.Schema({

     
     title: String,
     description: String,
     imageLink: String,
     price: Number

})

const user=mongoose.model("user",userSchema);
const admin=mongoose.model("admin",adminSchema);
const courses=mongoose.model("courese",courseSchema)


module.exports={
    user,
    admin,
    courses
}




