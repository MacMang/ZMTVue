const Koa = require('koa');
const cors = require('koa-cors')();
const router = require('koa-router')();
const app = new Koa();
const fs = require('fs');
app.use(cors)

router.get('/ssq',async (ctx)=>{
    var file = __dirname+"/data.json";
    var result = JSON.parse(fs.readFileSync(file));
    ctx.body = result;
})
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);