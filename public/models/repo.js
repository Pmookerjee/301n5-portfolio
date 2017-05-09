'use strict';

(function(module) {
  const repos = {};

  repos.all = [];


  repos.requestRepos = function(callback) {

    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err)) // es6 syntax arrow functions
    .then(callback);
    // $.get('https://api.github.com/user?access_token=' + window.gitToken)
    //   .then(user => {
    //     $.get(user.repos_url + '?access_token=' + window.gitToken)
    //       .then(results => {
    //         results.forEach(repo => {
    //           repos.all.push(repo);
    //         })
    callback(repos.all);
      //     }, error => {
      //       console.log(error);
      //     });
      // }, error => {
      //   console.log(error);
      // });
  };
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
