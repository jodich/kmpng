// IMPORT 
const db = require('../db.js'); // to delete
const userModel = require('../models/usermodels.js');
const productModel = require('../models/productmodels.js');
const messagesModel = require('../models/messagesmodels.js');
const model = require('../models/models.js');

const sha256 = require('js-sha256');

// DEFINE controllers
const getUser = (request, response) => {

    let userId = request.cookies['user_id'];
    let hasedCookie = request.cookies["logged_in"]
    
    if (model.checkAuth(userId, hasedCookie)) {
        
        response.render('user/userProfile');

    } else {
        response.redirect('/user/login');
    }
    
};

const getNewUserForm = (request, response) => {

    response.render('user/newUser');
};

const getLoginForm = (request, response) => {
    
    response.render('user/login');
};

const getUserProducts = (request, response) => {
// displays all the user's products

    let userId = request.cookies['user_id'];
    let hasedCookie = request.cookies["logged_in"]
    
    if (model.checkAuth(userId, hasedCookie)) {

        // let ownerId = request.cookies['user_id'];
        userModel.selectUserProducts(userId, (err, result) => {
            response.render('userproducts/userProducts', {results: result.rows});
        })

    } else {
        response.redirect('/user/login');
    }
}

const postNewUser = (request, response) => {
    let newUser = request.body;
    newUser.password = sha256(newUser.password);

    userModel.selectUser('email', newUser.email, (err, result) => {

        if (result.rows[0] == undefined) {
            // checks if the email does not exist in database. Can create new one.
            userModel.insertNewUser(newUser, (err, result) => {

                model.setAuth(result.rows[0].id, response);
                response.cookie('user_id', result.rows[0].id);

                response.redirect('/user');
            });

        } else {
            response.send('email already exist');
        }
    });
};

const postUserLogin = (request, response) => {
    let inputUser = request.body;
    inputUser.password = sha256(inputUser.password);

    userModel.selectUser('email', inputUser.email, (err, result) => {

        if (result.rows[0] == undefined) {
        // checks if the email does not exist
            response.send('no user with this email')
        } else {

            if(result.rows[0].password === inputUser.password) { 
            // checks if the password is right

                model.setAuth(result.rows[0].id, response);
                response.cookie('user_id', result.rows[0].id);

                response.redirect('/user');

            } else {
                response.send('password is wrong')
            }
        }
    });
};



// const getCheckLogin = (request, response) => {

//     let userId = request.cookies['user_id'];

//     if(userId) {
//         response.redirect('/product')
//     } else {
//         response.redirect('/user/login')
//     }
// }

const getLogout = (request, response) => {
    response.clearCookie('logged_in');
    response.clearCookie('user_id');

    response.redirect('/');
}












const getMessages = (request, response) => {

    let userId = request.cookies['user_id'];

    messagesModel.selectUserMessages(userId, (err, result) => {

        response.render('user/messages', {results: result.rows})
    })
}

const getMessageReply = (request, response) => {

    let messageId = request.params.id;

    messagesModel.selectMessage(messageId, (err, result) => {

        response.render('user/reply', {results: result.rows[0]});

    });
}

const postMessageReply = (request, response) => {

    let messageId = request.params.id;
    let reply = request.body.message;
    let fromThisPerson = request.cookies['user_id'];

    messagesModel.selectMessage(messageId, (err, result) => {

        let toThisPerson = result.rows[0].sender_id;

        messagesModel.insertMessage(reply, result.rows[0].product_id, fromThisPerson, toThisPerson, (err, result) => {

            response.redirect('/user/messages')
        }) 
    })



}


// EXPORT controllers
module.exports = {
    getUser,
    getNewUserForm,
    getLoginForm,
    getUserProducts,
    postNewUser,
    postUserLogin,
    getLogout,
    getMessages,
    getMessageReply,
    postMessageReply
}