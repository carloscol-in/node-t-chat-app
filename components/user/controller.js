const store = require('./store');

const getUsers = async () => {
    return store.list();
}

const addUser = (name) => {
    if (!name) {
        return Promise.reject({
            message: 'Invalid name',
            status_code: 400,
            details: `<<User>> -> No name was passed into the addUser.`
        })
    }
    const user = {
        name,
    };

    return store.add(user);
}

module.exports = {
    getUsers,
    addUser,
}