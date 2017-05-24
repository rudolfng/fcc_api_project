var express = require('express');
var app = express()
var PORT = process.env.PORT || 8080;
app.get('/',(req,res)=> res.send('Hello world'))
app.listen(PORT,()=>console.log(`Listening on port ${PORT}`))
