'use strict';

((module) => {

  const projectView = {};

  projectView.initIndexPage = function() {

    Project.all.forEach(function(project) {
      $('#project').append(project.toHtml());
    });
  }

  $(function(){
    $(".boxes").glow({ radius: "10", color:"white"});
  })

  module.projectView = projectView;

})(window)
