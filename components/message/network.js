// External dependencies
const express = require('express');

// Server Network
const response = require('../../network/response');

// Component dependencies
const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res, next) => {

    controller.getMessages()
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, err.status_code, err.details);
        })
        
})

router.post('/', (req, res, next) => {

    controller.addMessage(req.body.user, req.body.message)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, err.message, err.status_code, err.details);
        })

})

module.exports = router;