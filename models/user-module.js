const mongoose  = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/CoursEZA")

const userSchema = mongoose.Schema({
    fullname : String,
    email:String,
    password:String,
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"home",
    }],
    cartlatest:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"new",
    }],
    
     cartgraphic:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"graphic",
    }]
    
})
module.exports = mongoose.model("user",userSchema)