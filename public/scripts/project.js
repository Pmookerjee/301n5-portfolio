'use strict';

function Project(name, description, url, photo) {
  this.name = name;
  this.description = description;
  this.url = url;
  this.photo = photo;
}

Project.all = [];

Project.prototype.toHtml = function() {
  let template = Handlebars.compile($('#project-template').text());
  return template(this);
};

Project.load = function(projectData){
  projectData.forEach(function(prop) {
    Project.all.push(new Project(prop));
  })
}

Project.fetch = function() {
  if(localStorage.projectData){
    Project.load(JSON.parse(localStorage.projectData));
    projectView.initIndexPage();
  } else {
    (() => {
      $.ajax({
        url: '/data/project_file.json',
      }).done(function(data) {
        localStorage.setItem('projectData', JSON.stringify(data));
        Project.load(JSON.parse(localStorage.projectData));
        projectView.initIndexPage();
      })
    });
  }
}

var showProjects = function() {
  var $button = $(this);
  $button.addClass('hidden');
  $('.boxes').fadeIn().addClass('show');
}



var slideMenu = function() {

}

$(function(){
  $('.show-projects').on('click', showProjects);
  $('#hamburger').on('click', slideMenu )
})


$(function () {
  var name = 'Paula Mookerjee',
  index = 0, index1 = 0, index2 = 0, index3 = 0;

  var firstLine = Handlebars.compile($('#welcome').html());
  var secondLine = Handlebars.compile($('#about').html());
  var thirdLine = Handlebars.compile($('#invitation').html());

  var welcomeContent = { welcome: 'Welcome to my portfolio' }
  var aboutContent = { about: 'The projects below were created at Code Fellows'}
  var invitationContent = { invitation: 'Feel free to say hello on the Contact page!'}

  setInterval(function(){
    $('#fadeIn').append(name[index]);
    index++;
  },125);

  setTimeout(function(){
    $('#fadeIn').slideToggle('slow');
  }, 2000);

  setTimeout(function() {
    setInterval(function(){
      var script = firstLine(welcomeContent);
      $('#one').append(script[index1]);
      index1++;
    }, 100);
  }, 2500);

  setTimeout(function(){
    $('#one').fadeOut('slow');
  }, 5000);

  setTimeout(function() {
    setInterval(function(){
      var script = secondLine(aboutContent);
      $('#two').append(script[index2]);
      index2++;

    }, 100);
  }, 9000);

  setTimeout(function(){
    $('#two').fadeOut('slow');
  }, 15000);

  setTimeout(function() {
    setInterval(function(){
      var script = thirdLine(invitationContent);
      $('#three').append(script[index3]);
      index3++;

    }, 100);
  }, 18000);

  setTimeout(function(){
    $('#three').fadeOut('slow');
  }, 24500);

  setTimeout(function() {
    $('#fadeIn').fadeIn();
  }, 27000);

});

function openNav() {
  document.getElementById("navDrawer").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("navDrawer").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

$('#menu').on('click', function(e) {
  e.preventDefault();
  openNav();
});
