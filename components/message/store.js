const list = [];

const addMessage = async (message) => {
    list.push(message);
}

const getMessages = async () => {
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    // get,
    // update,
    // delete,
};