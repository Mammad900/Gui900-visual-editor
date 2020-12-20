'use strict';
function LP_GenerateToolbar() {
    var toolbar = document.getElementById("toolbar");
    toolBar.menuItem(toolbar, "File", function (e) {}, function (file) {
        toolBar.subMenuItem(file, "Open", "fa-folder-open", function (e) {}, function (open) {
            toolBar.subMenuItem(open, "Open from file", "fa-folder-open", toolBar.handlers.open_from_file);
            toolBar.subMenuItem(open, "Import from JSON code", "fa-code", toolBar.handlers.file.open.import_from_json);
        }, true,false);
        toolBar.subMenuItem(file, "Save", "fa-save", function (e) {});
        toolBar.subMenuItem(file, "Generate code", "fa-code", function (e) {});
        toolBar.separator(file);
        toolBar.subMenuItem(file, "Change editor theme", "fa-palette", function(e){}, ThemeMenuGenerator, true);
    });
    toolBar.menuItem(toolbar, "Page", function (e) {}, function (page) {
        toolBar.subMenuItem(page, "New page", "fa-plus", pages.create);
        toolBar.subMenuItem(page, "Delete page", "fa-times", function (e) {});
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
            elements.table.buttons.actions.delete(elements.selectedElement);
        });
        toolBar.subMenuItem(element, "Duplicate element","fa-clone", toolBar.handlers.elements.duplicate);
    });
    toolBar.menuItem(toolbar, "Preview", function(e){}, function(_preview){
        toolBar.subMenuItem(_preview, "Refresh", "fa-sync", preview.refresh);
        toolBar.subMenuItem(_preview, "Sharp pixels while zooming", "fa-check", function(){
            $("#preview canvas").toggleClass("sharpZoom");
            $("#preview-canvas-sharp-zoom-menu-item i").toggleClass("fa-check");
        }).attr("id","preview-canvas-sharp-zoom-menu-item")
    })
    toolBar.menuItem(toolbar, "Help", function (e) {}, function (help) {
        toolBar.subMenuItem(help, "Design FAQ", "fa-question-circle", toolBar.handlers.help.design_FAQ);
        toolBar.separator(help);
        toolBar.subMenu_icon_style="fab";
        toolBar.subMenuItem(help, "Visit Gui900 GitHub repository", "fa-github", function (e) {
            window.open("https://github.com/Mammad900/Gui900");
        });
        toolBar.subMenu_icon_style="fas";
        toolBar.separator(help);
        toolBar.subMenuItem(help, "About Gui900 visual editor", "fa-info-circle", toolBar.handlers.help.about);
    });
    toolBar.makeMenuItemsHideOnClick();
};