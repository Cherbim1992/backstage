// const fn = async ()=>{

// };
 // Promise
 //回调函数
 // 一个接口要拿到数据 要跑5个前置接口
//  const request = (arg,cb)=>{
//     setTimeout(()=>{
        
//         cb(arg+1);
//         console.log(arg)
//     },1000)
//  }
//  request(1,(res1)=>{
//     request(res1,(res2)=>{
//         request(res2,(res3)=>{
//             request(res3,(res4)=>{
//                 request(res4,(res5)=>{
//                     console.log('res5',res5)
//                 })
//             })
//         })
//     })
//  })
const request = (arg,cb)=>{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(arg+1)
            console.log(arg)
        },1000);
    })
}
const fun = async (res)=>{
    const res1 = await request(res)
    const res2 = await request(res1)
    const res3 = await request(res2)
    await request(res3)
}
fun(1)
// request(1).then((res)=>{
//    return request(res)
// }).then((res)=>{
//     return request(res)
// }).then((res)=>{
//     return request(res)
// })
