const {Schema,model} = require('mongoose');

// creating schema that has name and phoneno
const contactSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})
// conveting the schema into the model
const Contact = model("Product",contactSchema);
module.exports = Contact;