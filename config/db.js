const mongoose = require("mongoose")

mongoose.Connect(process.env.MONGO_URI , {
    useNewUrlParser : true ,
    useUnifiedTopology : true
})
.then(()=>console.log("successfully"))
.catch((err)=>console.log(err))