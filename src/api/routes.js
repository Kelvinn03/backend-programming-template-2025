const express = require('express');

const books = require('./components/books/books-route');
const users = require('./components/users/users-route');
const auths = require('./components/auths/auths-route');

module.exports = () => {
  const app = express.Router();

  books(app);
  users(app);
  auths(app);

  return app;
};