const chalk = require('chalk');

const store = require('./store');
const config = require('../../config');
const { socket } = require('../../socket');

const addMessage = (chat, user, message, file) => {

    return new Promise((resolve, reject) => {

        if (!user || !message) {
            reject({
                message: 'Bad Request',
                status_code: 404,
                details: `cuser type = ${typeof(user)}, message type = ${typeof(message)}.`
            });
        }

        let file_url = '';

        if (file) {
            file_url = `${config.host}:${config.host}${config.public_route}/files/${file.filename}`
        }

        const full_message = {
            chat: chat,
            user,
            message,
            date: new Date(),
            file: file_url,
        };
    
        store.add(full_message);

        socket.io.emit('message', full_message);

        resolve(full_message);

    })
    
}

const getMessages = (filter) => {
    
    return new Promise((resolve, reject) => {
        store.list(filter)
            .then(messages => {
                if (messages.length === 0) {
                    reject({
                        message: 'Not Data Found',
                        status_code: 400,
                        details: `<<Message>> -> No data found on messages.`
                    })
                }
        
                resolve(messages);
            });
    })

}

const updateMessage = (id, message) => {
    return new Promise(async (resolve, reject) => {
        
        if (!id || !message) {
            reject({
                message: 'Invalid data.',
                status_code: 400,
                details: `<<Message>> -> No data passed to update message.`
            });
            return false;
        }

        const res = await store.update(id, message);

        resolve(res);

    });
}

const deleteMessage = (id) => {
    return new Promise((resolve, reject) => {

        if (!id) {
            reject({
                message: 'Invalid data',
                status_code: 400,
                details: `<<Message>> -> No id passed to delete method.`
            });
            return false;
        }
        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
            });

    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
};