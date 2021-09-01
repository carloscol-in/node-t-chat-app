const express = require('express');
const controller = require('./controller');
const response = require('../../network/response');
const router = express.Router();


/**
 * Routes
 */
router.post('/', (req, res, next) => {

    controller.addChat(req.body.users)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, err.message, err.status_code, err.details);
        })

});

router.get('/:userId', (req, res, next) => {

    controller.listChats(req.params.userId)
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, err.message, err.status_code, err.details);
        });

});

module.exports = router;