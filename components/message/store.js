const Model = require('./model');

const getMessages = (filter_messages) => {
    
    return new Promise((resolve, reject) => {
        let filter = {};
    
        if (filter_messages !== null) {
            filter = { 
                chat: filter_messages
            };
        }
        
        Model.find(filter)
            .populate('user')
            .exec((err, populated) => {
                if (err) {
                    reject(err);
                    return false;
                }

                resolve(populated);
            });
    })
}

const addMessage = async (message) => {
    // create message model instance
    const my_message = new Model(message);
    // save the message
    my_message.save();
}

const updateMessage = async (id, message) => {
    const found_message = await Model.findById(id);

    found_message.message = message;

    const new_message = await found_message.save();

    return new_message;
}

const deleteMessage = async (id) => {
    return Model.findByIdAndDelete(id);
}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateMessage,
    remove: deleteMessage,
    // get,
};