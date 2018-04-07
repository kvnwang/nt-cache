var redis = require("redis")
var REDIS_PORT = process.env.REDIS_URL || process.env.REDIS_PORT;
var client = redis.createClient(REDIS_PORT);

module.exports.set = async (req, res, next) => {
  var key= req.params.key
  var data= req.params.data
  client.set(key, value)
};

module.exports.delete=async(req, res, next) => {
  var key= req.params.key
  var data= req.params.data

  client.del(key, function(err, response) {
    if (response == 1) {
      console.log("Deleted Successfully!")
    } else{
      console.log("Cannot delete")
    }
  });
}

module.exports.get=async (req, res, next)=> {
  var key= req.params.key
  client.get(key, function (err, response){
    if (err || data==null) { // err is truthy if an actual error occurred
      return undefined;
    } else {
      userData = JSON.parse(data)
      return userData
    }
  })
}
