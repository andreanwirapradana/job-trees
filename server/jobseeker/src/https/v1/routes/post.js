const route = require('express').Router();
const findOne = require('../controllers/post/findOne');
const findAll = require('../controllers/post/findAll');
const edit = require('../controllers/post/editPost');
const add = require('../controllers/post/addPost');
const deletePost = require('../controllers/post/deletePost');

route.get('/', findAll.execute);
route.post('/addNewPost', add.execute);
route.get('/:id', findOne.execute);
route.put('/edit/:id', edit.execute);
route.delete('/delete/:id', deletePost.execute);

module.exports = route;