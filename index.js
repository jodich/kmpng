// npm install express
const express = require('express');
const app = express();

// npm install method-override cookie-parser
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');

const db = require('./db.js');


// SETTING UP REACT!
// npm install npm install express-react-views react react-dom
// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
// this tells express where to look for the view files
app.set('views', __dirname + '/views');
// this line sets react to be the default view engine
app.set('view engine', 'jsx');

// BODY PARSER, so can see request.body
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

// MIDDLEWARE
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.static('public'));


// ROUTES
app.get('/', (request, response) => {

	response.render('home')

});

require('./routes')(app);





app.listen(3000);

















