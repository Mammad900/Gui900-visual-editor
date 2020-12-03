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
    if (typeof fileRef!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileRef);
    return fileRef;
}

[
    "res/js/theme-loader.js", //Theme loader
    "res/ui/toolbar/toolbar.js", //Toolbar controller, creates tool bar HTML and handle onclick
    "res/ui/toolbar/items.js", //Holds toolbar data
    "res/pages/ui/table/buttons.js", //Pages table row buttons generator 
    "res/pages/ui/table/row.js", //Pages table rows
    "res/elements/element.js", //Elements handler
    "res/elements/ui/table/buttons.js", //Elements table row buttons generator
    "res/elements/ui/table/row.js", //Elements table rows
    "res/ui/dialog/dialog.js", //Handles dialogs
    "res/js/key-bindings.js", //Key bindings
    "res/properties/generator.js", //Properties generator

    "res/elements/types/button/createDefaultDataObject.js",
    "res/elements/types/button/createProperties.js",
    "res/elements/types/button/saveProperties.js",
    "res/elements/types/label/createDefaultDataObject.js",
    "res/elements/types/label/createProperties.js",
    "res/elements/types/label/saveProperties.js",
    "res/elements/types/check-box/createDefaultDataObject.js",
    "res/elements/types/check-box/createProperties.js",
    "res/elements/types/check-box/saveProperties.js",
    "res/elements/types/slider/createDefaultDataObject.js",
    "res/elements/types/slider/createProperties.js",
    "res/elements/types/slider/saveProperties.js",

    "res/ui/toolbar/handlers/file/import-from-json.js", //Import from JSON
    "res/ui/toolbar/handlers/help/about.js", //About Gui900 UI editor
    "res/ui/toolbar/handlers/help/design-faq.js", //Gui900 Design FAQ
    "res/ui/toolbar/handlers/file/open-from-file.js", //Open from file




    "res/ui/toolbar/toolbar.css", //Styles for the toolbar
    "res/css/constants.css", //Holds the UI constants
    "res/css/styles.css", //The main styles for the app
    "res/ui/box/box.css", //box styles
    "res/ui/table/table.css", //Table styles
    "res/ui/button/button.css", //Button styles
    "res/pages/ui/table/special-styles.css", //Styles specific to pages table
    "res/css/scroll-bar.css", //Custom scroll-bars
    "res/css/grid.css", //Multi-column rows
    "res/ui/dialog/dialog.css", //Dialog styles
    "res/properties/styles.css", //Properties special styles
    "res/ui/preview/styles.css", //Preview special styles
    "res/elements/ui/table/special-styles.css", //Elements table special styles
    "res/font-awesome/css/all.css", //Font awesome
    "res/css/tooltip.css", // Tooltips

    "res/js/loader-end.js", // Finishes loading
].forEach(function(value){
    loadJsCssFile(value);
});

var retries=0;
function LP(){
    setTimeout(function(){
        try{
            [
                LP_GV_ElementsTableRows,
                LP_GV_PagesTableRows,
                LP_keyBindings,
                LP_handleNewPageButton,
                LP_CreateFirstPageRow,
                LP_HandleNewElementButton,
                LP_CreateHiddenFileInput,
                LP_GenerateToolbar,
                LP_HandleColorPickerInput,
                LP_loaderEnd,
            ].forEach(function(value){
                value();
            });
        }
        catch(err){
            console.error(err);
            document.getElementById("loading-header").innerHTML+=
            `<p>An error occurred. Please reload the page.<br>
                If you reloaded a few times but the issue persists, please <a href='#'>Open an issue.</a><br>
            Error: <code>`+err.message+`</code>
                </p>`;
            if(retries<10){
                if(typeof(err)==ReferenceError){
                    document.getElementById("loading-header").innerHTML+="<p>Retrying for "+retries+"th time</p>"
                    retries++
                    LP(); // Again
                }
            }
        }
    },500);
};
$(LP);