const mongoose = require('mongoose')
const { getMeta } = require('../helpers')
const UserSchemas = new mongoose.Schema({
    account:String,
    password:String,
    meta:getMeta()
})
mongoose.model('User',UserSchemas)