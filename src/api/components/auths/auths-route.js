const express = require('express');

const authsController = require('./auths-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/authentication', route);

  route.post('/login', authsController.loginUser);
};