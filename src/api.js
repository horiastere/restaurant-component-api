const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

const menu = require('./responses/menu');
const restaurant = require('./responses/restaurant');

router.get('/', (req, res) => {
  res.json({
    'msg': 'Restaurant component API default route'
  });
});

router.get('/menu', (req, res) => {
  res.json(menu);
});

router.get('/restaurant', (req, res) => {
  res.json(restaurant);
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);