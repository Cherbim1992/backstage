const mongoose = require('mongoose');
const connect = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017')
    mongoose.connection.on('open', ()=>{
        console.log('连接success')
    })
}