const db = require('../db.js');

const insertNewItem = (newItem, callback) => {

	let queryString = 'INSERT INTO products (title, img, availability, location, owner_id, service_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *'
    let values = [newItem.title, newItem.img, newItem.availability, newItem.location, newItem.owner_id, newItem.service];

    db.query(queryString, values, callback);
};

const selectProduct = (productId, callback) => {

	let queryString = "SELECT * FROM products WHERE id = $1";
    let values = [productId];

    db.query(queryString, values, callback);
}

const updateProductAvailabilty = (status, productId, callback) => {

	let queryString = "UPDATE products SET availability =" + status +" WHERE id = $1"
    let values = [productId];

    db.query(queryString, values, callback);
}

const selectAvailableProducts = (userLocation, userId, callback) => {


	let queryString = "SELECT * FROM products WHERE location = $1 AND owner_id != $2 AND availability = 'true'"
	let values = [userLocation, userId];

	db.query(queryString, values, callback);
}

const updateProduct = (updatedItem, productId, callback) => {

    let queryString = "UPDATE products SET title = $1, img = $2 WHERE id = $3";
    let values = [updatedItem.title, updatedItem.img, productId];

    db.query(queryString, values, callback);
}




// EXPORT models
module.exports = {
    insertNewItem,
    selectProduct,
    updateProductAvailabilty,
    selectAvailableProducts,
    updateProduct
}