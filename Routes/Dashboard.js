import express from "express"
// import book from "../Model/Books.js"
import dashbord from "../Model/dashbord.js"
import authorize from "../Authorisation/UserAuto.js";


const router = express.Router();

//gfhcfccgcyfcfyfg

router.get(`/likebooks/:session`, authorize ,async(req,res)=>{

    let username = await req.authUsername 



    let filterUser = await dashbord.findOne({username})
    // let likeBookedIds = filterUser.likebook.slice(1)

    console.log(filterUser) 

    // console.log(username)       

    
    res.status(200).send("name")
    // res.status(200).send(username)


})


export default router;
