var util = require('util');
/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
*/
exports.testWeb = function(params, callback) {
  console.log("testing web calls")
  $fh.web({
    url: "http://www.google.com",
    method: "GET",
    contentType: "text/html",
    charset: "UTF-8",
    period: 60000 //cache for 1 min
  }, function(err, result) {
    if (err) {
      console.log("Error : " + err.message);
    } else {
      var data = result.body;
      console.log("Response is " + data.length);
    }
    return callback(err, result);
  })
}

exports.testCreateCache = function(params, callback){
  
}


//load
$fh.cache({
  act: "load",
  key: key
}, function(err, res) {
  if (err) {
    console.log(err.toString());
  } else {
    console.log(res.toString());
  }
})

//remove
$fh.cache({
  act: "remove",
  key: key
}, function(err, res) {
  if (err) {
    console.log(err.toString());
  } else {
    console.log(res.toString());
  }
})