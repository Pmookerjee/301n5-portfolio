'use strict';

const projectView = {};

projectView.initIndexPage = function() {
  Project.all.forEach(function(prop) {
    $('#project').append(prop.toHtml())
  });
}
