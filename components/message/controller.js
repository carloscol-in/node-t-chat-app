const chalk = require('chalk');

const store = require('./store');

const addMessage = (user, message) => {

    return new Promise((resolve, reject) => {

        if (!user || !message) {
            reject({
                message: 'Bad Request',
                status_code: 404,
                details: `cuser type = ${typeof(user)}, message type = ${typeof(message)}.`
            });
        }

        const full_message = {
            user,
            message,
            date: new Date()
        };
    
        store.add(full_message);

        resolve(full_message);

    })
    
}

const getMessages = () => {
    
    return new Promise( async (resolve, reject) => {
        let messages = await store.list();

        if (messages.length === 0) {
            reject({
                message: 'Not Data Found',
                status_code: 400,
                details: `<<Message>> -> No data found on messages.`
            })
        }

        resolve(messages);
    })

}

module.exports = {
    addMessage,
    getMessages,
};