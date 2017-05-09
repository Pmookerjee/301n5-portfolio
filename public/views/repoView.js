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
    console.log(repos);
    repos.with('name').map(render);
  };

  module.repoView = repoView;
})(window);
