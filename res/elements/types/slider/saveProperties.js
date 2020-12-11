'use strict';
elements.types["Slider"].saveProperties=function (index) {
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
        type: "Slider",
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
            thumb: g("property-color-thumb"),
            background: {
                left: g("property-color-left"),
                right: g("property-color-right")
            },
            border: g("property-color-border")
        },
        thumbWidth: n("property-thumb-width"),
        min: n("property-min"),
        value: n("property-value"),
        max: n("property-max"),
        enabled: b("property-enabled"),
        visible: b("property-visible")
    }
}