/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');

var pluckFirstLineFromFileAsync = require('./promiseConstructor').pluckFirstLineFromFileAsync;
var getGitHubProfileAsync = require('./promisification').getGitHubProfileAsync;
var writeFileAsync = Promise.promisify(fs.writeFile);

// promises return an object that have a "then" property
// "then" property takes in a callback that receives the result of your promise
var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return pluckFirstLineFromFileAsync(readFilePath) 
    // .then(function (username) {   //why does this not work?!!?!?
    //   getGitHubProfileAsync(username);
    // })
    .then(getGitHubProfileAsync)
    .then(function(jsonResponse) {
      return writeFileAsync(writeFilePath, JSON.stringify(jsonResponse));
    })
    .catch(function (err) {
      console.log(err);
    }); 
}; 

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
