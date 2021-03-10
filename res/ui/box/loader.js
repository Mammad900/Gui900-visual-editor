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
function createMonaco(container, options){
    var x= monaco.editor.create(container, options);
    window.propertiesMonacoInstance=x;
    return x;
}
function defineMonacoThemes(){
    monaco.editor.defineTheme('GVE-dark', { base: 'vs-dark', inherit: true, rules: [{  }], });
    monaco.editor.defineTheme('GVE-dark-red'   , { base: 'vs-dark', inherit: true, rules: [{ background: "200000" }], colors: { "editor.background": "#200000" } });
    monaco.editor.defineTheme('GVE-dark-green' , { base: 'vs-dark', inherit: true, rules: [{ background: "002000" }], colors: { "editor.background": "#002000" } });
    monaco.editor.defineTheme('GVE-dark-blue'  , { base: 'vs-dark', inherit: true, rules: [{ background: "000020" }], colors: { "editor.background": "#000020" } });
    monaco.editor.defineTheme('GVE-dark-yellow', { base: 'vs-dark', inherit: true, rules: [{ background: "202000" }], colors: { "editor.background": "#202000" } });
    monaco.editor.defineTheme('GVE-light-red'   , { base: 'vs', inherit: true, rules: [{ background: "ff8e8e" }], colors: { "editor.background": "#ff8e8e" } });
    monaco.editor.defineTheme('GVE-light-green' , { base: 'vs', inherit: true, rules: [{ background: "8eff8e" }], colors: { "editor.background": "#8eff8e" } });
    monaco.editor.defineTheme('GVE-light-blue'  , { base: 'vs', inherit: true, rules: [{ background: "8e8eff" }], colors: { "editor.background": "#8e8eff" } });
    monaco.editor.defineTheme('GVE-light-yellow', { base: 'vs', inherit: true, rules: [{ background: "ffff8e" }], colors: { "editor.background": "#ffff8e" } });
    monaco.editor.defineTheme('GVE-high-contrast', { base: 'hc-black', inherit: true, rules: [{  }], });
    monaco.editor.defineTheme('GVE-windows-10-UWP-dark-style', { base: 'vs-dark', inherit: true, rules: [{ background: "000000" }], colors: { "editor.background": "#000000" } });
    monaco.editor.defineTheme('GVE-light', { base: 'vs', inherit: true, rules: [{  }], });
}
function changeTheme(theme) {
    $("html").attr("theme",theme);
    $("#theme-color-meta").attr("content",$(":root").css("--box-background"));
}
function createThemeMeta() {
    $("head").append($(html`<meta name="theme-color" id="theme-color-meta" content="${$(":root").css("--box-background")}">`));
}
var html=(i, ...z)=>{
    var s='';
    i.forEach((l,f)=>{
        s+=l+((z[f] ==undefined) ? "": z[f])
    })
    return $.parseHTML(s);
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