const mongoose= require("mongoose")
// Defining the schema i.e the structure of my table holding the data

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const userModle = mongoose.model('user',userSchema)

module.exports=userModle