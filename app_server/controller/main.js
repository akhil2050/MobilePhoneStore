const index = function(req, res){
    res.render('index', {title : 'Welcome to MyE-Store'});
};

module.exports = {
    index
};