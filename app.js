'use strict';

var projects = [];



function Project(name, description, url, photo) {
  this.name = name;
  this.description = description;
  this.url = url;
  this.photo = photo;
}

(function() {

  $.ajax({
    url: 'project_file.json',
    async: false,
    dataType: 'json',
    success: function(data) {
      for(var x in data) {
        projects[x] = new Project(data[x].name, data[x].description, data[x].url, data[x].photo);
      }
    }
  });

}) ()

var clickEvent = function(event) {
  var $button = $(event.target);
  $button.addClass('hidden');
  $('.boxes').fadeIn(700);
}

$(function(){
  $('a[href="#button"]').on('click', clickEvent);
})
