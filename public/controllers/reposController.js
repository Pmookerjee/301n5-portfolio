'use strict';

(function(module) {
  const reposController = {};

  reposController.index = () => {
    $('section#about').hide();
    $('section#project').hide();
    $('section#resources').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };
  module.reposController = reposController;
})(window);
