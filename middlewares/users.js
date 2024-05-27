
const { z }=require("zod");
const schema=z.object({
    username:z.string(),
    password:z.string(),
    purchasedCourses: z.array(z.string())
})


function middle(req,res,nxt){


    nxt();
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
module.exports={
    middle,
    zz_auth
};