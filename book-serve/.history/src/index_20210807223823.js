const Koa = require('koa');
const app = new Koa();
app.use((ctx)=>{
    const { request:res } = ctx 
    const { url } = res
    if(res.url === '/user') {
        ctx.body = 'user123456'
        return 
    }
    ctx.body = '没有页面'
   console.log(res)
})
app.listen(3000,()=>{
    console.log('success123')
})