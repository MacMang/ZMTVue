var express = require('express');
var app = express();


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
app.get('/citys',function(req,res){
    res.sendFile(__dirname+'/citys.json')
})
app.get('/stations',function(req,res){
    res.sendFile(__dirname+'/stations.json')
})
app.listen(3000,function(req,res){
    console.log("在浏览器中输入 http://localhost:3000");
})