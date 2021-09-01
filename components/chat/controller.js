const store = require('./store');

/**
 * Functions
 */
const listChats = (user_id) => {
    return store.list(user_id);
}

const addChat = (users) => {

    // check if there are users
    return new Promise((resolve, reject) => {

        if (!users || !Array.isArray(users)) {
            reject({
                message: 'No users passed',
                status_code: 400,
                details: '<<Chat>> -> No users where passed into the addChat function.'
            })
            return false;
        }

        const chat = {
            users
        };

        store.add(chat)
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err)
            });

    })

}


/**
 * Export
 */
module.exports = {
    addChat,
    listChats
}