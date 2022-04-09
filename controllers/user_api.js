
const User = require('../models/user');
const jwt = require('jsonwebtoken');

/// create the session to establish user identity.user login controller
module.exports.createSession = async function(req, res){

    try{
        let user = await User.findOne({email: req.body.email});

        if (!user || user.password != req.body.password){
            return res.json(422, {
                message: "Invalid username or password"
            });
        }

        return res.json(200, {
            message: 'Sign in successful, here is your token, please keep it safe!',
            data:  {
                token: jwt.sign(user.toJSON(), 'kgfchapter2', {expiresIn:  '1000000'})
            }
        })

    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}


//  Thia one is for signup for a user
module.exports.create = function(req, res){
    if (req.body.password && req.body.email){

        User.findOne({email: req.body.email}, function(err, user){
    
            if(err){ return res.status(500).json({error:"internal server issue"});}
    
            if (!user){
                User.create(req.body, function(err, user){
                    return res.status(404).json({message:"account created kindly sign in to get token"});
                })
            }else{
                return res.status(404).json({message:"you already sign up kindly login to get token"});
            }
    
        });



        
    } else{
        return res.status(404).json({error:"field data is not correct"});
    }

   
}