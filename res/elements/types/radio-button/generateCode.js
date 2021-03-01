'use strict';
var elements= elements || {};
elements.types= elements.types || {};
elements.types["Radio button"] = elements.types["Radio button"] || {}

elements.types["Radio button"].generateCode= function (pageI, rad) {
    return "addradioButton("+pageI+ ", " + rad.position.x+ ", "+
                        rad.position.y+ ', "' + rad.text + '", '+
                        rad.group+ ", "+
                        ([0,"SIZE9PT18PX", "SIZE12PT28PX", "SIZE18PT42PX", "SIZE24PT56PX"][rad.size]) + ", " +
                        (rad.checked?"true":"false") + ", "+
                        preview.color565(preview.hexToRgb(rad.colors.box.indicator)) + ", "+
                        preview.color565(preview.hexToRgb(rad.colors.text)) + ", "+
                        preview.color565(preview.hexToRgb(rad.colors.box.background)) + ", "+
                        preview.color565(preview.hexToRgb(rad.colors.box.border)) + ", "+
                        (rad.enabled?"true":"false") + ", "+
                        (rad.visible?"true":"false") + ");\n";
}
    