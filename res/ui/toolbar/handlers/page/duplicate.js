'use strict';
var toolBar= toolBar || {};
toolBar.handlers= toolBar.handlers || {};
toolBar.handlers.pages= toolBar.handlers.pages || {};

toolBar.handlers.pages.duplicate = function(e) {
    elements.types[elements.data[elements.selectedElement].type].saveProperties(elements.selectedElement); // Save selected element
    var els=elements.data;
    pages.create();
    els.forEach((p,i)=>elements.create(p, false, i!=els.length-1));
}
