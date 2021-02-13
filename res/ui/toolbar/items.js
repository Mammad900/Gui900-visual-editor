'use strict';
function LP_GenerateToolbar() {
    var toolbar = document.getElementById("toolbar");
    toolBar.menuItem(toolbar, "File", function (e) {}, function (file) {
        toolBar.subMenuItem(file, "Open", "fa-folder-open", function (e) {}, function (open) {
            toolBar.subMenuItem(open, "Open from file", "fa-folder-open", toolBar.handlers.open_from_file);
            toolBar.subMenuItem(open, "Open from JSON code", "fa-code", toolBar.handlers.file.open.import_from_json);
            toolBar.subMenuItem(open, "Open from browser storage", "fa-database", function () {
                localStorage.getItem("savedProject") ? fileIO.load(localStorage.getItem("savedProject")) : notification.error("There is no saved project in browser storage.");
            });
        }, true,false);
        toolBar.subMenuItem(file, "Save", "fa-save", function (e) {}, function (save) {
            toolBar.subMenuItem(save, "Save to file", "fa-file", toolBar.handlers.file.save.saveToFile);
            toolBar.subMenuItem(save, "Get JSON code", "fa-code", toolBar.handlers.file.save.saveToJSON);
            toolBar.subMenuItem(save, "Save to browser storage", "fa-database", function () {
                localStorage.setItem("savedProject",JSON.stringify(fileIO.createJSON()));
                notification.success("Saved to browser storage");
            });
        }, true,false);
        toolBar.subMenuItem(file, "Generate code", "fa-code", toolBar.handlers.file.generateCode);
        toolBar.subMenuItem(file, "Project settings", "fa-wrench", settings.showSettingsDialog);
        toolBar.separator(file);
        toolBar.subMenuItem(file, "Change editor theme", "fa-palette", function(e){}, ThemeMenuGenerator, true);
        toolBar.subMenuItem(file, "Advanced", "fa-cogs", function (e) {}, function (advanced) {
            toolBar.subMenuItem(advanced, "Custom monaco-editor options", "fa-cogs", showMonacoEditorOptionOverridesEditor);
        }, true,false);
        
    });
    toolBar.menuItem(toolbar, "Page", function (e) {}, function (page) {
        toolBar.subMenuItem(page, "New page", "fa-plus", pages.create);
        toolBar.subMenuItem(page, "Delete page", "fa-times", function (e) {
            pages.table.buttons.actions.delete(pages.currentPage);
        });
        toolBar.separator(page);
        toolBar.subMenuItem(page, '<input type="color" id="page_bc_color_input" class="color-preview float-right" style="background-color: #000000;"/>Change background color', "fa-palette", function (e) {});
    });
    toolBar.menuItem(toolbar, "Element", function (e) {}, function (element) {
        toolBar.subMenuItem(element, "New element", "fa-plus", function (e) {}, function (new_element) {
            toolBar.subMenuItem(new_element, "Button", "fa-square", function (e) {elements.create("Button")});
            toolBar.subMenuItem(new_element, "Label", "fa-font", function (e) {elements.create("Label")});
            toolBar.subMenuItem(new_element, "Check-box", "fa-check-square", function (e) {elements.create("Check-box")});
            toolBar.subMenuItem(new_element, "Slider", "fa-sliders-h", function (e) {elements.create("Slider")});
            toolBar.subMenuItem(new_element, "Radio-button", "fa-dot-circle", function (e) {elements.create("Radio button")});
        }, true,false);
        toolBar.subMenuItem(element, "Delete selected element", "fa-times", function(){
            (elements.selectedElement!=-1)?(elements.table.buttons.actions.delete(elements.selectedElement)):(notification.error("No element selected, please select one first."));
        }, function () {}, false, true, true, true);
        toolBar.subMenuItem(element, "Duplicate element","fa-clone", toolBar.handlers.elements.duplicate, function () {}, false, true, true, true);

        toolBar.subMenu_icon_style="far";
        toolBar.subMenuItem(element, "Element templates", "fa-square", function(){}, function (templates) {
            toolBar.subMenu_icon_style="fas";
            toolBar.subMenuItem(templates, "Set selected element as template", "fa-plus", elements.templates.setGlobalTemplate);
            toolBar.subMenuItem(templates, "Reset to default template", "fa-times", function(){}, function (reset) {
                toolBar.subMenuItem(reset, "Button", "fa-square", function (e) {elements.templates.clearGlobalTemplate("Button")});
                toolBar.subMenuItem(reset, "Label", "fa-font", function (e) {elements.templates.clearGlobalTemplate("Label")});
                toolBar.subMenuItem(reset, "Check-box", "fa-check-square", function (e) {elements.templates.clearGlobalTemplate("Check-box")});
                toolBar.subMenuItem(reset, "Slider", "fa-sliders-h", function (e) {elements.templates.clearGlobalTemplate("Slider")});
                toolBar.subMenuItem(reset, "Radio-button", "fa-dot-circle", function (e) {elements.templates.clearGlobalTemplate("Radio button")});
            }, true, false);
        }, true, false)
    });
    toolBar.menuItem(toolbar, "Preview", function(e){}, function(_preview){
        toolBar.subMenuItem(_preview, "Refresh", "fa-sync", preview.refresh);
        toolBar.subMenuItem(_preview, "Sharp pixels while zooming", "fa-check", function(){
            $("#preview canvas").toggleClass("sharpZoom");
            $("#preview-canvas-sharp-zoom-menu-item i").toggleClass("fa-check");
        }).attr("id","preview-canvas-sharp-zoom-menu-item")
    });
    toolBar.menuItem(toolbar, "Code", function (e) {}, function (code) {
        toolBar.subMenuItem(code, "Generate loop code", "fa-code", toolBar.handlers.code.generateLoopCode);
    })
    toolBar.menuItem(toolbar, "Help", function (e) {}, function (help) {
        toolBar.subMenuItem(help, "Design FAQ", "fa-question-circle", toolBar.handlers.help.design_FAQ);
        toolBar.separator(help);
        toolBar.subMenu_icon_style="fab";
        toolBar.subMenuItem(help, "Visit Gui900 GitHub repository", "fa-github", function (e) {
            window.open("https://github.com/Mammad900/Gui900");
        });
        toolBar.subMenuItem(help, "Visit Gui900 visual editor repository", "fa-github", function (e) {
            window.open("https://github.com/Mammad900/Gui900-visual-editor");
        },function(){},false,true,false);
        toolBar.subMenu_icon_style="fas";
        toolBar.subMenuItem(help, "Report a bug", "fa-bug", function (e) {
            window.open("https://github.com/Mammad900/Gui900-visual-editor/issues/new?assignees=&labels=bug&template=bug_report.md&title=");
        });
        toolBar.separator(help);
        toolBar.subMenuItem(help, "Gui900 documentation", "fa-book-open", function (e) {
            window.docWin=window.open("https://github.com/Mammad900/Gui900/wiki/","_blank", "width=500;height=500");
            notification.info("Use <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>D</kbd> on code editor to re-focus documentation window.",[], 15000)
        });
        toolBar.separator(help);
        toolBar.subMenuItem(help, "About Gui900 visual editor", "fa-info-circle", toolBar.handlers.help.about);
    });
    toolBar.makeMenuItemsHideOnClick();
};
