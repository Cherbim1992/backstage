const Koa = require('koa');
const app = new Koa();
app.use((ctx)=>{
   console.log(12)
})
app.listen(3000,()=>{
    console.log('success123')
})