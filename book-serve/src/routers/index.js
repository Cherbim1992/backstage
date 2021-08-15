// import { auth} from './auth/index'
const auth = require('./auth/index')
const InviteCode = require('./invit-code/index')
module.exports =  (app)=>{
    app.use(auth.routes())
    app.use(InviteCode.routes())
}