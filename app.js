const express = require('express');
const bodyPraser = require('body-parser');

const app = express();

app.use(bodyPraser.json());


app.listen(8080, ()=>{
    console.log(`server is running on 8000`);
})