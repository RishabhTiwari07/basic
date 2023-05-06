const express = require('express');
const router = express.Router();
const User = require("../controller/user");


router.get("/getUser",(req,res,next)=>{
    return res.status(200).json({ msg: 'User fetched successfully!!!' })

});

router.post("/create",User.createUser);


module.exports = router;