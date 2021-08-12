const Router = require('@koa/router')
const jwt  = require('jsonwebtoken')
const mongoose = require('mongoose')
const User1 = mongoose.model('User')
const { getBody } = require('../../helpers/utils/index.js')

const router = new Router({
    prefix:"/auth"
})
router.post('/register', async (ctx)=>{
   console.log(ctx.request.body) 
   const  { account,password } = getBody(ctx)
   const one = await User1.findOne({
       account,
   }).exec()
   if(one) {
    ctx.body = {
        code:0,
        msg:'已存在该用户',
        data:'error'
    }
       return
   }
    const User = new User1({
        account,
        password
    })
    const res =  await User.save()
    ctx.body = {
        code:1,
        msg:'注册成功（success）',
        data:res
    }
    console.log('注册成功')
   
})
router.post('/login', async (ctx)=>{
    const  { account,password } = getBody(ctx)
    const one = await User1.findOne({
        account,
    })
    console.log(jwt)
    console.log(one.password ,password)
    if(!one) {
        ctx.body = {
            code:0,
            msg:"用户名或密码错误",
            data:null
        }
        return;
    }
    if(one.password === password){
        ctx.body = {
            code:1,
            msg:"登陆成功",
            data:{
                user:{user:one.account,id:one._id},
                token:jwt.sign({
                    account:one.account,
                },'book'),
            }
        }
        console.log('登陆成功')
        return;
      
    }
})
module.exports = router;