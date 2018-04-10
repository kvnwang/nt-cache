var redis = require("redis")
var REDIS_PORT = process.env.REDIS_URL || process.env.REDIS_PORT;
var client = redis.createClient(REDIS_PORT);


// TODO: Fix
module.exports.set = async (req, res, next) => {
  console.log(req.params)
  var key= req.params.key
  var value= req.params.data
  client.set(key, value, function(err, data){
    if(err) {
      res.send(err)
    } else {
      res.redirect("/")

    }
  })
};
// TODO: test deleteting when key is valid
module.exports.delete=async(req, res, next) => {
  var key= req.params.key
  client.del(key, function(err, response) {
    if (response == 1) {
      console.log("Succesful")
      res.redirect("/")
    } else{
      console.log("Unsuccesful")
      res.redirect("/")
    }
  });
}

// TODO: find out returning the data in response
module.exports.get=async (req, res, next)=> {
  var key= req.params.key
  client.get(key, function (err, data) {
    if(err) {
      res.send(err)
    } else if(data==null) {
      console.log("data not exist in cache")
      res.json({})
      return undefined;
    } else {
      userData = JSON.parse(JSON.stringify(data))
      res.json(userData)
      return userData
    }
  })
}
