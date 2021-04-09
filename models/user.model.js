const { timeStamp } = require('console');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({

    fullname: {
        type: String,
        required: true,
        trim: true 
    },
    occupation: {
        type: String,
        required: true,
        trim: true 
    },
    email: {
        type: String,
        required: true,
        trim: true 
    },
    phone: {
        type: String,
        required: true,
        trim: true 
    }
}, {timestamps: true});

const User = mongoose.model('user', userSchema);//mongodb na table


module.exports = User; //pwedi sya magamit sa lain