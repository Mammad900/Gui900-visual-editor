elements.types["Label"].saveProperties=function (index) {
    if(index==-1)return;
    function g(id) {
        return $("#"+id).val();
    }
    function b(id) {
        return (($("#"+id).data("checked"))=="1");
    }
    elements.data[index]={
        type: "Label",
        position: {
            x: g("property-position-x"),
            y: g("property-position-y")
        },
        text: g("property-text"),
        color: g("property-color"),
        font: g("property-font"),
        text_size: {
            x: g("property-size-x"),
            y: g("property-size-y"),
        },
        enabled: b("property-enabled"),
        visible: b("property-visible")
    }
}