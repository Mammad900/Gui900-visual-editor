elements.types["Radio button"].saveProperties=function (index) {
    if(index==-1)return;
    function g(id) {
        return $("#"+id).val();
    }
    function b(id) {
        return (($("#"+id).data("checked"))=="1");
    }
    elements.data[index]={
        type: "Radio button",
        position: {
            x: g("property-position-x"),
            y: g("property-position-y")
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
        size: g("property-size"),
        group: g("property-group"),
        checked: b("property-checked"),
        enabled: b("property-enabled"),
        visible: b("property-visible")
    }
}