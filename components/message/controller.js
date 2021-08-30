const chalk = require('chalk');

const addMessage = (user, message) => {
    return new Promise((resolve, reject) => {

        if (!user || !message) {
            console.log(chalk.red());
            reject({
                message: 'Bad Request',
                status_code: 404,
                details: `<<Message>> -> user type = ${typeof(user)}, message type = ${typeof(message)}`
            });
        }

        const full_message = {
            user,
            message,
            date: new Date()
        };
    
        console.log(full_message);
        resolve(full_message);

    })
}

module.exports = {
    addMessage,
};