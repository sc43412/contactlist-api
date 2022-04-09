const express = require("express");
const app = express();
const port = 8000;

const db = require('./configs/mongoose')

app.use(express.urlencoded({extended:true}));

app.use('/',require('./routes'));

app.listen(port,function(err){

    if(err){
        console.log("server is not connected");
    }
    console.log(`server is running succesfully at the ${port}`);
})