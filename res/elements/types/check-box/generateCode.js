'use strict';
var elements= elements || {};
elements.types= elements.types || {};
elements.types["Check-box"] = elements.types["Check-box"] || {}

elements.types["Check-box"].generateCode= function (pageI, cb) {
    return "addcheckBox("+pageI+ ", " + cb.position.x+ ", "+
                        cb.position.y+ ', "' + cb.text + '", '+
                        ([0,"SIZE9PT18PX", "SIZE12PT28PX", "SIZE18PT42PX", "SIZE24PT56PX"][cb.size]) + ", " +
                        (cb.checked?"true":"false") + ", "+
                        preview.color565(preview.hexToRgb(cb.colors.box.tick)) + ", "+
                        preview.color565(preview.hexToRgb(cb.colors.text)) + ", "+
                        preview.color565(preview.hexToRgb(cb.colors.box.background)) + ", "+
                        preview.color565(preview.hexToRgb(cb.colors.box.border)) + ", "+
                        (cb.enabled?"true":"false") + ", "+
                        (cb.visible?"true":"false") + ");\n";
}
