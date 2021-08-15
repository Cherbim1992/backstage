const mongoose = require('mongoose')
const { getMeta } = require('../helpers')
const InvitCodeSchemas = new mongoose.Schema({
    // 邀请码
    code:String,
    // 账户
    user:String,
    meta:getMeta()
})
mongoose.model('InviteCode',InvitCodeSchemas)