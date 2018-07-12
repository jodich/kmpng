const db = require('../db.js');

const insertMessage = (message, productId, senderId, receiverId, callback) => {

    let queryString = "INSERT INTO messages (message, product_id, sender_id, receiver_id, read) VALUES ($1, $2, $3, $4, $5)"
    let values = [message, productId, senderId, receiverId, 'false'];

    db.query(queryString, values, callback);
}

const selectMessage = (messageId, callback) => {

    let queryString = "SELECT * FROM messages WHERE id = $1"
    let values = [messageId]

     db.query(queryString, values, callback);
}

const selectUserMessages = (userId, callback) => {

    let queryString = "SELECT messages.id, messages.receiver_id, messages.message, users.name, users.email, products.title \
    FROM messages INNER JOIN users ON (messages.sender_id = users.id) \
    INNER JOIN products ON (messages.product_id = products.id) \
    WHERE messages.receiver_id = $1 ORDER BY id DESC";
    let values = [userId];

    db.query(queryString, values, callback);

}

const selectMessageAndDetails = (messageId, callback) => {

    let queryString = "SELECT messages.*, users.*, products.title FROM messages INNER JOIN users ON (messages.sender_id = users.id) INNER JOIN products ON (products.id = messages.product_id) WHERE messages.id = $1"
    let values = [messageId];

    db.query(queryString, values, callback);

}

const selectUnreadMessage = (userId, callback) => {

    let queryString = "SELECT * FROM messages WHERE receiver_id = $1 AND read='false' "
    let values = [userId];

    db.query(queryString, values, callback);

}

const updateUnreadMessages = (userId, callback) => {

    let queryString = "UPDATE messages SET read = 'true' WHERE receiver_id = $1"
    let values = [userId];

    db.query(queryString, values, callback);
}



// EXPORT models
module.exports = {
    insertMessage,
    selectMessage,
    selectUserMessages,
    selectMessageAndDetails,
    selectUnreadMessage,
    updateUnreadMessages
}