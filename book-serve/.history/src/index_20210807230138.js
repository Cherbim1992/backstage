const Koa = require('koa');
const app = new Koa();
app.use( async (ctx,next)=>{
    const { request:res } = ctx 
    const { url } = res
    if(url === '/user') {
        ctx.body = '什么都没'
    }
    if(url === '/user/list') {
        ctx.body = '<h2>用户列表页面</h2>'
        return ;
    }
    console.log(1)
    ctx.body = '没有页面404'
    console.log(2)
    await next()
    console.log(4)
})
app.use(async (ctx)=>{
    console.log(3);
    ctx.body = 'no source';
})
app.listen(3000,()=>{
    console.log('success123')
})