'use strict';
var elements= elements || {};
elements.types= elements.types || {};
elements.types["Button"] = elements.types["Button"] || {}

elements.types["Button"].saveProperties=function (index) {
    if(index==-1)return;
    var [g,n,b,m]= [properties.get.g,properties.get.n,properties.get.b,properties.get.m]
    elements.data[index]={
        type: "Button",
        position: {
            x: n("property-position-x"),
            y: n("property-position-y")
        },
        size: {
            width: n("property-size-x"),
            height: n("property-size-y")
        },
        text: g("property-text"),
        colors: {
            text: g("properties-color-text"),
            background: g("properties-color-background"),
            border: g("properties-color-border")
        },
        radius: n("property-radius"),
        enabled: b("property-enabled"),
        visible: b("property-visible"),
        clickEvent: m("property-event"),
    }
}
