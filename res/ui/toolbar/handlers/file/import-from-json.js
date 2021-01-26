'use strict';
function LP_GV_Toolbar_Handler_1(){
    toolBar.handlers={
        file: {
            open: {
                import_from_json: function (e) {
                    dialog("Please paste the JSON code here: <textarea id='dialog-json-input' rows='8'></textarea>",[
                        {
                            "id": 0,
                            "text": "Cancel"
                        },
                        {
                            "id": 1,
                            "text": "Continue"
                        }
                    ],function (id,e) {
                        if(id==1){
                            fileIO.load($("#dialog-json-input").val());
                        }
                        dialog.close();
                    })
                }
            }
        }
    }
}