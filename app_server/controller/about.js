const about = function(req, res){
    res.render('about', {title : 'About MyE-Store', whoWeAre : 'At MyE-Store, you’ll find a huge selection of the latest cell phones on the market with innovative features'});
};

const displayNot = function(req, res){
    res.render('display', {title : 'NOT IMPLEMENTED'});
};


module.exports = {
    about, displayNot
};