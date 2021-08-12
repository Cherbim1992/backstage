const Koa = require('koa');
const KoaBody = require('koa-body')
const { connect } = require('./db/index')
const registerRouters = require('./routers')
// const Router = require('@koa/router')
const cors = require('@koa/cors');

const app = new Koa();
connect().then(()=>{
    app.use(cors());
    app.use(KoaBody());
    registerRouters(app);
    app.listen(3000,()=>{
        console.log('系统启动成功')
    })
})

// const Authrouter = new Router({
//  prefix:"/auth"
// })
// Authrouter.get('/register', async (ctx)=>{
//     ctx.body = '注册成功'
// })
// app.use(router.routes());
// app.use( async (ctx,next)=>{
//     const { request:res } = ctx 
//     const { url } = res
//     if(url === '/user123') {
//         ctx.body = '什么都没'
//         return;
//     }
//     if(url === '/user/list') {
//         ctx.body = '<h2>用户列表页面</h2>'
//         return ;
//     }
//     console.log(1)
//     ctx.body = '没有页面404'
//     console.log(2)
//     await next()
//     console.log(4)
// })
// app.use((ctx)=>{
//     console.log(3);
//     ctx.body = 'no source';
// })
