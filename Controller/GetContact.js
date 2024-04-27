const Contact=require("../Model/Contact");


exports.getcontacts=async(req,res)=>{
    try{
        const contacts=await Contact.find({});
        res.status(200).json({
            success : true,
            data:contacts,
            message:"Entire Contact Data Is Fetched",
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error",
        })
    }
};
