const express = require('express');
const cors = require('cors');
const axios = require('axios');

// Only need dotenv in development mode.
if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv');
  dotenv.config();
}

const app = express();
app.use(cors());

// If we only need to bypass CORS
app.get('/', async (req, res) => {
  if (req.query.url) {
    // Use an & to include multiple query params
    // process.env.API_KEY
    const axiosRes = await axios.get(req.query.url)
    res.send(axiosRes.data);
  } else {
    res.send('Please provide a url query param')
  }
})

// Tell my app which port to run on.
app.listen(5001, () => {
  // Run two servers. One for main project and one for proxy server.
  console.log('Listening on port 5001...')
});
