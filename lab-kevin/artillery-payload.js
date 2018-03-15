const faker = require('faker');
const uuid = require('uuid/v1');

const loadTest = module.exports =  {};

loadTest.createUserData = (userContext, events, done) => {
  
  let userName = `${faker.internet.userName()}_${uuid()}`;
  userContext.vars.username = userName; 
  userContext.vars.email = `${userName}@${faker.internet.domainWord()}.com`;
  userContext.vars.password = `${faker.hacker.noun()}${uuid()}`;
  userContext.vars.password = `${faker.hacker.phrase()}`;

  return done();
};


loadTest.getToken = (requestParams, response, context, ee, next) => {
  context.vars.token = response.body;
  return next();
};
