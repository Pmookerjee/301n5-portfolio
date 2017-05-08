page.base('');

page('/', projectController.showProjects);
page('/about', aboutController.showAbout);
page('/repos', reposController.showRepos);



// TODO: What function do you call to activate page.js? Fire it off now, to execute
page();

// function showRepos() {
// $('section#about').hide();
// $('section#project').hide();
// $('section#repos').show();
// }
