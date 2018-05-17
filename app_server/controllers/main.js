/* GET home page */
/*module.exports = {
	index : function(req, res){
		res.render('index', { title: 'Express' });
	}
};*/

module.exports.index = function(req, res){
	res.render('index', { title: 'Express' });
};