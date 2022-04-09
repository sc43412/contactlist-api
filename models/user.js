const {Schema,model} = require('mongoose');

// creating schema that has name and quatity 
const userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
// conveting the schema into the model
const User = model("User",userSchema);
module.exports = User;