var util = require('util');
/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
*/
exports.testWeb = function(params, callback) {
  console.log("Testing web calls")
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
      console.log("Response size is " + data.length);
    }
    return callback(err, result);
  })
}

exports.testCreateCache = function(params, callback){
  console.log("Testing create cache")
  var key = "foo";
  var value = "bar";
  $fh.cache({
    act: "save",
    key: key,
    value: value
  }, function(err, res) {
    if (err) {
      console.log(err.toString());
    } else {
      console.log(res.toString());
    }
    return callback(err, res)
  })
}

exports.testLoadCache = function(params, callback) {
  console.log("Testing load cache");
  $fh.cache({
    act: "load",
    key: "foo"
  }, function(err, res) {
    if (err) {
      console.log(err.toString());
    } else {
      console.log(res.toString());
    }
    return callback(err, res)
  })  
}

exports.testRemoveCache = function(params, callback){
  console.log("Testing remove cache");
  //remove
  $fh.cache({
    act: "remove",
    key: "foo"
  }, function(err, res) {
    if (err) {
      console.log(err.toString());
    } else {
      console.log(res.toString());
    }
    return callback(err, res)
  })
}




