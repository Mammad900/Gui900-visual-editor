self.addEventListener('install', async event => {
    console.debug('install event')
});
  
self.addEventListener('fetch', async event => {
    console.debug('fetch event')
});

var LP_Files=[
    "res/js/cookies.js", //Writes and reads cookies
    "res/js/theme-loader.js", //Theme loader
    "res/ui/toolbar/toolbar.js", //Toolbar controller, creates tool bar HTML and handle onclick
    "res/ui/toolbar/items.js", //Holds toolbar data
    "res/pages/page.js", //Handles pages
    "res/pages/ui/table/buttons.js", //Pages table row buttons generator 
    "res/pages/ui/table/row.js", //Pages table rows
    "res/elements/element.js", //Elements handler
    "res/elements/ui/table/buttons.js", //Elements table row buttons generator
    "res/elements/ui/table/row.js", //Elements table rows
    "res/ui/dialog/dialog.js", //Handles dialogs
    "res/js/key-bindings.js", //Key bindings
    "res/properties/generator.js", //Properties generator
    "res/preview/preview.js", //Preview generator
    "res/settings/settings.js", //Settings
    "res/settings/fields/screen-size.js", //Settings - Screen size
    "res/settings/fields/screen-brightness.js", //Settings - Screen brightness
    "res/ui/notification/notification.js", // Create and manage notifications
    "res/code-editor/code-editor.js", // Monaco editor
    "res/file/save.js", // Save the project
    "res/file/load.js", // Load the project
    "res/code-generator/config.js", // Generates Arduino config code
    "res/code-generator/generateCode.js", // Generates Arduino code
    "res/code-generator/loopCode.js", // Generates loop code
    "res/ui/hint/hint.js",
    "res/code-editor/editorOptionsEditor.js", // Monaco options editor

    "res/elements/types/button/createDefaultDataObject.js",
    "res/elements/types/button/createProperties.js",
    "res/elements/types/button/saveProperties.js",
    "res/elements/types/button/generatePreview.js",
    "res/elements/types/button/generateCode.js",
    "res/elements/types/label/createDefaultDataObject.js",
    "res/elements/types/label/createProperties.js",
    "res/elements/types/label/saveProperties.js",
    "res/elements/types/label/generatePreview.js",
    "res/elements/types/label/generateCode.js",
    "res/elements/types/check-box/createDefaultDataObject.js",
    "res/elements/types/check-box/createProperties.js",
    "res/elements/types/check-box/saveProperties.js",
    "res/elements/types/check-box/generatePreview.js",
    "res/elements/types/check-box/generateCode.js",
    "res/elements/types/slider/createDefaultDataObject.js",
    "res/elements/types/slider/createProperties.js",
    "res/elements/types/slider/saveProperties.js",
    "res/elements/types/slider/generatePreview.js",
    "res/elements/types/slider/generateCode.js",
    "res/elements/types/radio-button/createDefaultDataObject.js",
    "res/elements/types/radio-button/createProperties.js",
    "res/elements/types/radio-button/saveProperties.js",
    "res/elements/types/radio-button/generatePreview.js",
    "res/elements/types/radio-button/generateCode.js",

    "res/ui/toolbar/handlers/file/import-from-json.js", //Import from JSON
    "res/ui/toolbar/handlers/help/about.js", //About Gui900 UI editor
    "res/ui/toolbar/handlers/help/design-faq.js", //Gui900 Design FAQ
    "res/ui/toolbar/handlers/file/open-from-file.js", //Open from file
    "res/ui/toolbar/handlers/file/save.js", //Save project
    "res/ui/toolbar/handlers/elements/duplicate.js", //Duplicate element
    "res/ui/toolbar/handlers/file/generateCode.js", //Generate code




    "res/ui/toolbar/toolbar.css", //Styles for the toolbar
    "res/ui/css/constants.css", //Holds the UI constants
    "res/ui/css/styles.css", //The main styles for the app
    "res/ui/box/box.css", //box styles
    "res/ui/table/table.css", //Table styles
    "res/ui/button/button.css", //Button styles
    "res/pages/ui/table/special-styles.css", //Styles specific to pages table
    "res/ui/css/scroll-bar.css", //Custom scroll-bars
    "res/ui/css/grid.css", //Multi-column rows
    "res/ui/dialog/dialog.css", //Dialog styles
    "res/properties/styles.css", //Properties special styles
    "res/properties/input-styles.css", //Properties fields styles
    "res/preview/styles.css", //Preview special styles
    "res/elements/ui/table/special-styles.css", //Elements table special styles
    "res/font-awesome/css/all.css", //Font awesome
    "res/ui/css/tooltip.css", // Tooltips
    "res/settings/input-styles.css", // Project settings input styles
    "res/ui/notification/notification.css", // Notifications
    "res/settings/special-styles.css", // Project settings special styles
    "res/code-editor/styles.css", // Code editor styles
    "res/ui/hint/styles.css",

    "res/js/loader-end.js", // Finishes loading

]

self.addEventListener('install', async event => {
    console.debug("Installed")

    const cache = await caches.open("gve-pwa-conf-1"); 

    await cache.addAll([
        "./",
        "./Gui900 visual editor.html"
    ]);
    LP_Files.forEach(async function (e) {
        await cache.add("./"+e);
    });

});

self.addEventListener('fetch', event => {
    const req = event.request;
    event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
    const cache = await caches.open("gve-pwa-conf-1"); 
    const cachedResponse = await cache.match(req); 
    return cachedResponse || fetch(req); 
}
