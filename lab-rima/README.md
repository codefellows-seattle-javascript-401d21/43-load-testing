## Lab-43 Load Test
##### Local host:
* High load not broken:
    duration: 20
    arrivalRate: 100
* High load broken:
    duration: 20
    arrivalRate: 1000

> All of requests were started processing in 300ms. It persistantly processed about 100 signups per sec. All errors(409) came from duplicated random hash key. They didn't come from breaking server. This means my server can handle 100 signup requests per sec, which is reasonable. When I tried arrivalRate 1000, my computer lagged so badly, I had to restart my computer.

##### Heroku:
* High load not broken:
    duration: 20
    arrivalRate: 100
* High load broken:
    duration: 20
    arrivalRate: 2000

> All of requests that succeeded finished processing in 5s. After phase one, it ramped up to 300 signup requests and persistantly processed. At about 4000 requests, it broke the server where it got a spike. 
