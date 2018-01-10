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

app.get('/api/login_check', (req, res) => {
  res.json(req.cookies.insta_access_token);
});

app.get('/api/authorize_user', (req, res) => {
  console.log("Authorizing User");
  res.redirect(instagram.get_authorization_url(redirect_uri, { scope: ['likes'], state: 'a state' }));
});

app.get('/handleauth', (req, res) => {
  console.log("Handleing Auth");
  instagram.authorize_user(req.query.code, redirect_uri, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Didn't work");
    } else {
      console.log('Yay! Access token is ' + result.access_token);
      res.cookie('insta_access_token', result.access_token);
      instagram.use({access_token: result.access_token});
      res.redirect('/');
    }
  });
});

app.get('/api/recentmedia', (req, res) => {
  instagram.use({access_token: req.cookies.insta_access_token});
  instagram.user_self_media_recent(
    {count: 12},
    (err, medias, pagination, remaining, limit) => {
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
    res.json(response[0].labelAnnotations);
  }).catch(err => {
    console.error(err);
  });


});

app.get('/api/logout', (req, res) => {
  res.clearCookie('insta_access_token');
  req.session.destroy();
  console.log('clearCookie');
});

app.get('*', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log("Express app is running on localHost:3000");
});
