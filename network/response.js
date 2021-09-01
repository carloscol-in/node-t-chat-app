const chalk = require('chalk');

const status_messages = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error',
}

exports.success = (req, res, message, status) => {
    let status_code = status;
    let status_message = message;
    
    if (!status) {
        status_code = 200;
    }
    
    if(!message) {
        status_message = status_messages[status_code];
    }

    res.status(status_code).send({
        error: "",
        body: status_message
    });
}

exports.error = (req, res, message, status, details) => {
    console.log(chalk.red(`[Error on request]: ${details}`));

    res.status(status || 500).send({
        error: message,
        body: ""
    });
}