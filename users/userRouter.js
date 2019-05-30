const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
    // if user id is is valid

    // return and store as req.user

    // else return error 400 invalid

};

function validateUser(req, res, next) {


};

function validatePost(req, res, next) {

};

module.exports = router;


