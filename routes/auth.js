const express = require('express');
const { signup, signin, signout } = require('../controllers/auth');
const {userSignupValidator} = require('../validator/index');
const {userById} = require('../controllers/user');

const router = express.Router();

router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

// for any route :userId, first will be executed userById()
router.param("userId", userById)

module.exports = router;