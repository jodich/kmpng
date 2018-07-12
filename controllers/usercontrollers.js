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

        userModel.selectUser('id', userId, (err, resultUser) => {

            userModel.selectUserProductsCount( userId, (err, resultUserItems) => {

                response.render('userlogin/userProfile', {userDetails: resultUser.rows[0], userProductsCount: resultUserItems.rows[0] });
            })
        })

    } else {
        response.redirect('/user/login');
    }
    
};

const getNewUserForm = (request, response) => {

    response.render('userlogin/newUser');
};

const getLoginForm = (request, response) => {
    
    response.render('userlogin/login');
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

    if (newUser.location != "click here to get location") {

        if (newUser.password === newUser.cmfpassword) {
            newUser.password = sha256(newUser.password);

            userModel.selectUser('email', newUser.email, (err, result) => {

                if (result.rows < 1) {
                    // checks if the email does not exist in database. Can create new one.
                    userModel.insertNewUser(newUser, (err, result2) => {

                        model.setAuth(result2.rows[0].id, response);
                        response.cookie('user_id', result2.rows[0].id);

                        response.redirect('/user');
                    });

                } else {
                    let errMessage = "Email already exist"
                    response.render('error', { message: errMessage })
                }
            });

        } else {
            let errMessage = "Passwords do not match"
            response.render('error', { message: errMessage })
        }
    } else {
        let errMessage = "We need your location for this to work"
        response.render('error', { message: errMessage })
    }

};

const postUserLogin = (request, response) => {
    let inputUser = request.body;
    inputUser.password = sha256(inputUser.password);

    userModel.selectUser('email', inputUser.email, (err, result) => {

        if (result.rows[0] == undefined) {
        // checks if the email does not exist
            let errMessage = "Invalid Email"
            response.render('error', { message: errMessage })

        } else {

            if(result.rows[0].password === inputUser.password) { 
            // checks if the password is right

                let userId = result.rows[0].id

                model.setAuth(userId, response);
                response.cookie('user_id', userId);


                messagesModel.selectUnreadMessage(userId, (err, result2) => {
                    let unreadMsg = result2.rows.length;

                    if (unreadMsg >= 1) {
                      response.cookie('unread_msg', unreadMsg);  
                    }
                    
                    response.redirect('/user');
                }) 

            } else {
                let errMessage = "Incorrect Password"
                response.render('error', { message: errMessage })
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
    response.clearCookie('unread_msg');


    response.redirect('/');
}












const getMessages = (request, response) => {

    let userId = request.cookies['user_id'];

    messagesModel.selectUserMessages(userId, (err, result) => {

        messagesModel.updateUnreadMessages(userId, (err, result2) => {
            
            response.clearCookie('unread_msg');
            response.render('messages/messages', {results: result.rows})

        })
    })
}

const getMessageReply = (request, response) => {

    let messageId = request.params.id;

    messagesModel.selectMessageAndDetails(messageId, (err, result) => {

        response.render('messages/reply', {results: result.rows[0]});

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