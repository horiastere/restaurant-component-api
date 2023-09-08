const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
const router = express.Router();

const menu = require('./responses/menu');
const restaurant = require('./responses/restaurant');

const fashionPosts = require('./responses/fashion-posts');
const userPosts34 = require('./responses/user-posts-34');
const userPosts42 = require('./responses/user-posts-42');
const userPosts56 = require('./responses/user-posts-56');
const beproudPosts = require('./responses/beproud-posts');

const practicePostCards = require('./responses/practice-post-cards');

app.use(cors());

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


// Fashion
router.get('/fashion-posts', (req, res) => {
  res.json(fashionPosts);
});

router.get('/user-posts-34', (req, res) => {
  res.json(userPosts34);
});

router.get('/user-posts-42', (req, res) => {
  res.json(userPosts42);
});

router.get('/user-posts-56', (req, res) => {
  res.json(userPosts56);
});


// BeProud
router.get('/beproud-posts', (req, res) => {
  res.json(beproudPosts);
});



// Practice
router.get('/post-cards', (req, res) => {
  res.json(practicePostCards);
});

router.get('/post-cards-type/:type' , (req, res) => {
  console.log(req.params);
  res.json(practicePostCards);
});


app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);