'use strict';
var elements= elements || {};
elements.types= elements.types || {};
elements.types["Label"] = elements.types["Label"] || {}

elements.types["Label"].generateCode= function (pageI, lbl) {
    return "addlabel("+pageI+ ", " + lbl.position.x+ ", "+
                        lbl.position.y+ ', "' + lbl.text + '", '+
                        preview.color565(preview.hexToRgb(lbl.color)) + ", "+
                        lbl.font+ ", " + lbl.text_size.x + ", " + lbl.text_size.y + ", " +
                        (lbl.enabled?"true":"false") + ", "+
                        (lbl.visible?"true":"false") + ");\n";
}
