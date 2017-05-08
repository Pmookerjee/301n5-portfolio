page.base('');

page('/', projectController.showProjects);
page('/about', aboutController.showAbout);
page('/repos', reposController.showRepos);

page();
