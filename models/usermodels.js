const db = require('../db.js');

const selectUser = (identifier, value, callback) => {

  	let queryString = 'SELECT * FROM users WHERE '+identifier+' = $1';
  	let values = [value];

  	db.query(queryString, values, callback);
};

const insertNewUser = (newUser, callback) => {

	let queryString = 'INSERT INTO users (name, email, password, phonenum, location) VALUES ($1, $2, $3, $4, $5) RETURNING *'
	let values = [newUser.name, newUser.email, newUser.password, newUser.phonenum, newUser.location];

	db.query(queryString, values, callback)
}

const selectUserProducts = (ownerId, callback) => {

	let queryString = 'SELECT * FROM products WHERE owner_id = $1 ORDER BY id';
	let values = [ownerId];

	db.query(queryString, values, callback)
}

const selectUserProductsCount = (ownerId, callback) => {

	let queryString = "SELECT COUNT(*) FROM products WHERE owner_id = $1";
	let values = [ownerId];

	db.query(queryString, values, callback)
}



// EXPORT models
module.exports = {
    selectUser,
    insertNewUser,
    selectUserProducts,
    selectUserProductsCount
}