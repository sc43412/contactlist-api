const {Schema,model} = require('mongoose');

// creating schema that has name and quatity 
const contactSchema = new Schema({
    name:{
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
const Contact = model("Product",contactSchema);
module.exports = Contact;