'use strict';
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
                height: 10
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
            visible: true
        }
    }
}