'use strict';
var toolBar= toolBar || {};
toolBar.handlers= toolBar.handlers || {};
toolBar.handlers.pages= toolBar.handlers.pages || {};

toolBar.handlers.pages.clear = function(e) {
    
    dialog("Do you really want to <strong>delete</strong> this element?<br>This cannot be undone.",[
        {
            "id": 0,
            "text": "No",
            "key": 27
        },
        {
            "id": 1,
            "text": "Yes",
            "key": 13
        }
    ],function (id,e) {
        if(id==1){
            while (elements.data.length!=0) {
                elements.table.buttons.actions.delete(0,false)
            }
        }
        dialog.close();
    })
}
