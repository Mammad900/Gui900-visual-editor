'use strict';
var elements= elements || {};
elements.types= elements.types || {};
elements.types["Button"] = elements.types["Button"] || {}

elements.types["Button"].createDefaultDataObject= function () {
    return JSON.parse(localStorage.getItem("elementTemplate-Button")) || {
        type: "Button",
        position: {
            x: 0,
            y: 0
        },
        size: {
            width: 100,
            height: 40
        },
        text: "Untitled",
        colors: {
            text: "#ffffff",
            background: "#303030",
            border: "#808080"
        },
        radius: 0,
        enabled: true,
        visible: true,
        clickEvent: "",
    }
}
