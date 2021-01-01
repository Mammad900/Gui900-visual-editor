'use strict';
function LP_GV_El_Label_1(){
    elements.types["Label"]={
        createDefaultDataObject: function () {
            return {
                type: "Label",
                position: {
                    x: 0,
                    y: 0
                },
                text: "Untitled",
                color: "#ffffff",
                font: "&FreeSans12pt7b",
                text_size: {
                    x: 1,
                    y: 1,
                },
                enabled: true,
                visible: true
            }
        }
    }
}