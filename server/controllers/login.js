
const registerModel=require("../models/register.model")




const userLogin=async (req,res) => {
    

    try {
        

        console.log(req.body);

        res.send("ok")
        
         

    } catch (error) {
        
        console.log(error);
        
    }
}


module.exports={userLogin}