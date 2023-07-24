const express = require('express');
const cookieParser = require('cookie-parser');
const serverlog = require('easy-log')('app:server')
const cors = require('cors');

const app = express();

app.use((req, res, next) =>{
serverlog('${req.method} = ${req.originalUrl}')
next()
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res, next) => {
  res.send('hello world')
})

module.exports = app;
