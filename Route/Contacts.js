const express=require("express");
const router=express.Router();
const {CreateContact}=require("../Controller/CreateContact");
const {getcontacts}=require("../Controller/GetContact");

router.post("/CreateContact",CreateContact);
router.get("/getcontacts",getcontacts);
module.exports=router;