var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userschema = mongoose.Schema({

    local : {
        email : String,
        password : String
    },
    facebook : {
        id : String,
        token : String,
        email : String,
        name : String
    },
    twitter : {
        id: String,
        token: String,
        displayName: String,
        username: String,
    },
    google : {
        id : String,
        token : String,
        email : String,
        name : String
    }
});

// generate hash

userSchema.method.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}