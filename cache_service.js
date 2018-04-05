class Cache {
  constructor(height, width) {
      this.cacheService = require('redis.js')
  }

  function set (key, data) {
    cacheService.set(key, value)
  }

  function get(key, data) {
    cacheService.get(key, function (err, response){
      if (err || data==null) { // err is truthy if an actual error occurred
        return null;
      } else {
        client.get(cacheKey, function(err, data) {
          userData = JSON.parse(data)
          return userData
        });
      }
    })
  };

  function remove(key) {
    client.del(key, function(err, response) {
     if (response == 1) {
        console.log("Deleted Successfully!")
     } else{
      console.log("Cannot delete")
     }
   })
 }


}
