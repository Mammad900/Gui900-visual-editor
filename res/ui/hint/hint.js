/**
 * 
 * @param {JQuery<HTMLElement>} element 
 * @param {string|HTMLElement|JQuery<HTMLElement>} html 
 */
async function createHint(id,element, html, wide=true, direction="top") {
    var storageObj=JSON.parse(localStorage.getItem("hints"));
    if((storageObj[id])==true) { 
        return; // This hint was already read, So don't display it.
    }

    if($(".hint[data-hid="+id+"]").length!=0) {
        return; // This hint is already shown and is waiting for 'OK' to be pressed, so don't show it again.
    }

    element.addClass("hint").attr("data-hid", id);
    if(element.is("#toolbar .dropdown .toolbar-button")){
        element.parent().parent().parent().parent().addClass("hashint");
    }
    var ttt= $("<div>").addClass(["tooltiptext",direction]);
    var cont;
    ttt.append($("<div>").append(html));
    ttt.append($("<button>").addClass("button").text("OK").on("click",function (e) {
        ttt.remove();
        element.removeClass("hint");
        if(element.is("#toolbar .dropdown .toolbar-button")){
            element.parent().parent().parent().parent().removeClass("hashint");
        }
        cont();
    }));
    if(wide){
        ttt.addClass("wide");
    }
    element.append(ttt);

    var promise = new Promise((resolve) => { cont = resolve });
    await promise.then((result) => {});

    storageObj[id]=true;
    localStorage.setItem("hints",JSON.stringify(storageObj));
}

async function LP_Hints() {
    if(localStorage.getItem("hints")==null){
        localStorage.setItem("hints","{}");
    }
    var hints= [
        ["elements"       , "#elements-table-column section.box"                 , "Using the elements section, you can create, delete and re-order <abbr class='tooltip'>elements<span class='tooltiptext wide'>Elements are UI widgets on a page. They consist of buttons, labels, check-boxes, sliders and radio-buttons.</span></abbr>." , true         ],
        ["newElement"     , "#new_element_button"                                , "Hover over this button to see a list of element types. Click on any of them to create an element of that kind."                                               , true         ],
        ["pages"          , "#pages-table-column"                                , "Using the pages section, you can create, re-order and delete pages."                                                                                          , true         ],
        ["newPage"        , "#new_page_button"                                   , "Click on this to create a new page."                                                                                                                          , true         ],
        ["selectPage"     , "#pages_table tr.selected td:first-child"            , "Click on the empty area here to select the page."                                                                                                             , true         ],
        ["movePageUp"     , "#pages_table tr:last-child .buttons>*:first-child"  , "Click on this to move this page above the page above it (move it up).<br> It's disabled for the first page."                                                  , true ,"right"],
        ["movePageDown"   , "#pages_table tr:last-child .buttons>*:nth-child(2)" , "Click on this to move this page below the page below it (move it down).<br> It's disabled for the last page."                                                 , true ,"right"],
        ["deletePage"     , "#pages_table tr:last-child .buttons>*:nth-child(3)" , "Click on this to delete the page.<br> Don't do it when there is only one page."                                                                               , true ,"right"],
        ["codeEditor"     , "#code-editor"                                       , "Here you can write non-UI and handler code for this project."                                                                                                 , true         ],
        ["codeEditorFS"   , "#code-editor"                                       , "Double-click on the header to make the editor full-screen. Press <kbd>Esc</kbd> while editor is in focus to exit full-screen mode."                           , true         ],
        ["codeEditorTabs" , "#codeParts-container"                               , "Code can be inserted in several locations. Each of these locations have a tab here."                                                                          , true         ],
        ["properties"     , "#properties"                                        , "Here you can change the options for elements (position, size, color, content, etc.). It's empty by default but options appear when you select an element."    , true ,"left" ],
        ["preview"        , "#preview"                                           , "With the help of preview, you can see what the app looks like without leaving the app or using a real Arduino board"                                          , true ,"right"],
        ["previewRefresh" , "#preview button"                                    , "Click on this button to redraw the preview."                                                                                                                  , true ,       ],
        ["minimize"       , "#pages-openclose-button"                            , "You can click this button on any box to minimize the box, to save space / remove distractions."                                                               , true ,"right"],
        ["projectSettings", "#toolbar>.menuitem:first-child>div>.dropdown>.menuitem:nth-child(4)>.toolbar-button"  , "Here you can adjust different settings for the project."                                                                    , true ,"right"],
        ["saveProject"    , "#toolbar>.menuitem:first-child>div>.dropdown>.menuitem:nth-child(2)>.toolbar-button"  , "Here you can save the project to a file, export it to JSON, or save it to the browser storage."                             , true ,"right"],
        ["openProject"    , "#toolbar>.menuitem:first-child>div>.dropdown>.menuitem:first-child>.toolbar-button"   , "Here you can open a previously saved file, import from JSON, or load the last saved project in browser storage."            , true ,"right"],
        ["generateCode"   , "#toolbar>.menuitem:first-child>div>.dropdown>.menuitem:nth-child(3)>.toolbar-button"  , "This tool generates Arduino code to be used in production."                                                                 , true ,"right"],
        ["changeTheme"    , "#toolbar>.menuitem:first-child>div>.dropdown>.menuitem:nth-of-type(5)>.toolbar-button", "Change the editor theme here"                                                                                               , false,"right"],
    ]
    for(var i=0;i<hints.length;i++){
        var hint=hints[i];
        await createHint(hint[0], $(hint[1]), hint[2], hint[3] || true, hint[4] || "top");
    }
}

function resetHints() {
    localStorage.setItem("hints","{}");
}