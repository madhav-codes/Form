const mongoose=require("mongoose")

const info=new mongoose.Schema({   // to define attributes of table
    Name:{
        type:String,
    },
    Kame:{
        type:String
    }
});

const  Info=new mongoose.model("Info",info); // to give name and definition of table

module.exports=Info;