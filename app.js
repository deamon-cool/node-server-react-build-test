const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/burger', (req, res) => {
    res.status(200).sendFile('index.html', { root: `${__dirname}/public` });
});

app.listen(PORT, () => {
    console.log('127.0.0.1:' + PORT);
});