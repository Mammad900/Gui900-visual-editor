'use strict';
var toolBar= toolBar || {};
toolBar.handlers= toolBar.handlers || {};
toolBar.handlers.pages= toolBar.handlers.pages || {};

toolBar.handlers.pages.clear = function(e) {
    while (elements.data.length!=0) {
        elements.table.buttons.actions.delete(0,false)
    }
}
