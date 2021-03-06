'use strict';
var elements= elements || {};
elements.types= elements.types || {};
elements.types["Check-box"] = elements.types["Check-box"] || {}

elements.types["Check-box"].createDefaultDataObject= function () {
    return JSON.parse(localStorage.getItem("elementTemplate-Check-box")) ||{
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
