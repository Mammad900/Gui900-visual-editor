'use strict';
var resourceElements=[];
function loadJsCssFile(filename){
    var filetype= filename.split('.')[filename.split('.').length-1];
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileRef=document.createElement('script')
        fileRef.setAttribute("type","text/javascript")
        fileRef.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileRef=document.createElement("link")
        fileRef.setAttribute("rel", "stylesheet")
        fileRef.setAttribute("type", "text/css")
        fileRef.setAttribute("href", filename)
    }
    if (typeof fileRef!="undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileRef);
        resourceElements.push(fileRef);
    }
    return fileRef;
}
var LP_res=[
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
    "res/ui/box/floatingBox.css",
    "res/JQuery/JQuery UI/jquery-ui.min.css",
    "res/code-editor/monaco-editor/min/vs/loader.js",
    "res/code-editor/monaco-editor/min/vs/editor/editor.main.nls.js",
    "res/code-editor/monaco-editor/min/vs/editor/editor.main.js",
];

LP_res.forEach(function(value){
    loadJsCssFile(value);
});

var themeCatalog=[
    "light",
    "dark",
    "", // Empty string means separator
    "dark-red",
    "dark-green",
    "dark-blue",
    "dark-yellow",
    "",
    "light-red",
    "light-green",
    "light-blue",
    "light-yellow",
    "",
    "rainbow",
    "",
    "high-contrast",
    "",
    "windows-10-UWP-dark-style"
];
themeCatalog.forEach(function(val){
    if(val!="")
        loadJsCssFile("res/ui/themes/"+val+".css");
})

document.documentElement.setAttribute("theme",localStorage.getItem('theme'));