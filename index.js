const express=require("express");
const app=express();
const cors=require("cors");
app.use(
    cors({
        origin:["https://pawanx64.vercel.app"],
        methods:["POST","GET"],
        credentials: true,
    })
);
require("dotenv").config();

const PORT=process.env.PORT || 6000;

app.use(express.json());
const ContactRoutes=require("./Route/Contacts");

app.use("",ContactRoutes);



app.listen(5000,()=>{
    console.log(`Server Started Succesfully at 5000`);
})


const dbConnect=require("./Config/database");
dbConnect();

