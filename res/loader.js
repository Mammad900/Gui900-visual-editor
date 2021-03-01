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
    "res/js/cookies.js", //Writes and reads cookies
    "res/js/theme-loader.js", //Theme loader
    "res/ui/toolbar/toolbar.js", //Toolbar controller, creates tool bar HTML and handle onclick
    "res/ui/toolbar/items.js", //Holds toolbar data
    "res/pages/page.js", //Handles pages
    "res/pages/ui/table/buttons.js", //Pages table row buttons generator 
    "res/pages/ui/table/row.js", //Pages table rows
    "res/elements/element.js", //Elements handler
    "res/elements/template.js", //Element templates
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
    "res/ui/box/manageBoxes.js", // Manage boxes (move and float)

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
    "res/ui/toolbar/handlers/code/generateLoopCode.js", //Generate loop code




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

    "res/code-editor/monaco-editor/min/vs/loader.js",
    "res/code-editor/monaco-editor/min/vs/editor/editor.main.nls.js",
    "res/code-editor/monaco-editor/min/vs/editor/editor.main.js",
    "res/JQuery/JQuery UI/jquery-ui.min.css",
    "res/JQuery/JQuery UI/jquery-ui.min.js",
];

LP_res.forEach(function(value){
    loadJsCssFile(value);
});

async function LP(){
    try{
        var LP_funcs=[
            LP_SetTheme,

            LP_GV_PagesTableButtons,
            LP_GV_PagesTableRows,
            LP_GV_SettingsGenerator,
            LP_GV_SettingsFields_ScreenSize,
            LP_GV_SettingsFields_ScreenBrightness,
            LP_GV_loadProject,
            
            LP_GV_El_Label_1,
            LP_GV_El_Label_2,
            LP_GV_El_Label_3,
            LP_GV_El_Label_4,
            LP_GV_El_Label_5,
            LP_GV_El_RadioButton_1,
            LP_GV_El_RadioButton_2,
            LP_GV_El_RadioButton_3,
            LP_GV_El_RadioButton_4,
            LP_GV_El_RadioButton_5,
            LP_GV_El_Slider_1,
            LP_GV_El_Slider_2,
            LP_GV_El_Slider_3,
            LP_GV_El_Slider_4,
            LP_GV_El_Slider_5,

            LP_GV_Toolbar_Handler_1,
            LP_GV_Toolbar_Handler_2,
            LP_GV_Toolbar_Handler_3,
            LP_GV_Toolbar_Handler_4,
            LP_GV_Toolbar_Handler_5,
            LP_GV_Toolbar_Handler_6,
            LP_GV_Toolbar_Handler_7,
            LP_GV_Toolbar_Handler_8,
            
            LP_keyBindings,
            LP_HandleNewElementButton,
            LP_GenerateToolbar,
            LP_createFirstPage,
            LP_CreateHiddenFileInput,
            preview.refresh,
            LP_LoadEditor,
            LP_HandleColorPickerInput,
            LP_MakeBoxesSortable,
            LP_loaderEnd,
            function () {
                registerSW(); 
            },
            [LP_Hints],
        ];
        for(var i=0;i<LP_funcs.length;i++){
            var value=LP_funcs[i];
            if(typeof value=='object'){
                await value[0]();
            }
            else{
                value();
            }
        }
    }
    catch(err){
        console.error(err);
        var html=(i, ...z)=>{ var s=''; i.forEach((l,f)=>{ s+=l+((z[f] ==undefined) ? "": z[f]); }); return s; }
        document.getElementById("loading-header").innerHTML+=
        html`<p>An error occurred. Please reload the page.<br>
            If you reloaded a few times but the issue persists, please <a href='https://github.com/Mammad900/Gui900-visual-editor/issues/new?assignees=&labels=bug&template=bug_report.md&title='>report the bug in GitHub.</a><br>
        Error: <code>${err.message}</code><br/>
        <button class="button" style="font-size: 1.5rem;margin:20px;padding:10px;background:var(--back-color);" onclick="window.location.reload()">Refresh</button>
            </p>`;
        if(localStorage.getItem("fileToBeLoaded")){
            document.getElementById("loading-header").innerHTML+=
            html`<p>
                This problem might be caused by opening a corrupt file. Do you want to cancel loading the project?
                <button style="font-size: 1.5rem;margin:20px;padding:10px;background:var(--back-color);" class="button" onclick="localStorage.removeItem('fileToBeLoaded');window.location.reload()">Cancel loading project & refresh</button>
            </p>`
        }
    }
};
window.onload= async function () {
    await LP();
}

document.addEventListener("DOMContentLoaded", function(event) { 
    var prog= document.getElementById("loading-progress");
    prog.min=0;
    prog.max=LP_res.length;
    prog.value=0;
    var error=false;
    resourceElements.forEach(res => {
        res.onload=function () {
            prog.value++;
        }
        res.onerror=function () {
            if(error)return;
            error=true;
            document.getElementById("loading-header").innerHTML+="<p>One of the resources could not be loaded.<br/>Please reload the page.</p>"
        }
    });
});

async function registerSW() { 
    if(window.location.origin=="file://")return; // App is loaded using file:///
    if ('serviceWorker' in navigator) { 
        try {
            await navigator.serviceWorker.register('./sw.js'); 
        } catch (e) {
            notification.warning("Failed to register ServiceWorker: " + e);
        }
    } else {
        notification.warning("Your browser does not support ServiceWorker");
    }
}

var html=(i, ...z)=>{
    var s='';
    i.forEach((l,f)=>{
        s+=l+((z[f] ==undefined) ? "": z[f])
    })
    return $.parseHTML(s);
}
