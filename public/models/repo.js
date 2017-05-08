'use strict';

(function(module) {
  const repos = {};



  repos.requestRepos = function(callback) {
    repos.all = [];
    $.get('https://api.github.com/user?access_token=' + window.gitToken)
      .then(user => {
        $.get(user.repos_url + '?access_token=' + window.gitToken)
          .then(results => {
            results.forEach(repo => {
              repos.all.push(repo);
            })
            callback(repos.all);
          }, error => {
            console.log(error);
          });
      }, error => {
        console.log(error);
      });
  };
  module.repos = repos;
})(window);
