## 43: Load Testing

### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `lab-heath`. You will need to to run this command in your terminal `npm install -g artillery` and run `npm i` to load the faker.

* [link to local Host backend](https://github.com/Iamheathsmith/19-deployment()

#### Running your min test.

to run the local host min test, you must start your backend up with these commands

start your DataBase
```javascript
node run start-db
```

start your Server
```javascript
node run start
```


### Running your loadtest locally

navigate to `lab-heath` and enter `artillery run max-load.test.json` for the max test and `artillery run complex-load.test.json`

### Running test on deployed site

run this code from the same file as above. `artillery run complex-load.test.deployed.json` and to do a max test run `artillery run max-load.test.deployed.json` (i got up to 200 arrivalRate over 10 secs and i dont want to go higher to get my app to be shut down)

### finding

I found that is a great tool to use to find out how well your backend works and how well the deployed site will handle it as well. from my finding, you can really push your local host a lot more then a deployed site.  I found that i could do 3 times as much then a deployed site.