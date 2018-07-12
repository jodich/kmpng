// IMPORT 
const db = require('../db.js'); // to delete
const userModel = require('../models/usermodels.js');
const productModel = require('../models/productmodels.js');
const messagesModel = require('../models/messagesmodels.js');
const model = require('../models/models.js');

var cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: 'db2fpatds', 
  api_key: '491492416143532', 
  api_secret: 'UhXNYUV93GaYh_h0kONJYI0H61I'
});


// DEFINE controllers
// const getNewItemForm = (request, response) => {};

const getNewItemForm = (request, response) => {

    let userId = request.cookies['user_id'];
    let hasedCookie = request.cookies["logged_in"]
    
    if (model.checkAuth(userId, hasedCookie)) {

        response.render('userproducts/newProduct');

    } else {
       response.redirect('/user/login');
    }
};

const getOneProduct = (request, response) => {

    let productId = request.params.id;

    productModel.selectProduct(productId, (err, result) => {

        response.render('userproducts/oneProduct', {results: result.rows[0]})
    });
}


const getEditProduct = (request, response) => {

    let userId = request.cookies['user_id'];
    let hasedCookie = request.cookies["logged_in"]
    
    if (model.checkAuth(userId, hasedCookie)) {

        let productId = request.params.id;

        productModel.selectProduct(productId, (err, result) => {

            response.render('userproducts/editProduct', {results: result.rows[0]})
        });

    } else {
        response.redirect('/user/login');
    }

};

// const postNewItem = (request, response) => {
//     let newItem = request.body;
//     newItem.availability = 'true';
//     newItem.owner_id = request.cookies['user_id'];

//     let ownerId = request.cookies['user_id'];
//     userModel.selectUser('id', ownerId, (err, result) => {

//         newItem.location = result.rows[0].location;

//         productModel.insertNewItem(newItem, (err, result) => {
//             response.redirect('/user/product');
//         });
//     });
// };

const postNewItem2 = (request, response) => {

    if (request.file == undefined) {

        let errMessage = "You need to upload an Image";
        response.render('error', { message: errMessage });

    } else {

        cloudinary.uploader.upload(request.file.path, function(result) {

            let ownerId = request.cookies['user_id'];
            userModel.selectUser('id', ownerId, (err, result2) => {

                let newItem = request.body;
                newItem.availability = 'true';
                newItem.owner_id = ownerId;
                newItem.location = result2.rows[0].location;
                newItem.img = result.secure_url;

                productModel.insertNewItem(newItem, (err, result3) => {
                    response.redirect('/user/product');
                });
            });
        });
    }
};



// const putUpdatedProduct = (request, response) => {

//     let productId = request.params.id;

//     let updatedItem = request.body
    
//     productModel.updateProduct(updatedItem, productId, (err, result) => {
//         response.redirect('/user/product/' + productId)
//     });

// }

const putUpdatedProduct2 = (request, response) => {

    let productId = request.params.id;
    let updatedItem = request.body

    if (request.file == undefined) {

        productModel.updateProductNoImg(updatedItem, productId, (err, result) => {
            response.redirect('/user/product/' + productId)
        }); 

    } else {

        cloudinary.uploader.upload(request.file.path, function(result) {

                updatedItem.img = result.secure_url
                
                productModel.updateProduct(updatedItem, productId, (err, result) => {
                    response.redirect('/user/product/' + productId)
                });    
            });
    }

    
}



const putProductsAvailabilty = (request, response) => {
    
    let productId = request.params.id;

    productModel.selectProduct(productId, (err, result) => {
        if (result.rows[0].availability == false) {

            productModel.updateProductAvailabilty(true, productId, (err, result) => {
                response.redirect('/user/product')
            });

        } else if (result.rows[0].availability == true) {

            productModel.updateProductAvailabilty(false, productId, (err, result) => {
                response.redirect('/user/product')
            });
        }
    })
};








// ===================================================== BROWSING ==================================================


const getProducts = (request, response) => {

    let userId = request.cookies['user_id'];
    let hasedCookie = request.cookies["logged_in"]
    
    if (model.checkAuth(userId, hasedCookie)) {

        userModel.selectUser('id', userId, (err, result) => {

            let userLocation = result.rows[0].location;

            productModel.selectAvailableProducts(userLocation, userId, (err, result) => {
                response.render('browse/products', {results: result.rows})
            });

        });

    } else {
        response.redirect('/user/new')
    }

};

const getOneProductBrowse = (request, response) => {

    let productId = request.params.id;

    productModel.selectProduct(productId, (err, result) => {

        response.render('browse/oneProductBrowse', {results: result.rows[0]})
    });
}












const getRequestForm = (request, response) => {

    let userId = request.cookies['user_id'];
    let hasedCookie = request.cookies["logged_in"]
    
    if (model.checkAuth(userId, hasedCookie)) {

        let productId = request.params.id;

        productModel.selectProduct(productId, (err, result) => {

            response.render('messages/request', {results: result.rows[0]})
        });
    } else {
        response.redirect('/user/login')
    }

}

const postRequest = (request, response) => {

    let message = request.body.message;
    let productId = request.params.id;
    let senderId = request.cookies['user_id'];

    productModel.selectProduct(productId, (err, result) => {

        let receiverId = result.rows[0].owner_id;

        messagesModel.insertMessage(message, productId, senderId, receiverId, (err, result) => {
            response.redirect('/product/' + productId);
        });

    });
}


// EXPORT controllers
module.exports = {
    getNewItemForm,
    getProducts,
    putProductsAvailabilty,
    getOneProduct,
    getOneProductBrowse,
    getEditProduct,
    getRequestForm,
    postRequest,
    postNewItem2,
    putUpdatedProduct2
};