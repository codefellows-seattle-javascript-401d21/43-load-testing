'use strict';

const faker = require('faker');
const loadTestUser = module.exports = {};

loadTestUser.create = (userContext,events,done) => {
  userContext.vars.username = faker.internet.userName() + Math.random();
  userContext.vars.email = faker.internet.email();
  userContext.vars.password = faker.internet.password() + Math.random();

  userContext.vars.bio = faker.lorem.words(10);
  userContext.vars.avatar = faker.image.imageUrl();
  userContext.vars.firstName = faker.name.firstName();
  userContext.vars.lastName = faker.name.lastName();

  return done();
};

loadTestUser.getToken = (requestParams, response, context, ee, next) => {
    context.vars.token = response.body;
    return next();
  };