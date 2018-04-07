var redis = require("redis")
var REDIS_PORT = process.env.REDIS_URL || process.env.REDIS_PORT;
var client = redis.createClient(REDIS_PORT);


function set (key, data) {
  client.set(key, value)
}

function get(key, data) {
  client.get(key, function (err, response){
    if (err || data==null) { // err is truthy if an actual error occurred
      return null;
    } else {
      userData = JSON.parse(data)
      return userData
    }
  })
}


function remove(key) {
  client.del(key, function(err, response) {
    if (response == 1) {
      res.redirect('back');
    } else{
      console.log("Cannot delete")
    }
  })
}
