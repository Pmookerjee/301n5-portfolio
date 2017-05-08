'use strict';

(function(module) {
  const repoView = {};

  // REVIEW: Private methods declared here live only within the scope of the wrapping IIFE.
  // const ui = function() {
  //   let $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.
  //
  //   $about.find('ul').empty();
  //   $about.show().siblings().hide();
  // };

  // TODO: Remember that new Handlebars template? Let's compile it!
  // Save the result in this `render` variable.
  var source   = $("#repo-template").text();
  var render = Handlebars.compile(source);

  repoView.index = function(repos) {
    // ui();
    console.log('repos in repoview is ', repos);
    // The jQuery `append` method lets us append an entire array of HTML elements at once:
    $('section#repos').append(
      repos.with('name').map(render) // Want to filter by a different property other than name?
    );
  };

  module.repoView = repoView;
})(window);
