'use strict';
var elements= elements || {};
elements.types= elements.types || {};
elements.types["Button"] = elements.types["Button"] || {}

elements.types["Button"].generateCode= function (pageI, btn) {
    return "addbutton("+pageI+ ", " + btn.position.x+ ", "+
                        btn.position.y+ ", " + btn.size.width + ", "+
                        btn.size.height+ ', "' + btn.text + '", '+
                        preview.color565(preview.hexToRgb(btn.colors.text)) + ", "+
                        preview.color565(preview.hexToRgb(btn.colors.background)) + ", "+
                        preview.color565(preview.hexToRgb(btn.colors.border)) + ", "+
                        (btn.enabled?"true":"false") + ", "+
                        (btn.visible?"true":"false") + ", "+
                        btn.radius+ ", "+
                        btn.textOffset.x + ", "+
                        btn.textOffset.y + ");\n";
}
