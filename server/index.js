const express = require("express");
const cors = require('cors');
const app = express();
PORT = 8080;

const redRoute = require('./routes/redRoute');
const whiteRoute = require('./routes/whiteRoute');
const dessertRoute = require('./routes/dessertRoute');
const portRoute = require('./routes/portRoute');
const roseRoute = require('./routes/roseRoute');
const sparklingRoute = require('./routes/sparklingRoute');
const reviewRoute = require('./routes/reviewRoute');

require ('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

//routes
app.use('/wines/reds', redRoute);
app.use('/wines/whites', whiteRoute);
app.use('/wines/dessert', dessertRoute);
app.use('/wines/port', portRoute);
app.use('/wines/rose', roseRoute);
app.use('/wines/sparkling', sparklingRoute);
app.use('/wines/review', reviewRoute);


// home route
app.get('/wines', (req, res) => {
    res.json({message: 'Hello, welcome to my Wine api',
routes: [
    {
        method: 'get',
        endpoint: '/review',
    },
    {
        method: 'get',
        endpoint: '/reds',
    },
   
    {
        method: 'get',
        endpoint: '/reds/:id',
    },
    {
        method: 'get',
        endpoint:'/whites',
    },
    {
        method: 'get',
        endpoint: '/whites/:id'
    },
    {
        method: 'get',
        endpoint: '/sparkling',
    },
    {
        method: 'get',
        endpoint: '/sparkling/:id'
    },
    {
        method: 'get',
        endpoint: '/port'
    },
    {
        method: 'get',
        endpoint: '/port/:id'
    },
    {
        method: 'get',
        endpoint: '/rose',
    },
     {
         method: 'get',
         endpoint: '/rose/:id'
     },
    {
        method: 'get',
        endpoint: '/dessert',
    },
    {
        method: 'get',
        endpoint: '/:id'
    },
    {
        method: 'post',
        endpoint: '/review', 
        body: {
            name: 'string',
            wine: 'string',
            comment: 'string',       
        }
    }
]

})
})


app.get ('/review', (req, res) => {
    res.json({message: 'Hello, welcome to my Reviews api',
routes: [
    {
        method: 'get',
        endpoint: '/review'
    },
    {
        method: 'get',
        endpoint: '/review/:id'
    },
    {
        method: 'post',
        endpoint: '/review',
        body: {
            name: 'string',
            email: 'string',
            comment: 'string'
        },
    },
]
});
});


app.listen(8080, () => {
  console.log("listening on port 8080...");
});

