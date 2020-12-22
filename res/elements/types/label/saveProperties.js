'use strict';
elements.types["Label"].saveProperties=function (index) {
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