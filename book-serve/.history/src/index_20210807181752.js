const Koa = require('koa');
const app = new Koa();
app.use((ctx)=>{
    const { request } = ctx 
   console.log(ctx)
})
app.listen(3000,()=>{
    console.log('success123')
})