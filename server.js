"use strict"

const express = require('express');
const requestProxy = require('express-request-proxy');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);
app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html')
});

app.listen(PORT, function(){
  console.log('Server is running on port: ' + PORT);
});
