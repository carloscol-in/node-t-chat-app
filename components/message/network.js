// External dependencies
const express = require('express');

// Server Network
const response = require('../../network/response');

// Component dependencies
const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res, next) => {

    const filter_user = req.query.user || null;

    controller.getMessages(filter_user)
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

router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    const message = req.body.message;

    controller.updateMessage(id, message)
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, err.message, err.status_code, err.details);
        });
});

router.delete('/:id', (req, res, next) => {

    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Message ${req.params.id} was deleted.`, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, err.status_code, err.details);
        });

})

module.exports = router;