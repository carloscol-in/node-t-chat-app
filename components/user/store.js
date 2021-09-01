const Model = require('./model');

// functions
const getUsers = async () => {
    let users = await Model.find();
    return users;
    
}

const addUser = async (user) => {
    const new_user = new Model(user);
    return await new_user.save();
}

module.exports = {
    list: getUsers,
    add: addUser,
};