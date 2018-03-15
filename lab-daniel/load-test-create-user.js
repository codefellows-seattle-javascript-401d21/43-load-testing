'use strict';

const faker = require('faker');
const loadTestUser = module.exports = {};

loadTestUser.create = (userContext, events, done) => {
  userContext.vars.username = faker.internet.userName() + Math.random();
  userContext.vars.email = faker.internet.email();
  userContext.vars.password = faker.internet.password();

  userContext.vars.basicAuth = (new Buffer(`${userContext.vars.username}:${userContext.vars.password}`)).toString('base64');

  return done();
};