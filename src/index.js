const PORT = 8000;
const HOST = 'localhost';
const router= require('./routes/router')
const express = require('express');
const server = express();
const cors = require('cors');

server.use(cors());
server.use('/',router)


server.listen(process.env.PORT || PORT,HOST,()=>{
    console.log('Server listening on ' + HOST + ':' + PORT);
})