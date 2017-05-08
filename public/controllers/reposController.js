'use strict';

(function(module) {
  const reposController = {};

  reposController.showRepos = () => {
    $('section#about').hide();
    $('section#project').hide();
    $('section#repos').show();

    repos.requestRepos(repoView.index);
  };
  module.reposController = reposController;
})(window);
