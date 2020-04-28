const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL()); //enable this once ssl has been set up.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors());
app.use(express.static('dist/thedariFair'));
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname,'dist/thedariFair/index.html'));
// });
app.get('*', function (req, res) {
  const index = path.join(__dirname, 'dist/thedarifair', 'index.html');
  res.sendFile(index);
});

app.listen(process.env.PORT || 8888, function() {
  console.log('Listening on port ' + this.address().port);
});

