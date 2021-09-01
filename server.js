const express = require('express');

// Require and config dotenv
require('dotenv').config()

const router = require('./network/routes');

let app = express();

app.use(express.json());

router(app);

app.use('/app', express.static('public'));

app.listen(3000);