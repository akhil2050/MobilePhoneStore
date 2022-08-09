const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000'
};


const _renderCreatePage = function(req, res) {

    res.render('create', 
    { title : "Create new phone"});

};

const addNewPhone = function(req, res)
{
    _renderCreatePage(req, res);
};

const doAddNewPhone = function(req, res) {

    const path = '/api/createPhone';
    const postdata = {
        brand: req.body.brand,
        model: req.body.model,
        price: req.body.price,
        storage: req.body.storage,
        color: req.body.color,
        sellers: {
            sellerName: req.body.sellerName,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email
        }
    };
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postdata
    };
    console.log(postdata);
    request(
        requestOptions,
        (err, response, body) => {
            if(response.statusCode === 201)
            {
                res.redirect('/list');
            }
        }
    );

};



const phonelist = function(req, res){
    const path = '/api/phones';
    const requestOptions =  {
       url : apiOptions.server + path,
       method : 'GET',
       json : {}
    };
    request (
    requestOptions,
    (err, response, body) => {
        _renderHomepage(req, res, body);
    }
    );
};

const _renderHomepage = function(req, res, responseBody){ 
    console.log(responseBody);
    res.render('list-display', {
        title : 'Welcome to MyE-Store', subTtitile : 'Find the Right Cell Phone for You', phones : responseBody
    });
};


const phoneInfo = function(req, res){
    const path = '/api/phones/' + req.params.phoneid;
    const requestOptions =  {
       url : apiOptions.server + path,
       method : 'GET',
       json : {}
    };
    request (
    requestOptions,
    (err, response, body) => {
        _renderDetailpage(req, res, body);
    }
    );
};

const _renderDetailpage = function(req, res, responseBody){ 
    console.log(responseBody);
    res.render('details', {
        currentPhone : responseBody
    });
};

module.exports = {
    phonelist, phoneInfo, addNewPhone, doAddNewPhone
};
