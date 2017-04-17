'use strict';

const projectView = {};

projectView.initIndexPage = function() {
  Project.all.forEach(function(project) {
    // console.log(Project.all);
    $('#project').append(project.toHtml());
  });
}
