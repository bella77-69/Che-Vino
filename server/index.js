const express = require("express");
const app = express();
const router = express.Router()
PORT = 8080;
const cors = require('cors');
const redRoute = require('./routes/redRoute');
const whiteRoute = require('./routes/whiteRoute');
const dessertRoute = require('./routes/dessertRoute');
const portRoute = require('./routes/portRoute');
const roseRoute = require('./routes/roseRoute');
const sparklingRoute = require('./routes/sparklingRoute');

require ('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));


//routes
// app.use('/wines', apiRoute);
app.use('/wines/reds', redRoute);
app.use('/wines/whites', whiteRoute);
app.use('/wines/dessert', dessertRoute);
app.use('/wines/port', portRoute);
app.use('/wines/rose', roseRoute);
 app.use('/wines/sparkling', sparklingRoute);

// home route
app.get('/', (req, res) => {
    res.json({message: 'Hello, welcome to my Wine api',
routes: [
    {
        method: 'get',
        endpoint: '/wines/reds',
    },
    {
        method: 'get',
        endpoint: '/wines/reds/:id',
    },
    {
        method: 'get',
        endpoint:'/wines/whites',
    },
    {
        method: 'get',
        endpoint: '/wines/whites/:id'
    },
    {
        method: 'get',
        endpoint: '/wines/sparkling',
    },
    {
        method: 'get',
        endpoint: 'wines/port',
    },
    {
        method: 'get',
        endpoint: 'wines/rose',
    },
    {
        method: 'get',
        endpoint: 'wines/dessert',
    },
    {
        method: 'post',
        endpoint: '/wines/reds', 
        body: {
            winery: 'string',
            wine: 'string',
            location: 'string',       
            review: 'string',
            image: 'string',
            rating: 'string',
        }
    }
]


})
})



app.listen(8080, () => {
  console.log("listening on port 8080...");
});

module.exports = router;