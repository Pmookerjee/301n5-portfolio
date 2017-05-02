'use strict';

(function(module) {
  const aboutController = {};

  aboutController.showAbout = () => {
    $('section#project').hide();
    $('section#about').show();


  }

  module.aboutController = aboutController;
})(window);
