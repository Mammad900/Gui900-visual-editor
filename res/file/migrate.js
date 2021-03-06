'use strict';
// Converts older project formats to new ones

function migrateOlderProject(project) {
    if(typeof project == 'string') {
        try {
            project= JSON.parse(project);
        } catch (err) {
            if(err.constructor == SyntaxError) {
                notification.error("Project is corrupt");
                return;
            }
        }
    }

    switch (project.fileVersion) {
        case "0.0.1": // Migrate from 0.0.1 to 0.0.2
            project.pages.forEach(function (page, pI) {
                page.elements.forEach(function (element, eI) {
                    if(element.type == "Button") {
                        if(!element.clickEvent) {
                            project.pages[pI].elements[eI].clickEvent = "";
                        } else if(typeof element.clickEvent != 'string') {
                            project.pages[pI].elements[eI].clickEvent = "";
                            console.warn("Found something unexpected while migrating the project: An older version project (with a version which doesn't support button click events) contained a click event property, but was not a string. The property was set to an empty string.");
                        } else {
                            console.warn("Found something unexpected while migrating the project: An older version project (with a version which doesn't support button click events) contained a valid click event property. This button was skipped.");
                        }
                    }
                })
            })
            project.fileVersion = "0.0.2";
            break;
        case "0.0.2": // Migrate from 0.0.2 to 0.0.3
            if(!project.title) {
                project.title = "No name";
            } else {
                console.warn("Found something unexpected while migrating the project: An older version project (with a version which doesn't support project title) Already contained a title. The project migrator skipped this step.");
            }
            project.fileVersion = "0.0.3";
            break;
        case "0.0.3": // Already up to date
            return project;
        default:
            notification.error("This project was saved in an incompatible version of Gui900 visual editor");
            return;
            break;
    }
    return migrateOlderProject(project);
}