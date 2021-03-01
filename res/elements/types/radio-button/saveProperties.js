'use strict';
var elements= elements || {};
elements.types= elements.types || {};
elements.types["Radio button"] = elements.types["Radio button"] || {}

elements.types["Radio button"].saveProperties=function (index) {
    if(index==-1)return;
    function g(id) {
        return $("#"+id).val();
    }
    function n(id) {
        return $("#"+id)[0].valueAsNumber;
    }
    function b(id) {
        return (($("#"+id).data("checked"))=="1");
    }
    elements.data[index]={
        type: "Radio button",
        position: {
            x: n("property-position-x"),
            y: n("property-position-y")
        },
        text: g("property-text"),
        colors: {
            text: g("properties-color-text"),
            box: {
                background: g("properties-color-box-background"),
                border: g("properties-color-box-border"),
                indicator: g("properties-color-indicator")
            }
        },
        size: n("property-size"),
        group: n("property-group"),
        checked: b("property-checked"),
        enabled: b("property-enabled"),
        visible: b("property-visible")
    }
}
