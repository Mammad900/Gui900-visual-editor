'use strict';
var toolBar= toolBar || {};
toolBar.handlers= toolBar.handlers || {};
toolBar.handlers.file= toolBar.handlers.file || {};
toolBar.handlers.file.open= toolBar.handlers.file.open || {};

toolBar.handlers.file.open.import_from_json = function(e) {
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
