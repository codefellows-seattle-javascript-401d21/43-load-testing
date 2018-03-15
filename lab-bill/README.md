This is a project designed to stress test a server. To use this program install Artillery globally on your machine. Also install hacker locally. To change the url you want to test visit the complex-load-test.json file and change the url to your specific site. 

In your command line you can run 
```
~ artillery run complex-load-test.json
```
The third argument is used to specify what file you want to run the artillery tests from. 

Presenting this to a client I would say that the heroku app has a relatively bad latency time. At a rate of 10 tests per second the latency was around 300 ms, compared to on a local device would be less than 10. 

The site also crashed at a rate of 20 requests per second. The latency was around 400 ms for these requets, which is not too different from before but at this rate a number of 409 and 503 errors were encountered. Which means our server was unable to handle multiple requests and errors were sent back to users. 