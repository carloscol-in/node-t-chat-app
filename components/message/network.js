// External dependencies
const express = require('express');

// Server Network
const response = require('../../network/response');

// Component dependencies
const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res, next) => {
    if (req.query.error == "ok") {
        response.error(req, res, "Everything failed!", 400, "More details!");
    } else {
        response.success(req, res, "Very good!", 201);
    }
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