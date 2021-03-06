'use strict';
var elements= elements || {};
elements.types= elements.types || {};
elements.types["Slider"] = elements.types["Slider"] || {};

elements.types["Slider"].createDefaultDataObject= function () {
    return JSON.parse(localStorage.getItem("elementTemplate-Slider")) ||{
        type: "Slider",
        position: {
            x: 10,
            y: 10
        },
        size: {
            width: settings.data.screenSize.width-20,
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
