var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const Calculation=require('./util/calculation').Calculation
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('./User');

// CREATES A NEW USER
router.post('/register', function (req, res) {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    },
        function (err, user) {
            if (err) return res.status(500).send({"errorMsg":"There was a problem adding the information to the database."});
            res.status(200).send(user);
        });
});
router.post('/inputscreen', function (req, res) {   
   try{
    let  calculation=new Calculation();
    let income=req.body.income
    let activity=req.body.activity;
    let resp=calculation.calulation(income,activity);
    res.status(200).send(resp);
   }catch(e)
   {
       console.log("ERROR"+e)
    return res.status(500).send({"errorMsg":"IPAC temp unavailable."});
   }
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/all', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/login', function (req, res) {
    User.find({"name":req.query.name}, function (err, user) {
        console.log(req.query.name);        
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");        
        if(user[0].password===req.query.pwd)
            {               
                let success={
                    "login":true
                }
                res.status(200).send(success);
            }
        else{
            res.status(500).send("User name or password entered does not match");
        }
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: " + user.name + " was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});


module.exports = router;