elements.types["Slider"].saveProperties=function (index) {
    if(index==-1)return;
    function g(id) {
        return $("#"+id).val();
    }
    function b(id) {
        return (($("#"+id).data("checked"))=="1");
    }
    elements.data[index]={
        type: "Slider",
        position: {
            x: g("property-position-x"),
            y: g("property-position-y")
        },
        size: {
            width: g("property-size-x"),
            height: g("property-size-y")
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
        min: g("property-min"),
        value: g("property-value"),
        max: g("property-max"),
        enabled: b("property-enabled"),
        visible: b("property-visible")
    }
}