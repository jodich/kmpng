// IMPORT 
const db = require('../db.js'); // to delete
const userModel = require('../models/usermodels.js');
const locationModel = require('../models/models.js');

const sha256 = require('js-sha256');

// DEFINE controllers
const getHomePage = (request, response) => {
    response.send('profile page');
    // all the products that the user is the owner of
};

// EXPORT controllers
module.exports = {
    getHomePage
}