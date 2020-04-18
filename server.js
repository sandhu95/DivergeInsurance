console.log('Server-side code running');
const express = require('express');
const app = express();
app.set('view engine', 'ejs')
const MongoClient = require("mongodb").MongoClient;


const bodyParser= require('body-parser')
const url = "mongodb://localhost:27017/GrowingTogether";
const err = console.error();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))


MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
      return console.log(err);
    }
    console.log('Connected to Database')
      db = client.db("GrowingTogether");
    // start the express web server listening on 8080
    app.listen(8081, () => {
      console.log("listening on 8081");
    });
  });


app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
  });



  app.get('/staff', (req, res) => {
    db.collection('staff').find().toArray()
      .then(results => {
        res.render('staff.ejs', { staff: results })
      })
      .catch(/* ... */)
  })

  app.get('/products', (req, res) => {
    db.collection('product').find().toArray()
      .then(results => {
        res.render('product.ejs', { product: results })
      })
      .catch(/* ... */)
  })
  
  app.get('/departments', (req, res) => {
    db.collection('department').find().toArray()
      .then(results => {
        res.render('department.ejs', { department: results })
      })
      .catch(/* ... */)
  })

  app.get('/policy', (req, res) => {
    db.collection('policy').find().toArray()
      .then(results => {
        res.render('policy.ejs', { policy: results })
      })
      .catch(/* ... */)
  })