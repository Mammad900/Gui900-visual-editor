'use strict';
function LP_GV_Toolbar_Handler_5(){
    toolBar.handlers.elements = {
        duplicate: function (e) {
            if(elements.selectedElement!=-1) {
                var dt=elements.data[elements.selectedElement];
                if(dt.type=="Slider"){
                    dt.title+=" - Copy";
                }
                else{
                    dt.text+=" - Copy";
                }
                elements.create(dt);
            }
            else{
                notification.error("Cannot duplicate, no element selected")
            }
        }
    }
}
