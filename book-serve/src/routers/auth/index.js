const Router = require('@koa/router')
const jwt  = require('jsonwebtoken')
const mongoose = require('mongoose')
const User1 = mongoose.model('User')
const InviteCode = mongoose.model('InviteCode')
const { getBody } = require('../../helpers/utils/index.js')

const router = new Router({
    prefix:"/auth"
})
router.post('/register', async (ctx)=>{
   console.log(ctx.request.body) 
   const  { account,password, inviteCode } = getBody(ctx)
   // 找有没有邀请码
   const findCode = await InviteCode.findOne({
       code:inviteCode
   }).exec()
   // 没找到邀请码
   console.log('**',findCode)
   if(!findCode || findCode.user) {
    ctx.body = {
        code:0,
        msg:'邀请码不正确',
        data:null
    }
        return 
   }
  
   const findUser = await User1.findOne({
       account, 
   }).exec()
   if(findUser) {
    ctx.body = {
        code:0,
        msg:'已存在该用户',
        data:'error'
    }
       return
   }
   // 去创建一个用户
    const User = new User1({
        account,
        password
    })
    // 把用户 同步到数据库
    const res =  await User.save()
    findCode.user = res._id
    findCode.meta.updateAt = new Date().getTime()
    await findCode.save()
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
        account:account,
    })
    console.log(one)
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
      
    } else {
        ctx.body = {
            code:0,
            msg:"用户名或密码错误*",
            data:null
        }
        return;
    }
})
module.exports = router;