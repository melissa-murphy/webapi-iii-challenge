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
    if (condition) {
      user;
      if (user) {
        req.user = user;
        next();
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


function validateUser(req, res, next) {}

function validatePost(req, res, next) {}

module.exports = router;