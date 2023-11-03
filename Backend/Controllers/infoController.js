const Info=require('../Models/info')

const add=async(req,res)=>{
    try{
        const response=await Info.create({
            Name:req.body.name,
            Kame:req.body.kame
        })
        res.status(200).json({response});
    }
    catch(e){
        console.log(e);
    }
}

module.exports={add}