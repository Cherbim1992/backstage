const Router = require('@koa/router')
const mongoose = require('mongoose')
const User1 = mongoose.model('User')
const router = new Router({
    prefix:"/auth"
})
router.post('/register', async (ctx)=>{
   console.log(ctx.request.body) 
   const  {account,password} = ctx.request.body
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
    console.log('登陆成功')
   
})
module.exports = router;