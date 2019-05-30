const express = require('express');

const router = express.Router();

const userDb = require('./userDb')
const postDb = require('../posts/postDb')

router.post('/', (req, res) => {

}); // Add User

router.post('/:id/posts', (req, res) => {

}); //

router.get('/', (req, res) => {

}); // Get Users

router.get('/:id', (req, res) => {

}); // Get User by ID

router.get('/:id/posts', (req, res) => {

}); // Get User Posts

router.delete('/:id', (req, res) => {

}); // Delete User by ID

router.put('/:id', (req, res) => {

}); // Update User

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
