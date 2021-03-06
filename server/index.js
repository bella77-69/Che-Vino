// const express = require("express");
// const cors = require('cors');
// const app = express();
// PORT = 8080;

// const redRoute = require('./routes/redRoute');
// const whiteRoute = require('./routes/whiteRoute');
// const dessertRoute = require('./routes/dessertRoute');
// const portRoute = require('./routes/portRoute');
// const roseRoute = require('./routes/roseRoute');
// const sparklingRoute = require('./routes/sparklingRoute');
// const reviewRoute = require('./routes/reviewRoute');
// const allWineRoute = require('./routes/allWineRoute');

// require ('dotenv').config();

// app.use(express.json());
// app.use(cors());
// app.use(express.static('public'));

// //routes
// app.use('/wines/reds', redRoute);
// app.use('/wines/whites', whiteRoute);
// app.use('/wines/dessert', dessertRoute);
// app.use('/wines/port', portRoute);
// app.use('/wines/rose', roseRoute);
// app.use('/wines/sparkling', sparklingRoute);
// app.use('/wines/review', reviewRoute);
// app.use('/wines/all', allWineRoute);

// // home route
// app.get('/wines', (req, res) => {
//     res.json({message: 'Hello, welcome to my Wine api',
// routes: [
//     {
//         method: 'get',
//         endpoint: '/review',
//     },
//     {
//         method: 'get',
//         endpoint: '/all',
//     },
//     {
//         method: 'get',
//         endpoint: '/all/:id',
//     },
//     {
//         method: 'get',
//         endpoint: '/reds',
//     },
   
//     {
//         method: 'get',
//         endpoint: '/reds/:id',
//     },
//     {
//         method: 'get',
//         endpoint:'/whites',
//     },
//     {
//         method: 'get',
//         endpoint: '/whites/:id'
//     },
//     {
//         method: 'get',
//         endpoint: '/sparkling',
//     },
//     {
//         method: 'get',
//         endpoint: '/sparkling/:id'
//     },
//     {
//         method: 'get',
//         endpoint: '/port'
//     },
//     {
//         method: 'get',
//         endpoint: '/port/:id'
//     },
//     {
//         method: 'get',
//         endpoint: '/rose',
//     },
//      {
//          method: 'get',
//          endpoint: '/rose/:id'
//      },
//     {
//         method: 'get',
//         endpoint: '/dessert',
//     },
//     {
//         method: 'get',
//         endpoint: '/:id'
//     },
//     {
//         method: 'post',
//         endpoint: '/review', 
//         body: {
//             name: 'string',
//             wine: 'string',
//             comment: 'string',       
//         }
//     },
//     {
//         method: 'post',
//         endpoint: '/all',
//         body: {
//             winery: 'string',
//             wine: 'string',
//             rating: 'string',
//             average: 'string',
//             reviews: 'string',
//             location: 'string',
//             image: 'string',
//         }
//     }
// ]

// })
// })


// app.get ('/review', (req, res) => {
//     res.json({message: 'Hello, welcome to my Reviews api',
// routes: [
//     {
//         method: 'get',
//         endpoint: '/review'
//     },
//     {
//         method: 'get',
//         endpoint: '/review/:id'
//     },
//     {
//         method: 'post',
//         endpoint: '/review',
//         body: {
//             name: 'string',
//             email: 'string',
//             comment: 'string'
//         },
//     },
// ]
// });
// });


// app.listen(8080, () => {
//   console.log("listening on port 8080...");
// });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const redRoute = require('./routes/redRoute')
const whiteRoute = require('./routes/whiteRoute');
const dessertRoute = require('./routes/dessertRoute');
const portRoute = require('./routes/portRoute');
const roseRoute = require('./routes/roseRoute');
const sparklingRoute = require('./routes/sparklingRoute');
const reviewRoute = require('./routes/reviewRoute');
const allWineRoute = require('./routes/allWineRoute');
const commentRoute =require('./routes/commentRoute');
const contactRoute = require('./routes/contactRoute');

app.use(express.json());
app.use(cors());
//parse request data content
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//create inventory/admin routs
// app.use("/guest", (req, res) => {res.send({token: 'test123'})}, guestRoutes);
app.use('/wines/reds', redRoute);
app.use('/wines/whites', whiteRoute);
app.use('/wines/dessert', dessertRoute);
app.use('/wines/port', portRoute);
app.use('/wines/rose', roseRoute);
app.use('/wines/sparkling', sparklingRoute);
app.use('/wines/review', reviewRoute);
app.use('/wines/comments', commentRoute);
app.use('/wines/all', allWineRoute);
app.use('/wines/contact', contactRoute);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.status(200).json("Hello");
})
app.listen(PORT, (req, res) => {
  console.log(`Server connected to port: ${PORT}`);
});
