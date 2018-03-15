# Lab 43: Load testing

## This repository contains files to stress test a site.

The simple load test should not overload the server and should return valid status codes.

The complex load test attempts to overload the server and test error codes and error responses.

To install artillery: npm i -g artillery

To install dependencies: npm i faker

To run test:

artillery run simple-load-test.json
artillery run complex-load-test.json
