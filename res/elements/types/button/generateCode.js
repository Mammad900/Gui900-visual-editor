'use strict';
function LP_GV_El_Button_5() {
    elements.types["Button"].generateCode= function (pageI, btn) {
        return "addbutton("+pageI+ ", " + btn.position.x+ ", "+
                            btn.position.y+ ", " + btn.size.width + ", "+
                            btn.size.height+ ', "' + btn.text + '", '+
                            preview.color565(preview.hexToRgb(btn.colors.text)) + ", "+
                            preview.color565(preview.hexToRgb(btn.colors.background)) + ", "+
                            preview.color565(preview.hexToRgb(btn.colors.border)) + ", "+
                            (btn.enabled?"true":"false") + ", "+
                            (btn.visible?"true":"false") + ", "+
                            btn.radius + ");\n";
    }
}
