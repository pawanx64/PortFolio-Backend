const Contact=require("../Model/Contact");

exports.CreateContact=async(req,res)=>{
    try{
        const{First,Last,Email,Message}=req.body;
        const response=await Contact.create({First,Last,Email,Message});
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry Created Successfully',
        }
        );
    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500)
        .json({
            success:false,
            data:"Internal Server Error",
            message:error.message,
        })
    }
}