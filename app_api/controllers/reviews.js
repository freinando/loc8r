var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.reviewsCreate = function (req, res) { 
	sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.reviewsReadOne = async function (req, res) { 
	try{
		var location = await Loc.findById(req.params.locationid).select('name reviews').exec();
		if(!location) sendJsonResponse(res, 404, {"message": "locationid not found"});
		else {
			if(location.reviews && location.reviews.length > 0){
				var review = location.reviews.find(req.params.reviewid);
				if(!review) sendJsonResponse(res, 404, {"message": "reviewid not found"});
				else sendJsonResponse(res, 200, review);
			}
			else sendJsonResponse(res, 404, {"message": "No reviews found for this location"});
		}
	}catch(error){
		sendJsonResponse(res, 404, error);
	}
};

module.exports.reviewsUpdateOne = function (req, res) { 
	sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.reviewsDeleteOne = function (req, res) { 
	sendJsonResponse(res, 200, {"status" : "success"});
};
