'use strict';

const faker = require('faker');
const loadTestUser = module.exports = {};

loadTestUser.create = (userContext,events,done) => {
//   userContext.vars.username = faker.hacker.noun();
//   userContext.vars.email = faker.hacker.noun();
//   userContext.vars.password = faker.hacker.noun();
//   userContext.vars.bio = faker.hacker.noun();

  userContext.vars.username = faker.internet.userName() + Math.random();
  userContext.vars.email = faker.internet.email();
  userContext.vars.password = faker.internet.password() + Math.random();
  userContext.vars.bio = faker.lorem.word();

  return done();
};

loadTestUser.getToken = (requestParams, response, context, ee, next) => {
    context.vars.token = response.body;
    return next();
  };