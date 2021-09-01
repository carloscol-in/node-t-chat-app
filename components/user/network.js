const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res, next) => {

    controller.getUsers()
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, err.message, err.status_code, err.details);
        });

})

router.post('/', (req, res, next) => {

    controller.addUser(req.body.name)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, err.message, err.status_code, err.details);
        })

});

module.exports = router;