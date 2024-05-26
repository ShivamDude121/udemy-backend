const { z }=require("zod")

const schema=z.object({

    username:z.string(),
    password:z.string()

})


function middle(req,res,nxt){

    nxt()



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
module.exports={middle,zod_auth}