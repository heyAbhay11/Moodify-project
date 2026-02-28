const mongoose = require("mongoose")

const blacklistSchema = new mongoose.Schema({
    token:{
        type:String,
        required:[true,"token is required for blacklisting."],

    }
},{
    timestamps:true 
    // maintain karega time matlab user na kaab logout kiya tha ya managae karega ya 
})

 const blacklistModel = mongoose.model("blacklist",blacklistSchema)

 module.exports =  blacklistModel