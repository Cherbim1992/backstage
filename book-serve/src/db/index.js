const mongoose = require('mongoose');
require('./Schemas/user')
require('./Schemas/invitcode')
const connect = ()=>{
    return new Promise((resolve)=>{
        mongoose.connect('mongodb://127.0.0.1:27017/book-mgr')
        mongoose.connection.on('open', ()=>{
            console.log('数据库连接成功')
            resolve()
        });
    })
   
};
module.exports={
    connect
}
// Schema
// Modal
// const UserSchema = new mongoose.Schema({
//     nickname:String,
//     password:String,
//     age:Number
// })
// const UserModal = mongoose.model('User',UserSchema);
// const connect = ()=>{
//     mongoose.connect('mongodb://127.0.0.1:27017/book-mgr')
//     mongoose.connection.on('open', ()=>{
//         console.log('连接success')
//         const user = new UserModal({
//             nickname:'小明',
//             password:'123456',
//             age:'18'
//         });
//         user.save()
//     });
// };
// connect();