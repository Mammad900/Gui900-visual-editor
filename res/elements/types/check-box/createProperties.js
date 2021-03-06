'use strict';
var elements= elements || {};
elements.types= elements.types || {};
elements.types["Check-box"] = elements.types["Check-box"] || {}

elements.types["Check-box"].createProperties= function (index) {
    var props=elements.data[index];
    var p=properties.getElement();
    properties.gen.fieldset(p,"Position",function (fs) {
        properties.gen.grid(fs,2,1,[
            function (inCol) {
                properties.gen.inputNumber(inCol,"X","property-position-x",0,settings.data.screenSize.width,props.position.x);
            },
            function (inCol) {
                properties.gen.inputNumber(inCol,"Y","property-position-y",0,settings.data.screenSize.height,props.position.y);
            }
        ])
    })
    properties.gen.inputText(p,"Text","property-text",props.text).on("change",function (e) {
        $($("#elements_table tr")[index+1]).children(":nth-child(3)").text($("#property-text").val())
        elements.updatePropertiesTitle(index);
    });
    properties.gen.fieldset(p,"Colors",function (fs) {
        properties.gen.inputColor(fs,"Text: ", "properties-color-text",props.colors.text).css("display","inline-block").css("margin-right","15px");
        properties.gen.inputColor(fs,"Box background: ", "properties-color-box-background",props.colors.box.background).css("display","inline-block").css("margin-right","15px");
        properties.gen.inputColor(fs,"Box border: ", "properties-color-box-border",props.colors.box.border).css("display","inline-block").css("margin-right","15px");
        properties.gen.inputColor(fs,"Tick: ", "properties-color-tick",props.colors.box.tick).css("display","inline-block").css("margin-right","15px");
    });
    properties.gen.inputRange(p,"Size", "property-size",1,4,props.size)
    properties.gen.checkBox(p,"Checked?", "property-checked", props.checked);
    properties.gen.checkBox(p,"Enabled?", "property-enabled", props.enabled);
    properties.gen.checkBox(p,"Visible?", "property-visible", props.visible);
}
