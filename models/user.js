/**
 * Created by Dominik on 23.04.2016.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('User',{
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String
});