const express = require("express");
const router = express.Router();

const { createpost, readposts, readsinglepost, updatesinglepost, deletesinglepost, deletemanypost } = require('../controllers/post');


router.post('/createpost', createpost);
router.get('/viewpost', readposts);
router.get('/viewsinglepost/:id', readsinglepost);
router.put('/updatesinglepost/:id', updatesinglepost);
router.delete('/deletesinglepost/:id', deletesinglepost);
router.delete('/deletemanypost', deletemanypost);

module.exports = router;