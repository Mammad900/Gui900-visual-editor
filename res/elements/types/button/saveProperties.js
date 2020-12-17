'use strict';
elements.types["Button"].saveProperties=function (index) {
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
        visible: b("property-visible")
    }
}