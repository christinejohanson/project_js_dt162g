var express = require('express');
var router = express.Router();

var users = [{"_id":"0","name":"Mussi","goals":"6"},
{"_id":"1","name":"Gnessi","goals":"8"},
     {"_id":"2","name":"Zoltan","goals":"9"},
          {"_id":"10","name":"Charlie Anka","goals":"35"}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  for(var i=0; i < users.length; i++){
          console.log(users[i].name);
     }
     var jsonObj = JSON.stringify(users);
     res.contentType('application/json');
     res.send(jsonObj);
});

module.exports = router;
