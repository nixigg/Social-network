const express = require('express');
const router = express.Router()
const { getPosts, createPost, postsByUser, postById, isPoster, updatePost, deletePost} = require('../controllers/post');
const {userById} = require('../controllers/user');
const { requireSignin } = require('../controllers/auth');
const {createPostValidator} = require('../validator/index');


router.get('/posts', requireSignin, getPosts);
router.post('/post/new/:userId', requireSignin, createPost, createPostValidator );
router.get('/posts/by/:userId', requireSignin, postsByUser );
router.put('/post/:postId', requireSignin, isPoster, updatePost);
router.delete('/post/:postId', requireSignin, isPoster, deletePost);

// for any route :userId, first will be executed userById()
router.param("userId", userById)
// for any route :postId, first will be executed postById()
router.param('postId', postById)

module.exports = router;