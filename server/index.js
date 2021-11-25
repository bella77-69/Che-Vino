const express = require("express");
const app = express();
PORT = 8080;
const cors = require('cors');

const router = express.Router();
// const redRoute = require('./routes/redRoute.js');
// const whiteRoute = require('./routes/whiteRoute.js');
// const dessertRoute = require('./routes/dessertRoute.js');
// const portRoute = require('./routes/portRoute.js');
// const roseRoute = require('./routes/roseRoute.js');
// const sparklingRoute = require('./routes/sparklingRoute.js');
const allWines = require('./routes/allWines.js');

require ('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));


//routes
app.use('/wines', allWines);
// app.use('/wines/reds', redRoute);
// app.use('/wines/whites', whiteRoute);
// app.use('/wines/dessert', dessertRoute);
// app.use('/wines/port', portRoute);
// app.use('/wines/rose', roseRoute);
// app.use('/wines/sparkling', sparklingRoute);

// home route
app.get('/wines', (req, res) => {
  res.json({message: 'Hello, welcome to my Wine api',
routes: [
  {
      method: 'get',
      endpoont: '/wines/:id',
  },
  {
      method: 'get',
      endpoint:'/wines/image',
  },
  {
      method: 'get',
      endpoint: '/wines/whites',
  },
  {
      method: 'get',
      endpoint: 'wines/port',
  },
  {
      method: 'get',
      endpoint: 'wines/rose',
  },
  // {
  //     method: 'get',
  //     endpoint: 'wines/sparkling',
  // },
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

// module.exports = router;