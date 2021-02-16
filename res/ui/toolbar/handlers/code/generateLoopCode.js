'use strict';
function LP_GV_Toolbar_Handler_8(){
    toolBar.handlers.code= {
        generateLoopCode (e) {
            var lc=GenerateLoopCode();
            var code= projectCode.loop;
            var goneToDialog=false;
            if(code.trim()==""){
                code=lc;
            }
            else if(code.includes("// GENERATED LOOP CODE") && code.includes("// END GENERATED LOOP CODE")){
                var exC=code.slice(code.indexOf("// GENERATED LOOP CODE"),code.indexOf("// END GENERATED LOOP CODE")+26);
                code=code.replace(exC,lc);
            }
            else{
                goneToDialog=true;
                dialog("Where do you want the generated loop code to be placed?",[
                    {
                        "id": 0,
                        "text": "End of loop()"
                    },
                    {
                        "id": 1,
                        "text": "Beginning of loop()"
                    },
                    {
                        "id": 2,
                        "text": "Replace all code in loop()"
                    },
                    {
                        "id": 3,
                        "text": "Cancel"
                    }
                ],function (id,e) {
                    switch (id) {
                        case 0:
                            code+=lc;
                            break;
                        case 1:
                            code=lc+"\n"+code;
                            break;
                        case 2:
                            code=lc;
                            break;
                        case 3:
                        default:
                            dialog.close();
                            return;
                    }
                    projectCode.loop=code;
                    if($("#codeParts span[data-selected=true]").attr("data-name")=="loop"){
                        monacoInstance.setValue(code);
                    }
                    notification.success("Generated successfully");
                    dialog.close();
                });
            }
            if(!goneToDialog){
                projectCode.loop=code;
                if($("#codeParts span[data-selected=true]").attr("data-name")=="loop"){
                    monacoInstance.setValue(code);
                }
                notification.success("Generated successfully");
            }
        }
    }
}
