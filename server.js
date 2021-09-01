const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');

// Require and config dotenv
require('dotenv').config()

const db = require('./db');
const socket = require('./socket');
const config = require('./config');
const router = require('./network/routes');

/**
 * Connect to db
 */
db.connect(config.db_url);

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

app.use(config.public_route, express.static('public'));

/**
 * App config
 */
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening at ${config.host}:${config.port}`);
});