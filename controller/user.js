const UserModel = require('../models/users');

exports.createUser = async(req,res) => {
    try {
        console.log(req.body,'req.body');
        const {userName, password} = req.body;
        console.log(userName, password,'userName, password');
        if(!userName){
            return res.status(401).json({msg: "User name is requires"});
        }
        let User = new UserModel({
            userName: userName,
            password: password
        })
        let newUser = await User.save();
        res.status(200).json({msg: 'user created!!!',newUser});
    } catch (error) {
        console.log("error creating user:  ", error);
        res.status(500).json({msg: 'user not created!!!'});

    }
}