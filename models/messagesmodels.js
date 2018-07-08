const db = require('../db.js');

const insertMessage = (message, productId, senderId, receiverId, callback) => {

    let queryString = "INSERT INTO messages (message, product_id, sender_id, receiver_id) VALUES ($1, $2, $3, $4)"
    let values = [message, productId, senderId, receiverId];

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




// EXPORT models
module.exports = {
    insertMessage,
    selectMessage,
    selectUserMessages
}