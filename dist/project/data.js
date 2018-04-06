"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var projects = [
    {
        id: "1",
        name: "Joyful Talks",
        homepage: "http://joyfultalks.com",
        releaseDate: "June 2016",
        description: "Joyful Talks is a personal blog",
        details: "Joyful talks run in CodeIgniter PHP, MySQL, jQuery and CSS Bootstrap."
    },
    {
        id: "2",
        name: "Cerejas Mari'José",
        homepage: "http://marijose.pt",
        releaseDate: "May 2014",
        description: "Website for a fruit company",
        details: "Cerejas Mari'José runs in Laravel PHP framework, Bootstrap CSS, MySQL and jQuery."
    }
];
function getProject(args) {
    var project = projects.filter(function (project) {
        return project.name == args.name;
    })[0];
    return project;
}
exports.getProject = getProject;
function getProjects() {
    return projects;
}
exports.getProjects = getProjects;
//# sourceMappingURL=data.js.map