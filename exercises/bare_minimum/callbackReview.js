/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  // TODO
  fs.readFile(filePath, 'utf8', function (err, content) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, content.split('\n')[0]);
    }
  });


};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request(url, function (err, response, body) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response.statusCode);
    }
  });

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
