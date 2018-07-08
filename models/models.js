const db = require('../db.js');
const sha256 = require('js-sha256');
const SALT = 'banana'

const selectAllLocations = (callback) => {

  	let queryString = 'SELECT * FROM locations';
  	db.query(queryString, callback);
};

const selectAllServices = (callback) => {

  	let queryString = 'SELECT * FROM services';
  	db.query(queryString, callback);
};

const checkAuth = (userId, hasedCookie) => {

	if (sha256(userId + SALT) === hasedCookie) {
		return true
	} else {
		return false
	}
};

const setAuth = (userId, response) => {

	let currentSessionCookie = sha256(userId + SALT);
	response.cookie('logged_in', currentSessionCookie)

};


// EXPORT models
module.exports = {
    selectAllLocations,
    selectAllServices,
    checkAuth,
    setAuth
}