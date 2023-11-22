const express = require('express');
const bodyPraser = require('body-parser');
const dotenv = require('dotenv');
const authRouter = require('./src/iam/auth/auth-router');
const postRouter = require('./src/post/post-router');
const passport = require('passport');

const app = express();
dotenv.config();

app.use(bodyPraser.json());
app.use(passport.initialize());

app.use('/api', authRouter);
app.use('/api', postRouter);

app.get('/test', () => {
	console.log('working');
});

app.listen(8000, () => {
	console.log(`server is running on 8000`);
});
