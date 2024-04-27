const mongoose=require("mongoose");
const contactSchema=new mongoose.Schema(
    {
        First:{
            type:String,
            required:true,
            maxLength:100,
        },
        Last:{
            type:String,
            required:true,
            maxLength:100,
        },
        Email:{
            type:String,
            required:true,
            maxLength:100,
        },
        Message:{
            type:String,
            required:true,
            maxLength:1000,
        },
    }
);
module.exports=mongoose.model("Contact",contactSchema);