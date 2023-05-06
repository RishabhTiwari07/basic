const express = require('express');
const app = express();
const userRoute = require("./router/user");
const config = require("./config/dbconnect");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/user',userRoute)


app.listen(3000,function(){
    console.log("server is started");
    config();
});