const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');

// Require and config dotenv
require('dotenv').config()

const router = require('./network/routes');
const socket = require('./socket');
const db = require('./db');

/**
 * Connect to db
 */
const url = `${process.env.MONGO_DB_HOST}://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_REMAIN}`;
db.connect(url);

/**
 * Enable CORS
 */
app.use(cors());

// Configure express app
app.use(express.json());

/**
 * Routers
 */
router(app);

/**
 * Socket server
 */
socket.connect(server);

app.use('/app', express.static('public'));

/**
 * App config
 */
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});