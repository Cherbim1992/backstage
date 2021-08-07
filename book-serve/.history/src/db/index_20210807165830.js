const mongoose = require('mongoose');

// Schema
// Modal
const UserSchema = new mongoose.Schema({
    nickname:String,
    password:String,
    age:Number
})
const UserModal = mongoose.model('User',UserSchema);
const connect = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017')
    mongoose.connection.on('open', ()=>{
        console.log('连接success')
        const user = new UserModal({
            nickname:'小明',
            password:'123456',
            age:'18'
        })
    });
};
connect();