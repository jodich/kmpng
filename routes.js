const db = require('./db.js');

// SET UP UPLOAD
var multer = require('multer');
var storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
var imageFilter = function (req, file, cb) {
    // accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

var upload = multer({ storage: storage, fileFilter: imageFilter})


module.exports = (app) => {

   const user = require('./controllers/usercontrollers.js')
   const product = require('./controllers/productcontrollers.js')
   // const universal = require('./controllers/controllers.js')
   
   // USER STUFF
   app.get('/user', user.getUser);
   app.get('/user/new', user.getNewUserForm);
   app.get('/user/login', user.getLoginForm);
   app.get('/user/logout', user.getLogout);
   app.post('/user/new', user.postNewUser);
   app.post('/user/login', user.postUserLogin);

   app.get('/user/messages', user.getMessages);
   app.get('/user/messages/:id', user.getMessageReply);
   app.post('/user/messages/:id', user.postMessageReply)


   // USER PRODUCT STUFF
   app.get('/user/product', user.getUserProducts);
   app.get('/user/product/new', product.getNewItemForm);
   app.post('/user/product/new', upload.single('image'), product.postNewItem2)

   app.get('/user/product/:id', product.getOneProduct);
   app.get('/user/product/:id/edit', product.getEditProduct);
   app.put('/user/product/:id/status', product.putProductsAvailabilty);
   app.put('/user/product/:id', upload.single('image'), product.putUpdatedProduct2);



   // PRODUCT STUFF
   // when user clicks on browsed items
   app.get('/products', product.getProducts);
   app.get('/product/:id', product.getOneProductBrowse);

   app.get('/product/:id/message', product.getRequestForm);
   app.post('/product/:id/message', product.postRequest);



   // TEST!!
   const test = require('./controllers/testcontrollers.js')
   
   app.get('/location', test.userLocation);

};


