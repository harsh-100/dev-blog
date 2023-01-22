import { NextApiHandler } from "next";

const handler:NextApiHandler =(req,res)=>{

    const {method} = req
    switch (method) {
        case "GET":
            return res.json({ok:'true'});
           
    
        default:
            return res.status(404).json({message:'Not accepted'});

    }
   
    

}
export default handler;