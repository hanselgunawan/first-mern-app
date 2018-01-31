var express = require('express');
var router = express.Router();
var NYT = require('../../models/NYT');

router.get('/', function(req, res){
    res.render('index')
});

router.route('/insert').post(function (req, res) {
    let nyt = new NYT();
    nyt.headline = req.body.headline;
    nyt.web_url = req.body.web_url;
    nyt.saved_date = req.body.saved_date;

    NYT.find({headline: req.body.headline}, function (error, result) {
        if(!result.length)
        {
            nyt.save(function (err) {
                if(err) res.send(err);
                res.send('Article successfully added!');
            });
        }
    });
});

router.route('/update').post(function (req,res) {
    const doc = {
        headline:req.body.headline,
        web_url:req.body.web_url,
        saved_date:req.body.saved_date
    };
    console.log(doc);

    NYT.update({_id:req.body._id}, doc, function (err,result) {
        if(err)res.send(err);
        res.send('Expense successfully updated!');
    });
});

router.get('/delete', function (req,res) {
    var id = req.query.id;
    NYT.find({_id:id}).remove().exec(function (err, nyt) {
        if(err) res.send(err);
        res.send('Expense successfully deleted!');
    });
});

router.get('/getAll', function (req,res) {
    NYT.find({}, function (err, result) {
        if(err) res.send(err);
        res.json(result);
    });
});

module.exports = router;