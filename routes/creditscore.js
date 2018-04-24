var util = require('util');

exports.response = function(req, res){
  console.log('Request body: ' + util.inspect(req.body));
  var firstname = req.body.firstname,
      message = req.body.message;   
  
  var response = `Hello Fellow Traveller, your message was received, thankyou ${firstname}`
    
  var resultData = { "firstname": firstname, 
		  "message": message, 
		   "response": response
		};
  
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(resultData));
};


