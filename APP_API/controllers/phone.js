var mongoose = require('mongoose');
var Phone = mongoose.model('Phone')

const getPhones = function(req, res) 
{
    Phone
    .find()
    .exec(function(err, phonedata){
        if(err){
            res
            .status(404)
            .json(err);
        }
        res
            .status(200)
            .json(phonedata);
    });
    
};

// insert
const createPhone = function(req, res) 
{
    Phone.create({
        brand: req.body.brand,
        model: req.body.model,
        price: req.body.price,
        storage: req.body.storage,
        color: req.body.color,
        sellers: {
            sellerName: req.body.sellers.sellerName,
            phoneNumber: req.body.sellers.phoneNumber,
            email: req.body.sellers.email
        }
    }, (err, phonedata) => {
           if(err)
           {
            res
            .status(400)
            .json(err);
           }
           else 
           {
            res
            .status(201)
            .json(phonedata);
           }      
        
    });
    
};
// single page
const getSinglePhone = function(req, res) 
{
    Phone 
    .findById(req.params.phoneid) 
    .exec((err, phonedata) => {     
  res 
    .status(200) 
    .json(phonedata); 
  }); 
    
};
// update
const updatePhone = function(req, res) 
{
    if(!req.params.phoneid)
    {
    res
    .status(404)
    .json({"Message" : "Not found, phoneid is required"});
    return;
    }
    Phone.findById(req.params.phoneid)
    .exec((err, phonedata) => { 
        if(!phonedata)
        {
            res
            .status(404)
            .json({"message" : "phoneid is not found"});
            return;
        }
        else if(err)
        {
            res
            .status(400)
            .json(err);
            return;
        }
        phonedata.brand = req.body.brand;
        phonedata.model = req.body.model;
        phonedata.price = req.body.price;
        phonedata.storage = req.body.storage;
        phonedata.color = req.body.color;
        phonedata.sellers = {
            sellerName: req.body.sellers.sellerName,
            phoneNumber: req.body.sellers.phoneNumber,
            email: req.body.sellers.email
        }

        phonedata.save((err, phonedata) => {
            if(err)
            {
            res
            .status(404)
            .json(err);
            }
            else
            {
            res
            .status(200)
            .json(phonedata);
            }
        });
    });
};

// Delete
const deletePhone = function(req, res) 
{
    const phoneid = req.params.phoneid
    if(phoneid)
    {
        Phone
        .findByIdAndRemove(phoneid) 
        .exec((err, phonedata) => {     
            if(err)
           {
            res
            .status(404)
            .json(err);
            return;
           }
           res
            .status(204)
            .json(null);
        });
    }
    else 
    {
    res
    .status(404)
    .json({"Message" : "No phoneid"});
    }  
};


module.exports = {
    getPhones,
    createPhone,
    getSinglePhone,
    updatePhone,
    deletePhone
};


