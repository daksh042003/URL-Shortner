const shortid= require("shortid");
const URL=require("../models/url");



async function handleGenerateNewShortURL(req,res){
    const body=req.body;
    if(!body.url) return res.status(400).json({error: 'Url is required'});
    
    const ShortID =shortid();
    await URL.create({
        ShortId:ShortID,
        redirectURL:body.url,
        visitHistory:[]

    });

    return res.json({ id: ShortID});

}


module.exports={
    handleGenerateNewShortURL,
};