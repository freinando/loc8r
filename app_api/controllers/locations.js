var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};


module.exports.locationsCreate = function (req, res) { 
	sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.locationsListByDistance = function (req, res) { 
	sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.locationsReadOne = async function (req, res) { 
	try{
		var location = await Loc.findById(req.params.locationid).exec();
		if (!location) sendJsonResponse(res, 404, {"message": "locationid not found"});
		else sendJsonResponse(res, 200, location);
	}catch(error){
		sendJsonResponse(res, 404, error);
	}
};

module.exports.locationsUpdateOne = function (req, res) { 
	sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.locationsDeleteOne = function (req, res) { 
	sendJsonResponse(res, 200, {"status" : "success"});
};