'use strict';

const faker = require('faker');
const loadTestUser = module.exports = {};

loadTestUser.create = (userContext,events,done) => {
  //TODO : Research a different faker library or add a salt
  userContext.vars.username = faker.internet.userName() + Math.random() + Math.random();
  userContext.vars.email = faker.internet.email();
  userContext.vars.password = faker.internet.password() + Math.random() + Math.random();

  return done();
};