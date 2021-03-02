var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    img: '/images/Entry.png' 
  });
});



router.get('/index', function(req, res, next) {
  res.json({'img':'http://localhost:3000/images/Entry.png'});
});

router.post('/list', function(req, res, next) {
  res.json({
    bg: 'http://localhost:3000/images/background.jpg',
    weather: [
      {
        no: 0,
        poto: 'http://localhost:3000/images/refresh.png',
        name: 'Sydney'
      },
      {
        no: 1,
        poto: 'http://localhost:3000/images/refresh.png',
        name: 'Melbourne'
      },
      {
        no: 2,
        poto: 'http://localhost:3000/images/refresh.png',
        name: 'Brisbane'
      },
    ],
    leftbg: 'http://localhost:3000/images/leftArrow.png',
    rightbg: 'http://localhost:3000/images/rightArrow.png',
  });
}); 

router.get('/weather/:key', function(req, res, next) {
  var key = req.params.key;
  if (key == 0) {
    res.json('http://localhost:3000/images/cloudy.png');
  } else if (key == 1){
    res.json('http://localhost:3000/images/rain.png');
  }else if (key == 2){
    res.json('http://localhost:3000/images/snow.png');
  }
});

module.exports = router;
