const Contact = require("../models/contact");

module.exports.create= async function(req,res){
           // here validating that req has name and phone no
           console.log("controller loaeded");
          if(req.body.name && req.body.phone){
         // checking if phone no already exists  
         let contact = await Contact.findOne({phone:req.body.phone})
         console.log(contact);
         if(contact){
             return res.status(500).json({error:"phone no already exists"})
         }
           
        Contact.create(req.body)
        .then((contact)=>{
            // responding with the created data            
            return res.status(200).json({contact:{
                name:contact.name,
                phone:contact.phone
            }});
        }).catch(err=>{
            return res.status(500).json({error:"internal server issue"});
        })

    }else{
        return res.status(404).json({error:"field data is not correct"});
    }
}


module.exports.mm=function(req,res){

    console.log("ok")
}
module.exports.getLists=function(req,res){
    Contact.find({})
    .then(contacts=>{
        // removing extra information
        let filteredProducts = contacts.map((value,index)=>{
            return {id:value.id,name:value.name,phone:value.phone}
        });
        // return the contacts as  json responce.
        return res.status(200).json({contacts:filteredProducts});        
    }).catch(err=>{
        return res.status(500).json({error:"internal server issue"});
    })

}


// this handle the deletion of the contacts
module.exports.delete = function(req,res){
    // this find the contact by id and remove from the data base.
    Contact.findByIdAndRemove(req.params.id,(err)=>{
        if(err){
            return res.status(500).json({error:"contact id not matched"})
        }
        return res.status(200).json({message:"requested information deleted"})
    })  
}

// ALL the contacts will updated here
module.exports.update=function(req,res){
     // findbyidandupdate(id,update,options,callback), here new:true  making return the updated contact
    Contact.findByIdAndUpdate(req.params.id,{phone:req.query.phoneno},{new:true})
    .then((contact)=>{
        // responding the updated contact
       return res.status(200).json({
         contact:{
             id:contact.id,
             name:contact.name,
             phone:contact.phone
         },
         message:" new phone no added successfully `${contact,name} `"

       })

    })
    .catch(err=>{
        return res.status(500).json({
            error:"error in server"
        })
    })
}