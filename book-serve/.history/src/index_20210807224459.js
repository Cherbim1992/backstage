const Koa = require('koa');
const app = new Koa();
app.use((ctx,next)=>{
    const { request:res } = ctx 
    const { url } = res
    if(url === '/user') {
        ctx.body = 'user123456'
        return ;
    }
    if(url = 'user/list') {
        ctx.body = '<h2>用户列表页面</h2>'
        return
    }
    await next()
    ctx.body = '没有页面404'
   console.log(res)
})
app.use(async (ctx)=>{
    console.log(1);
    ctx.body = 'no source';
})
app.listen(3000,()=>{
    console.log('success123')
})