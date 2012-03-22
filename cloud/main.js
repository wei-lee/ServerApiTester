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

exports.testFeed = function(params, callback){
  console.log("Testing get feed");
  $fh.feed({
    'link': "http://www.feedhenry.com/feed",
    'list-max': 10
  }, function(err, result) {
    if (err) {
      console.log("Error is : " + err.message)
    } else {
      if(result.list){
        entries = result.list
      } else {
        entries = JSON.parse(result.body).list;
      }
      for (var i = 0; i < entries.length; i++) {
        console.log("Entry title : " + entries[i].fields.title + " : Content : " + entries[i].fields.description);
      }
    }
    return callback(err, result)
  })
}

exports.testSession = function(params, callback){
  console.log("Testing session");
  var sessionData = JSON.stringify({"foo":"bar"});
  var sessionId = "randomId000000";

    //save a new session
   $fh.session.set(sessionId, sessionData, 0, function(err, res){
      
      if(err){
        console.log(err)    
      } else {
        console.log("Session saved. Session id is " + res)
        $fh.session.get(sessionId, function(err, res){
          if(err){
            console.log(err)    
          } else {
            console.log("Session loaded. Session data is " + res);
            $fh.session.remove(sessionId, function(err, res){
              if(err){
                console.log(err)    
              } else {
                if(res){
                   console.log("Session " + sessionId + " removed.");
                   return callback(null, {"result":"done"});
                } else {
                   console.log("Failed to remove session " + sessionId);
                }
              
              }
            })
          }
        })
      }
    })
}


exports.testDbCreate = function(params, callback){
  console.log("test db create")
  $fh.db({
  "act": "create",
  "type": "myFirstEntity",
  "fields": {
    "firstName": "Joe",
    "lastName": "Bloggs",
    "address1": "22 Blogger Lane",
    "address2": "Bloggsville",
    "country": "Bloggland",
    "phone": "555-123456"
  }
}, function(err, data) {
  if (err) {
    console.log("Error " + err)
  } else {
    console.log(JSON.stringify(data))
    return callback(err, data);
  }
});
}



