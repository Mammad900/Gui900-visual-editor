'use strict';
var elements= elements || {};
elements.types= elements.types || {};
elements.types["Label"] = elements.types["Label"] || {}

elements.types["Label"].saveProperties=function (index) {
    if(index==-1)return;
    var [g,n,b,m]= [properties.get.g,properties.get.n,properties.get.b,properties.get.m]
    elements.data[index]={
        type: "Label",
        position: {
            x: n("property-position-x"),
            y: n("property-position-y")
        },
        text: g("property-text"),
        color: g("property-color"),
        font: g("property-font"),
        text_size: {
            x: n("property-size-x"),
            y: n("property-size-y"),
        },
        enabled: b("property-enabled"),
        visible: b("property-visible")
    }
}
