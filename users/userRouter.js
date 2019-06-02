const express = require('express');

const router = express.Router();

const userDb = require('./userDb');
const postDb = require('../posts/postDb');

router.post('/', (req, res) => {}); // Add User

router.post('/:id/posts', (req, res) => {}); //

router.get('/', (req, res) => {}); // Get Users

router.get('/:id', (req, res) => {}); // Get User by ID

router.get('/:id/posts', (req, res) => {}); // Get User Posts

router.delete('/:id', (req, res) => {}); // Delete User by ID

router.put('/:id', (req, res) => {}); // Update User

//custom middleware

async function validateUserId(req, res, next) {
  const userId = req.params.id;
  const user = await userDb.getById(userId);
  let condition = [userId !== null && userId !== '' && userId !== 0];

  if (userId) {
    // if condition is met
    if (condition) {
      // return user
      user;
      // if user matches req, set to user and continue
      if (user) {
        req.user = user;
        next();
        // else, error it up, yo.
      } else {
        res.status(400).json({ message: `This user does not exist` });
      }
    } else {
      res.status(400).json({ message: `Invalid ID` });
    }
  } else {
    res.status(400).json({ message: `Please provide User ID` });
  }
}

function validateUser(req, res, next) {
  const body = req.body;
  let condition = [body !== null];

  if (body) {
    // if condition is met
    if (condition) {
      //return body
      body;
      // if body matches req, set to body and continue
      if (body) {
        req.body = body;
        next();
        // error time - git to goin
      } else {
        res.status(400).json({ message: `This user does not exist` });
      }
    } else {
      res.status(400).json({ message: `Incomplete submission` });
    }
  } else {
    res.status(400).json({ message: `Missing required` });
  }
}

function validatePost(req, res, next) {
  // validate body and and create new post if valid
  const body = req.body;
  let condition = [body !== null];

  if(body) {
    if(condition) {
      body;
      if(body) {
        req.body = body;
        next();
        // roll out some errors wut
      }
    } else {
      res.status(400).json({ message: `Missing post data` });
    }
  } else {
    res.status(400).json({ message: `missing required text field` });
  }


}

module.exports = router;
