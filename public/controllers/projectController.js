'use strict';

(function(module) {
  const projectController = {};

  projectController.showProjects = () => {
    $('section#about').hide();
    $('section#repos').hide();
    $('section#project').show();

  }

  module.projectController = projectController;
})(window);
