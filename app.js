const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const instagramNode = require('instagram-node');
const keys = require('./keys.json');
const vision = require('@google-cloud/vision')({
  projectId: keys.projectId,
  keyFilename:keys.keyFilename
});

const app = express();
const instagram = instagramNode.instagram();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use('/static', express.static('client'));
app.set('view engine', 'pug');

const redirect_uri = 'http://localhost:3000/handleauth';

instagram.use({
  client_id: keys.client_id,
  client_secret: keys.client_secret
  });

app.get('/api/authorize_user', (req, res) => {
  res.redirect(instagram.get_authorization_url(redirect_uri, { scope: ['likes'], state: 'a state' }));
});
// This is your redirect URI
app.get('/handleauth', (req, res) => {
  instagram.authorize_user(req.query.code, redirect_uri, (err, result) => {
    if (err) {
      console.log(err.body);
      res.send("Didn't work");
    } else {
      console.log('Yay! Access token is ' + result.access_token);
      res.cookie('insta_access_token', result.access_token);
      instagram.use({access_token: result.access_token});
    }
  });
});

app.get('/api/recentmedia', (req, res) => {
  instagram.use({access_token: req.cookies.insta_access_token});
  instagram.user_self_media_recent(
    {count: 12},
    (err, medias, pagination, remaining, limit) => {
//      console.log(medias);
      res.json(medias);
    });
});

///////

app.get('/api/findtags', (req, res) => {
  console.log("img_url : "+req.query.img_url);


  var image = {
    source: {imageUri: req.query.img_url}
  };
  vision.labelDetection(image).then(response => {
    // doThingsWith(response);
    console.log(response[0].labelAnnotations);
    res.json(response[0].labelAnnotations);
  }).catch(err => {
    console.error(err);
  });


});

app.post('/api/logout', (req, res) => {
  req.clearCookie('insta_access_token')
});

app.get('*', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log("Express app is running on localHost:3000");
});