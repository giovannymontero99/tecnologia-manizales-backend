const express = require('express');
const app = express();
const productsRouter = require('./v1/router/productsRouter.js');
const cors = require('cors');

app.use(cors())
app.use('/', productsRouter );





module.exports = app;