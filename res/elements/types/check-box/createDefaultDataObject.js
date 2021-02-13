'use strict';
function LP_GV_El_CheckBox_1(){
    elements.types["Check-box"]={
        createDefaultDataObject: function () {
            return {
                type: "Check-box",
                position: {
                    x: 0,
                    y: 0
                },
                text: "Untitled",
                colors: {
                    text: "#ffffff",
                    box: {
                        background: "#ffffff",
                        border: "#000000",
                        tick: "#000000"
                    }
                },
                size: 2,
                checked: false,
                enabled: true,
                visible: true
            }
        }
    }
}
