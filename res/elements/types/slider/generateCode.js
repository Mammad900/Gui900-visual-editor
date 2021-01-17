function LP_GV_El_Slider_5() {
    elements.types["Slider"].generateCode= function (pageI, sli) {
        return "addslider("+pageI+ ", " + sli.position.x+ ", "+
                            sli.position.y+ ", " + sli.size.width + ", "+
                            sli.size.height+ ", " + sli.size.touchAreaHeight + ", "+
                            sli.value+ ", "+ sli.min+ ", "+ sli.max+ ", "+ 
                            preview.color565(preview.hexToRgb(sli.colors.background.left)) + ", "+
                            preview.color565(preview.hexToRgb(sli.colors.background.right)) + ", "+
                            preview.color565(preview.hexToRgb(sli.colors.border)) + ", "+
                            preview.color565(preview.hexToRgb(sli.colors.thumb)) + ", "+
                            sli.thumbWidth+ ", "+
                            (sli.enabled?"true":"false") + ", "+
                            (sli.visible?"true":"false") + ");\n";
    }
}