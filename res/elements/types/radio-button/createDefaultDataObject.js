'use strict';
var elements= elements || {};
elements.types= elements.types || {};
elements.types["Radio button"] = elements.types["Radio button"] || {}

elements.types["Radio button"].createDefaultDataObject= function () {
    return JSON.parse(localStorage.getItem("elementTemplate-Radio-button")) ||{
        type: "Radio button",
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
                indicator: "#222222"
            }
        },
        size: 2,
        group: 0,
        selected: false,
        enabled: true,
        visible: true
    }
}
