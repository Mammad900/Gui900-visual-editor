'use strict';
var fileIO= {
    createJSON: function () {

        if(elements.selectedElement!=-1){
            elements.types[elements.data[elements.selectedElement].type].saveProperties(elements.selectedElement)
        }

        pages.data[pages.currentPage].elements=elements.data;
        pages.data[pages.currentPage].background=$("#page_bc_color_input").val();
        projectCode[$("#codeParts span[data-selected=true]").attr("data-name")]=monacoInstance.getValue();


        var data= {
            pages: pages.data,
            settings: settings.data,
            code: projectCode,
            fileVersion: "0.0.1",
            "$schema": "https://mammad900.github.io/Gui900-visual-editor/res/file/project-file-json-schema.json"
        };
        $("#pages_table tr:not(:first-of-type) td:nth-child(3)").each(function (index, element) {
            data.pages[index].name=element.innerHTML;
        });
        return data;
    }
}