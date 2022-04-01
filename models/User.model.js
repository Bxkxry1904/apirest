const mongoose = require ("mongoose");

const UserSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            require: true,
        },
        lastname:{
            type: String,
            require: true
        },
        email:{
            type: String,
            validate: {isEmail},
            require: true
        },
        phone: {
            type: Number,
            require: true,
        }
    }
)


module.exports = mongoose.model("User",UserSchema);
