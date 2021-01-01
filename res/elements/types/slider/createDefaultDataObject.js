'use strict';
function LP_GV_El_Slider_1(){
    elements.types["Slider"]={
        createDefaultDataObject: function () {
            return {
                type: "Slider",
                position: {
                    x: 10,
                    y: 10
                },
                size: {
                    width: 220,
                    height: 10,
                    touchAreaHeight: 30
                },
                colors: {
                    thumb: "#ffffff",
                    background: {
                        left: "#000000",
                        right: "#000000"
                    },
                    border: "#ffffff"
                },
                thumbWidth: 7,
                min: 0,
                value: 20,
                max: 100,
                enabled: true,
                visible: true,
                title: "Untitled"
            }
        }
    }
}