'use strict';

(function(module) {
  const repos = {};

  repos.all = [];


  repos.requestRepos = function(callback) {

    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  //   $.get('https://api.github.com/user?access_token=')
  //     .then(user => {
  //       $.get(user.repos_url)
  //         .then(results => {
  //           results.forEach(repo => {
  //             repos.all.push(repo);
  //           })
  //           callback(repos);
  //         }, error => {
  //           console.log(error);
  //         });
  //     }, error => {
  //       console.log(error);
  //     });
  };
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
