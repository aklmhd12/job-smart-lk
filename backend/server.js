const express=require('express');
const app=express();
app.use(express.json());

app.get('/api/status',(req,res)=>{
 res.json({status:'running',name:'JobSmart.lk'});
});

app.listen(5000);
