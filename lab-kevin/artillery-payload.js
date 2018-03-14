const faker = require('faker');
const uuid = require('uuid/v1');

module.exports =  (userContext, events, done) => {
  
  let userName = `${faker.internet.userName()}_${uuid}`;
  userContext.vars.username = userName; 
  userContext.vars.email = `${userName}@${faker.internet.domainWord}.com`;
  userContext.vars.password = `${faker.hacker.noun}${uuid}`;

  return done();
};

