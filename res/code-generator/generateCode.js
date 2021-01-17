'use strict';
function generateCode(libPath) {
    function indent(text) {
        return "    "+ text.replace(new RegExp("\n","g"), "\n    ");
    }
    var elCode="";
    pages.data.forEach(function (pg, pi) {
        pg.elements.forEach(function (el,ei) {
            elCode+= elements.types[el.type].generateCode(pi, el);
        })
    })
    return  projectCode.globalBeginning+
            "\n\n"+
            CodeGen_Config()+
            "\n\n"+ 
            projectCode.globalAfterConfig+
            "\n\n"+
            '#include "'+libPath+'"'+
            '\n\n'+ 
            projectCode.globalAfterLibrary+
            "\n\n"+
            "void setup(){\n"+
                indent(projectCode.setupBeginning)+
                "\n"+
                indent(elCode)+
                "\n"+
                indent(projectCode.setupBeforeStart)+
                "\n"+
                "    start();"+
                "\n"+
                indent(projectCode.setupAfterStart)+
                "\n"+
            "}"+
            "\n\n"+
            "void loop(){\n"+
                indent(projectCode.loop)+
                "\n"+
            "}"+
            "\n\n"+
            projectCode.globalAfterLoop;

}