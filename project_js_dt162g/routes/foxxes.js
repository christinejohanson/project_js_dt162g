var express = require('express');
var router = express.Router();


const bodyParser = require('body-parser');
router.use(
    bodyParser.urlencoded({
      extended: true
    })
)
router.use(bodyParser.json());

/* DATABASE AND CONNECTION */

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/foxonscreen', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise; // Global use of mongoose

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) { // Add the listener for db events 
    console.log("kopplat till db");

    // Create DB scheme 
    var foxxesSchema = mongoose.Schema({
        name: String,
        birthyear: Number,
        nationality: String,
        spouse: String,
        movies: Array
    });

    // Create scheme model
    var Foxxes = mongoose.model('Foxxes', foxxesSchema)

    /* GET COMPLETE LIST FOXES */
    router.get('/', function (req, res, next) {

        // Läs ut från databasen
        Foxxes.find(function (err, foxxes) {
            if (err) return console.error(err);
            var jsonObj = JSON.stringify(foxxes);
            res.contentType('application/json');
            res.send(jsonObj);
            console.log("hämtat alla från foxxes");
        });
    });  
    
    /* GET FOX W UNIQUE ID */   
      router.get('/:id', function (req, res, next) {
        var id = req.params.id;
        
        //Get user _id from db
        Foxxes.findById({"_id": id }, function (err, foxxes) {
            //Course.findOne({ "_id": id }, function (err) {
            if (err) return handleError(err);
            //använd mongoose.
            var jsonObj = JSON.stringify(foxxes);
            res.contentType('application/json');
            res.send(jsonObj);
        });
      });
    

    /* ADD NEW FOXX */
    router.post('/', function(req, res, next) {
    // Create a new foxx
    var foxxesNew = new Foxxes({ 
        name: req.body.name,
        birthyear: req.body.birthyear,
        nationality: req.body.nationality,
        spouse: req.body.spouse,
        movies: req.body.movies

    });	

    // Save new user to db
    foxxesNew.save(function(err) {
        if(err) return console.error(err);
    });

	var jsonObj = JSON.stringify(foxxesNew);
	res.contentType('application/json');
	res.send(jsonObj);

    });
    
        
    /* UPDATE FOX W UNIQUE ID */
    router.put('/:id', function (req, res, next) {
        var id = req.params.id;

        var foxxesUpdate = {
            name: req.body.name,
            birthyear: req.body.birthyear,
            nationality: req.body.nationality,
            spouse: req.body.spouse,
            movies: req.body.movies
        };
        //update fox id in db
        Foxxes.findByIdAndUpdate(id, foxxesUpdate, function (err) {
            if (err) {
                res.send(err);
            }
            else {
                res.json({ message: "Foxxen är nu uppdaterad" });
            }
        });
    });
       
    /* DELETE FOX W UNIQUE ID */
    router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    
    // Delete fox _id from db
    Foxxes.deleteOne({ "_id": id }, function (err) {
        if (err) return handleError(err);
    });
    
    //Get the new foxxes list from db as response data
    Foxxes.find(function(err, foxxes) {
        if(err) return console.error(err);
    
        var jsonObj = JSON.stringify(foxxes);
        res.contentType('application/json');
        res.send(jsonObj);
    });
    });   

});
module.exports = router;