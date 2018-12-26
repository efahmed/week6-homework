Related homework
These are instruction for further exercise on promises.

Read the steps in order, as you're not supposed to fork this repository but rather create your own.

Step 1: create your own repo
Note: You might require to google informations if you don't remember how to do everything! Even better, do this together as a part of a group call.

Create a new folder in your computer called week6_homework.
Initialise a new git repository inside the folder.
Create a new repository called week6-homework on Github. Keep it empty, don't add Readme or License.
Add the new Github repository address as a remote called origin to your local git repository.
Create a README.md file and write a small description.
Commit and push to Github.
Post the link in the class channel.
Step 2:
In your homework repository, create a new file called 01_promise.js.
Write a function that returns a promise. This promise should resolve, returning the string "success".
Commit and push.
Step 3:
In your homework repository, create a new file called 02_promiseSelector.js.
Write a function that returns a promise. This promise should resolve, returning the string "success", if the function is passed true as argument. Otherwise, it should reject with the string "failure".
Commit and push.
Step 4:
In your homework repository, create a new file called 03_promiseDelay.js.
Write a function that returns a promise. This promise should resolve, returning the string "success", after 1 second.
use setTimeout() to implement the delay.
Commit and push.
Step 5:
In your homework repository, create a new file called 04_promisifiedTimeout.js.
Write a function that returns a promise. This promise should resolve, returning the string "success", after the amount of milliseconds passed as an argument to the function.
use setTimeout() to implement the delay.
note: you effectively 'promisified' setTimeout(), transforming a function that use the callback pattern to one that use promises!
Commit and push.