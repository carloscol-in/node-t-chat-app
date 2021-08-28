const express = require('express');
const router = express.Router();

const response = require('./network/response');

let app = express();

app.use(router);
app.use(express.json());

router.get('/', (req, res, next) => {
    if (req.query.error == "ok") {
        response.error(req, res, "Everything failed!", 400, "More details!");
    } else {
        response.success(req, res, "Excelente", 201);
    }
})

router.post('/', (req, res, next) => {
    console.log(req.body);
    res.send('Hola desde post')
})

app.use('/app', express.static('public'));

app.listen(3000);