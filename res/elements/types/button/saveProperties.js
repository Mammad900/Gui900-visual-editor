elements.types["Button"].saveProperties=function (index) {
    if(index==-1)return;
    function g(id) {
        return $("#"+id).val();
    }
    function b(id) {
        return (($("#"+id).data("checked"))=="1");
    }
    elements.data[index]={
        type: "Button",
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
            text: g("properties-color-text"),
            background: g("properties-color-background"),
            border: g("properties-color-border")
        },
        radius: g("property-radius"),
        enabled: b("property-enabled"),
        visible: b("property-visible")
    }
}