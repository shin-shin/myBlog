const express = require('express')
const router = express.Router();
const blogsCtrl = require('../controllers/blogs');

module.exports = router;

//Mount this router on '/blogs'
console.log('blogs ctrl is ' + blogsCtrl);

router.get('/', blogsCtrl.index)
router.post('/', blogsCtrl.newBlog)