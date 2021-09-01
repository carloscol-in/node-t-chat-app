const Model = require('./model');

/**
 * Functions
 */
const listChats = (user_id) => {

    return new Promise((resolve, reject) => {

        let filter = {};

        if (user_id !== null) {
            filter = {
                users: user_id,
            };
        }

        Model.find(filter)
            .populate('users')
            .exec((err, populated) => {
                if (err) {
                    reject(err);
                    return false;
                }

                resolve(populated);
            });

    })
}

const addChat = (chat) => {

    return new Promise((resolve, reject) => {

        if (!chat) {
            reject({
                message: 'No chat was given',
                status_code: 400,
                details: '<<Chat>> -> No chat was provided.'
            })
            return false;
        }

        let new_chat = new Model(chat);

        resolve(new_chat.save());

    });
}

/**
 * Exports
 */
module.exports = {
    list: listChats,
    add: addChat,
}