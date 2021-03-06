'use strict';
function GenerateLoopCode() {
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

    function varName(str) {
        function camelize(str) {
            return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
                return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
            }).replace(/\s+/g, '');
        }
        return camelize(str.replace(/[^a-zA-Z ]/g, ""));
    }

    var str="// GENERATED LOOP CODE\n"+
            "checkPage();\n"+
            "switch(CurrentPage){";
    
    pages.data.forEach(function (page,pI) {
        var pageName=$("#pages_table tr:not(:first-of-type) td:nth-child(3)")[pI].innerHTML;

        str+=`\n    case ${pI}:`+
             `\n        // ${pageName}`;

        var buttonI=0;
        page.elements.forEach(function (element,eI) {
            switch (element.type) {
                case "Button":
                    if(element.clickEvent.trim()==""){
                        break;
                    }
                    str+= `\n        if(button_pressed[${pI}][${buttonI}]){ // ${element.text}`+
                          `\n            `+
                          `\n`            + indent(indent(indent(element.clickEvent)))+
                          `\n            `+
                          `\n            while(button_pressed[${pI}][${buttonI}])checkPage(); // Comment this line for repeated firing of event`+
                          `\n        }`;
                    break;
            
                default:
                    break;
            }
            buttonI++;
        })
        
        str+=`\n        break;`;
    });

    str+="\n    //default:"+
         `\n        //Serial.println("This function should not be reached. If it does, there is serious problem with this program and you should stop it being used in production.");`+
         "\n        //break;"+
         "\n}"+
         `\n// END GENERATED LOOP CODE`;
    return str;
}
