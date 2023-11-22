const express = require('express');
const bodyPraser = require('body-parser');
const dotenv = require('dotenv');
const router = require('./src/iam/auth/auth-router');

const app = express();
dotenv.config();

app.use(bodyPraser.json());




app.use('/api', router)

app.get('/test', ()=>{
    console.log('working');
})



app.listen(8000, ()=>{
    console.log(`server is running on 8000`);
})