># Lab 43: Load Testing

The load tests were conducted using Artillery from https://artillery.io/.  Requests were made to the backend to sign up users to the app using mock data compiled with date from faker, combined with uuids.  Subsequent calls were then made to add a user profile to the database by capturing the bearer token from the first request and using it as authorization for the second request.  Tests were conducted to find a level that could be sustained and an upper level that would cause failures is an effort to gauge the breaking point.


## Local Host

```JSON
 "development": {
    "target": "http://localhost:3000",
    "phases": [ 
      {
        "duration": 2,
        "arrivalRate": 5
      },
      {
        "duration": 5,
        "arrivalRate": 60
      }
    ]
  }
}
```

```BASH
Started phase 0, duration: 2s @ 19:06:05(-0700) 2018-03-14
Started phase 1, duration: 5s @ 19:06:07(-0700) 2018-03-14
Report @ 19:06:13(-0700) 2018-03-14
  Scenarios launched:  1510
  Scenarios completed: 1510
  Requests completed:  3020
  RPS sent: 384.22
  Request latency:
    min: 5.4
    max: 834.5
    median: 473.4
    p95: 765.1
    p99: 811
  Codes:
    200: 3020

All virtual users finished
Summary report @ 19:06:13(-0700) 2018-03-14
  Scenarios launched:  1510
  Scenarios completed: 1510
  Requests completed:  3020
  RPS sent: 382.76
  Request latency:
    min: 5.4
    max: 834.5
    median: 473.4
    p95: 765.1
    p99: 811
  Scenario counts:
    Create users and set profile: 1510 (100%)
  Codes:
    200: 3020
```

When running load tests on localhost is maxes out around 60 users a second with a very high latency.  The performance is poor over all locally which seems to contradict reason.

Increasing the users to 400 a second creates connection reset errors.  This is also seen at lower kevels, hence having to drop all the way down to 60.  Even though the errors are low, the latency has almost quadrupled.

#### Over load

```JSON
"development": {
        "target": "http://localhost:3000",
        "phases": [ 
          {
            "duration": 2,
            "arrivalRate": 5
          },
          {
            "duration": 5,
            "arrivalRate": 400
          }
         ]
      }
    }
```


```BASH
Started phase 0, duration: 2s @ 19:07:01(-0700) 2018-03-14
Started phase 1, duration: 5s @ 19:07:03(-0700) 2018-03-14
Report @ 19:07:11(-0700) 2018-03-14
  Scenarios launched:  2010
  Scenarios completed: 1492
  Requests completed:  3421
  RPS sent: 398.28
  Request latency:
    min: 5.4
    max: 3898
    median: 1667.2
    p95: 3033.9
    p99: 3426.3
  Codes:
    200: 3421
  Errors:
    ECONNRESET: 3

Report @ 19:07:12(-0700) 2018-03-14
  Scenarios launched:  0
  Scenarios completed: 515
  Requests completed:  593
  RPS sent: 87.64
  Request latency:
    min: 215.3
    max: 4603.5
    median: 1150.2
    p95: 4273.2
    p99: 4556.6
  Codes:
    200: 593

All virtual users finished
Summary report @ 19:07:12(-0700) 2018-03-14
  Scenarios launched:  2010
  Scenarios completed: 2007
  Requests completed:  4014
  RPS sent: 366.51
  Request latency:
    min: 5.4
    max: 4603.5
    median: 1558.2
    p95: 3084.4
    p99: 4240.7
  Scenario counts:
    Create users and set profile: 2010 (100%)
  Codes:
    200: 4014
  Errors:
    ECONNRESET: 3
```



## Production 

```BASH
  "production": {
    "target": "https://d21401-39-backend.herokuapp.com",
    "phases": [
      {
        "duration": 5,
        "arrivalRate": 2
      },
      {
        "duration": 5,
        "arrivalRate": 400
      }
    ]
  },
```

