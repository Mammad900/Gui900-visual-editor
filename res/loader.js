'use strict';
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
    "res/ui/notification/notification.js", // Create and manage notifications

    "res/elements/types/button/createDefaultDataObject.js",
    "res/elements/types/button/createProperties.js",
    "res/elements/types/button/saveProperties.js",
    "res/elements/types/button/generatePreview.js",
    "res/elements/types/label/createDefaultDataObject.js",
    "res/elements/types/label/createProperties.js",
    "res/elements/types/label/saveProperties.js",
    "res/elements/types/label/generatePreview.js",
    "res/elements/types/check-box/createDefaultDataObject.js",
    "res/elements/types/check-box/createProperties.js",
    "res/elements/types/check-box/saveProperties.js",
    "res/elements/types/slider/createDefaultDataObject.js",
    "res/elements/types/slider/createProperties.js",
    "res/elements/types/slider/saveProperties.js",
    "res/elements/types/slider/generatePreview.js",
    "res/elements/types/radio-button/createDefaultDataObject.js",
    "res/elements/types/radio-button/createProperties.js",
    "res/elements/types/radio-button/saveProperties.js",

    "res/ui/toolbar/handlers/file/import-from-json.js", //Import from JSON
    "res/ui/toolbar/handlers/help/about.js", //About Gui900 UI editor
    "res/ui/toolbar/handlers/help/design-faq.js", //Gui900 Design FAQ
    "res/ui/toolbar/handlers/file/open-from-file.js", //Open from file
    "res/ui/toolbar/handlers/elements/duplicate.js", //Duplicate element




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
    "res/ui/notification/notification.css", // Notifications

    "res/js/loader-end.js", // Finishes loading
].forEach(function(value){
    loadJsCssFile(value);
});

function LP(){
    setTimeout(function(){
        try{
            [
                LP_SetTheme,

                LP_GV_ElementsTableButtons,
                LP_GV_ElementsTableRows,
                LP_GV_PagesTableButtons,
                LP_GV_PagesTableRows,
                
                LP_GV_El_Button_1,
                LP_GV_El_Button_2,
                LP_GV_El_Button_3,
                LP_GV_El_Button_4,
                LP_GV_El_CheckBox_1,
                LP_GV_El_CheckBox_2,
                LP_GV_El_CheckBox_3,
                LP_GV_El_Label_1,
                LP_GV_El_Label_2,
                LP_GV_El_Label_3,
                LP_GV_El_Label_4,
                LP_GV_El_RadioButton_1,
                LP_GV_El_RadioButton_2,
                LP_GV_El_RadioButton_3,
                LP_GV_El_Slider_1,
                LP_GV_El_Slider_2,
                LP_GV_El_Slider_3,
                LP_GV_El_Slider_4,

                LP_GV_Toolbar_Handler_1,
                LP_GV_Toolbar_Handler_2,
                LP_GV_Toolbar_Handler_3,
                LP_GV_Toolbar_Handler_4,
                LP_GV_Toolbar_Handler_5,
                
                LP_keyBindings,
                pages.create,
                LP_HandleNewElementButton,
                LP_CreateHiddenFileInput,
                LP_GenerateToolbar,
                preview.refresh,
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
                If you reloaded a few times but the issue persists, please <a href='https://github.com/Mammad900/Gui900-visual-editor/issues/new?assignees=&labels=bug&template=bug_report.md&title='>report the bug in GitHub.</a><br>
            Error: <code>`+err.message+`</code><br/>
            <button class="button" style="font-size: 1.5rem;margin:20px;padding:10px;background:var(--back-color);" onclick="window.location.reload()">Refresh</button
                </p>`;
        }
    },500);
};
$(LP);