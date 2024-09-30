const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/sih")


const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true,
    },
    address: String,
    email: String,
    password: String,
    contactNo: Number,
});

module.exports = mongoose.model("user", userSchema);