const express = require('express');

const router = express.Router();

const userDb = require('./userDb');
const postDb = require('../posts/postDb');

router.post('/', (req, res) => {}); // Add User
router.get('/:id', (req, res) => {}); // Get User by ID
router.post('/:id/posts', (req, res) => {}); //


router.get('/', (req, res) => {
  postDb.get()
  .then(posts => {
    res.status(200).json(posts)
  })
  .catch(e => {
    res.status(200).json({ message: `Error retrieving posts` })
  })
}); // Get Posts



router.get('/:id/posts', validatePost, (req, res) => {
  res.status(200).json(req.post);
}); // Get User Posts

router.delete('/:id', (req, res) => {
  postDb.remove(req.params.id)
  .then(res => {
    res.status(200).json({ message: `Post Deleted` })
  })
}); // Delete Post by ID

router.put('/:id', (req, res) => {
  postDb.update(req.params.id, req.body)
  .then(post => {
    console.log(`-----------------------------Updated Post:` + post);
    res.status(200).json({ message: `Post Updated Successfully` })
  })
  .catch(e => {
    res.status(500).json({ message: `Internal Server Error: Unable to update post` })
  })
}); // Update User

//custom middleware

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
