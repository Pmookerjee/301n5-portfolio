'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    $('ul.repo_ul').empty();
  };

  var source   = $("#repo-template").text();
  var render = Handlebars.compile(source);

  repoView.index = function() {
    ui();
    repos.forEach(function(repo) {
      var html = render(repo);
      $('section#repos').append(html);
    })
  };

  module.repoView = repoView;
})(window);
