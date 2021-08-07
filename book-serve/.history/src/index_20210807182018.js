const Koa = require('koa');
const app = new Koa();
app.use((ctx)=>{
    const { request:res } = ctx 
    if(res.url === '/user') {
        ctx.body = 'user123'
    }
   console.log(res)
})
app.listen(3000,()=>{
    console.log('success123')
})