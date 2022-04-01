const express = require('express').Router();
const { Router } = require('express');
const { route } = require('express/lib/application');
const userController = require('../controllers/user.controller')

Router.post('/addUser', userController.addUser);
Router.get('/showUser', userController.showUser);
Router.get('/updateUser', userController.updateUser);


module.exports = Router;