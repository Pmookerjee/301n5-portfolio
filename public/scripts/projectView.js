'use strict';

const projectView = {};

projectView.initIndexPage = function() {

  Project.all.forEach(function(project) {
    $('#project').append(project.toHtml());
  });
}
