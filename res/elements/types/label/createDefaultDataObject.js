'use strict';
var elements= elements || {};
elements.types= elements.types || {};
elements.types["Label"] = elements.types["Label"] || {}

elements.types["Label"]. createDefaultDataObject= function () {
    return JSON.parse(localStorage.getItem("elementTemplate-Label")) ||{
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
