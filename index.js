const express=require("express");
const app=express();
const userrouter=require('./routes/users');
const adminrouter=require('./routes/admin')



app.use(express.json());

app.use('/admin',adminrouter);
app.use('/users',userrouter);


app.listen(3000,()=>{
    console.log('server started');
})











