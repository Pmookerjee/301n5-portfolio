'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $repo_section = $('section#repos'); // Best practice: Cache the DOM query if it's used more than once.

    $repo_section.find('ul').html(' ');
  };

  var source   = $("#repo-template").text();
  var render = Handlebars.compile(source);

  repoView.index = function(repos) {
    ui();
    repos.forEach(function(repo) {
      var html = render(repo);
      $('section#repos').append(html);
    })

  };

  module.repoView = repoView;
})(window);
