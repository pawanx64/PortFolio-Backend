const express=require("express");
const router=express.Router();
const {CreateContact}=require("../Controller/CreateContact");
router.post("/CreateContact",CreateContact);
module.exports=router;