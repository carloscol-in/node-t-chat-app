const express = require('express');

// Require and config dotenv
require('dotenv').config()

const router = require('./network/routes');
const db = require('./db');

/**
 * Connect to db
 */
const url = `${process.env.MONGO_DB_HOST}://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_REMAIN}`;
db.connect(url);

let app = express();
app.use(express.json());
app.use(express.urlencoded());

/**
 * Routers
 */
router(app);

app.use('/app', express.static('public'));

/**
 * App config
 */
app.listen(3000);