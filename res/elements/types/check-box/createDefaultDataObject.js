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
                        background: "#000000",
                        border: "#ffffff",
                        tick: "#ffffff"
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