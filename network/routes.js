const express = require('express');
const message = require('../components/message/network');

const router = (server) => {
    server.use('/message', message);
}

module.exports = router;