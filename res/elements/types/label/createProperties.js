'use strict';
elements.types["Label"].createProperties= function (index) {
    var props=elements.data[index];
    var p=properties.getElement();
    properties.gen.fieldset(p,"Position",function (fs) {
        properties.gen.grid(fs,2,1,[
            function (inCol) {
                properties.gen.inputNumber(inCol,"X","property-position-x",0,240,props.position.x);
            },
            function (inCol) {
                properties.gen.inputNumber(inCol,"Y","property-position-y",0,320,props.position.y);
            }
        ])
    })
    properties.gen.inputText(p,"Text","property-text",props.text).on("change",function (e) {
        $($("#elements_table tr")[index+1]).children(":nth-child(3)").text($("#property-text").val())
    });
    properties.gen.inputColor(p,"Color: ", "property-color",props.color);
    properties.gen.datalist(p, properties.gen.inputText(p, "Font", "property-font", props.font), "property-font-list", fontsList);
    properties.gen.fieldset(p, "Text size multiplier", function (fs) {
        properties.gen.grid(fs, 2, 1, [
            function (col) {
                properties.gen.inputNumber(col, "X", "property-size-x", 1, 10, props.text_size.x);
            },
            function (col) {
                properties.gen.inputNumber(col, "Y", "property-size-y", 1, 10, props.text_size.y);
            }
        ])
    })
    properties.gen.checkBox(p,"Enabled?", "property-enabled", props.enabled);
    properties.gen.checkBox(p,"Visible?", "property-visible", props.visible);
}