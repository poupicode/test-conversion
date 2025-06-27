const express = require('express');
const app = express();

const conversionRoutes = require('./routes/conversionRoutes');
const financeRoutes = require('./routes/financeRoutes');

app.use(express.json());

app.use('/convert', conversionRoutes);
app.use('/', financeRoutes);

module.exports = app;