```BASH
Started phase 0, duration: 5s @ 19:18:30(-0700) 2018-03-14
Started phase 1, duration: 5s @ 19:18:35(-0700) 2018-03-14
Report @ 19:18:40(-0700) 2018-03-14
  Scenarios launched:  1527
  Scenarios completed: 305
  Requests completed:  933
  RPS sent: 226.77
  Request latency:
    min: 76.1
    max: 3073.7
    median: 1483
    p95: 2856.4
    p99: 2973.2
  Codes:
    200: 933

Report @ 19:18:50(-0700) 2018-03-14
  Scenarios launched:  483
  Scenarios completed: 1314
  Requests completed:  2696
  RPS sent: 186.24
  Request latency:
    min: 2097.9
    max: 8460.5
    median: 4739.7
    p95: 6214.1
    p99: 6448.1
  Codes:
    200: 2696

Report @ 19:18:50(-0700) 2018-03-14
  Scenarios launched:  0
  Scenarios completed: 391
  Requests completed:  391
  RPS sent: NaN
  Request latency:
    min: 1406.3
    max: 5884.8
    median: 3637.5
    p95: 4707.2
    p99: 5664.6
  Codes:
    200: 391

All virtual users finished
Summary report @ 19:18:50(-0700) 2018-03-14
  Scenarios launched:  2010
  Scenarios completed: 2010
  Requests completed:  4020
  RPS sent: 199.9
  Request latency:
    min: 76.1
    max: 8460.5
    median: 4082.1
    p95: 6089.6
    p99: 6404.2
  Scenario counts:
    Create users and set profile: 2010 (100%)
  Codes:
    200: 4020
```

Surprisingly Heroku performed better than my local machine in terms of the number of users it could handle by the latency is still unacceptable.  As you can see, even though this are a few min times of sub 80mss the majority of the times are way above that thresh hold.


#### Overload

```JSON
 "production": {
        "target": "https://d21401-39-backend.herokuapp.com",
        "phases": [
          {
            "duration": 5,
            "arrivalRate": 2
          },
          {
            "duration": 10,
            "arrivalRate": 100
          }
        ]
      },
```

```BASH
Started phase 0, duration: 5s @ 19:23:00(-0700) 2018-03-14
Started phase 1, duration: 10s @ 19:23:05(-0700) 2018-03-14
Report @ 19:23:10(-0700) 2018-03-14
  Scenarios launched:  1506
  Scenarios completed: 405
  Requests completed:  1330
  RPS sent: 255.58
  Request latency:
    min: 79
    max: 2314.3
    median: 1232.4
    p95: 2053.1
    p99: 2276.4
  Codes:
    200: 1330

Report @ 19:23:20(-0700) 2018-03-14
  Scenarios launched:  3170
  Scenarios completed: 794
  Requests completed:  3334
  RPS sent: 451.2
  Request latency:
    min: 72.2
    max: 7247.6
    median: 3017.3
    p95: 5480.9
    p99: 6583.6
  Codes:
    200: 2090
    503: 1244
  Errors:
    ERR_INVALID_CHAR: 1180

Report @ 19:23:30(-0700) 2018-03-14
  Scenarios launched:  334
  Scenarios completed: 1209
  Requests completed:  2754
  RPS sent: 156.54
  Request latency:
    min: 65.7
    max: 11646.6
    median: 9037.1
    p95: 10996.4
    p99: 11506.6
  Codes:
    200: 2420
    503: 334
  Errors:
    ERR_INVALID_CHAR: 315

Report @ 19:23:33(-0700) 2018-03-14
  Scenarios launched:  0
  Scenarios completed: 1107
  Requests completed:  1107
  RPS sent: NaN
  Request latency:
    min: 6883.2
    max: 10187.4
    median: 8788.9
    p95: 9609.7
    p99: 10005.8
  Codes:
    200: 1107

All virtual users finished
Summary report @ 19:23:33(-0700) 2018-03-14
  Scenarios launched:  5010
  Scenarios completed: 3515
  Requests completed:  8525
  RPS sent: 259.83
  Request latency:
    min: 65.7
    max: 11646.6
    median: 4311.2
    p95: 10594.2
    p99: 11185.1
  Scenario counts:
    Create users and set profile: 5010 (100%)
  Codes:
    200: 6947
    503: 1578
  Errors:
    ERR_INVALID_CHAR: 1495
```