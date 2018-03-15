#Testing user usage capacity on an application
Re-watch lecture video part 2 on json file understanding how it connects to our js file and

#.json File OverView
arrival rate allows you to input how many users (usage) you want to test for

our "capture" moment in .json file captures the token from the user signing in or signing up and renders that token...

our first Post request creates the users profile by username email and password

2nd post request creates the profile according to the users name, and email

#arrival rate
alter the arrival-rate number to increase and decrease your user usage to find the exact breaking point

arrival rate is the user rate over duration(how many users)
so arrival rate at 100 and duration at 5 is 100 users per 5 seconds

user faker uuid
math.random for randomizing numbers or ID's
look into other randomizing libraries to test for applications efficiently

#DEPLOYMENT
paste in your URL in "target": "" in .json file WITHOUT a trailing "/" at the end

#Lab
test for signup and a user event like creating a profile, uploading a picture, etc.