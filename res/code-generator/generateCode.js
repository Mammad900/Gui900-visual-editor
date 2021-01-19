'use strict';
function generateCode(libPath) {
    // Save everything
    if(elements.selectedElement!=-1){
        elements.types[elements.data[elements.selectedElement].type].saveProperties(elements.selectedElement)
    }

    pages.data[pages.currentPage].elements=elements.data;
    pages.data[pages.currentPage].background=$("#page_bc_color_input").val();
    projectCode[$("#codeParts span[data-selected=true]").attr("data-name")]=monacoInstance.getValue();

    // Indents text by 4 characters
    function indent(text) {
        return "    "+ text.replace(new RegExp("\n","g"), "\n    ");
    }

    function emptyLinesAtEnd(text) {
        if(text){ return text+"\n\n"; } else{ return ""; }
    }
    function emptyLineAtEnd(text) {
        if(text.trim()){ return text+"\n"; } else{ return ""; }
    }

    // Generate element creation code
    var elCode="";
    pages.data.forEach(function (pg, pi) {
        pg.elements.forEach(function (el,ei) {
            elCode+= elements.types[el.type].generateCode(pi, el);
        })
    })

    // Assemble everything
    return  emptyLinesAtEnd(projectCode.globalBeginning)+
            CodeGen_Config()+
            "\n\n"+ 
            emptyLinesAtEnd(projectCode.globalAfterConfig)+
            '#include "'+libPath+'"'+
            '\n\n'+ 
            emptyLinesAtEnd(projectCode.globalAfterLibrary)+
            "void setup(){\n"+
                emptyLineAtEnd(indent(projectCode.setupBeginning))+
                emptyLineAtEnd(indent(elCode))+
                emptyLineAtEnd(indent(projectCode.setupBeforeStart))+
                "    start();"+
                "\n"+
                emptyLineAtEnd(indent(projectCode.setupAfterStart))+
            "}"+
            "\n\n"+
            "void loop(){\n"+
                emptyLineAtEnd(indent(projectCode.loop))+
                "\n"+
            "}"+
            (projectCode.globalAfterLoop==""?"":"\n\n")+
            projectCode.globalAfterLoop;

}