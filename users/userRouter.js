const express = require('express');

const router = express.Router();

const userDb = require('./userDb');
const postDb = require('../posts/postDb');

router.post('/', validateUser, (req, res) => {
userDb.get()
.then(users => {
  res.json(users)
})
.catch(e => {
  res.status(500).json({ message: `Internal Server Error, unable to retrieve user` })
})
}); // Get Users


router.get('/:id', validateUserId, (req, res) => {
  res.status(200).json(req.user)
}); // Get User by ID


router.post('/:id/posts', validateUser, validateUserId, (req, res) => {
  req.body.user_id = req.user.id;
  console.log(`---------------------------Current validated user:` +  req.body.user_id);
  postDb.insert(req.body)
  .then(post => {
    console.log(`----------------------------Current post:` + post);
    res.status(200).json({ message: `Post added sucessfully` })
  })
  .catch(e => {
    res.status(500).json({ message: `Internal Server Error: unable to add post` })
  })
}); // Add Post to specific user



router.get('/:id/posts', validatePost, (req, res) => {
  res.status(200).json(req.post);
}); // Get User Posts

router.delete('/:id', (req, res) => {
  userDb.remove(req.params.id)
  .then(res => {
    res.status(200).json({ message: `User Deleted` })
  })
}); // Delete User by ID

router.put('/:id', (req, res) => {
  userDb.update(req.params.id, req.body)
  .then(user => {
    console.log(`-----------------------------Updated Post:` + user);
    res.status(200).json({ message: `User Updated Successfully` })
  })
  .catch(e => {
    res.status(500).json({ message: `Internal Server Error: Unable to update User` })
  })
}); // Update User

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


module.exports = router;
