/* GET home page */
/*module.exports = {
	index : function(req, res){
		res.render('index', { title: 'Express' });
	}
};*/

module.exports.about = function(req, res){
	res.render('generic-text', { title: 'About' });
};