const mongoose= require("mongoose")

// This will connect the code with the MongoDB, and will also return that connection
const connection=mongoose.connect('mongodb://0.0.0.0/men').then(()=>{
    console.log('connected')
})

module.exports=connection