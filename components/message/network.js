// External dependencies
const express = require('express');
const multer = require('multer');

// Server Network
const response = require('../../network/response');

// Component dependencies
const controller = require('./controller');


/**
 * Multer config
 */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb( null, `public/files/` );
    },

    filename: function (req, file, cb) {
        let extension = file.mimetype.split("/")[1];

        cb( null, Date.now() + `.${extension}` );
    }
});

const upload = multer({
    storage,
});


/**
 * Router
 */
const router = express.Router();

router.get('/', (req, res, next) => {

    const filter = req.query.chat || null;

    controller.getMessages(filter)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, err.status_code, err.details);
        })
        
})

router.post('/', upload.single('file'), (req, res, next) => {

    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
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