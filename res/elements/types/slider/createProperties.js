'use strict';
elements.types["Slider"].createProperties= function (index) {
    var props=elements.data[index];
    var p=properties.getElement();
    properties.gen.grid(p,2,2,[
        function (col) {
            properties.gen.fieldset(col,"Position",function (fs) {
                properties.gen.grid(fs,2,1,[
                    function (inCol) {
                        properties.gen.inputNumber(inCol,"X","property-position-x",0,240,props.position.x);
                    },
                    function (inCol) {
                        properties.gen.inputNumber(inCol,"Y","property-position-y",0,320,props.position.y);
                    }
                ])
            })
        },
        function (col) {
            properties.gen.fieldset(col,"Size",function (fs) {
                properties.gen.grid(fs,2,1,[
                    function (inCol) {
                        properties.gen.inputNumber(inCol,"Width","property-size-x",0,240,props.size.width);
                    },
                    function (inCol) {
                        properties.gen.inputNumber(inCol,"Height","property-size-y",0,320,props.size.height);
                    }
                ])
            })
        }
    ]),
    properties.gen.fieldset(p,"Colors",function (fs) {
        properties.gen.inputColor(fs,"Thumb: ", "property-color-thumb",props.colors.thumb).css("display","inline-block").css("margin-right","15px");
        properties.gen.inputColor(fs,"Background (left): ", "property-color-left",props.colors.background.left).css("display","inline-block").css("margin-right","15px");
        properties.gen.inputColor(fs,"Background (right): ", "property-color-right",props.colors.background.right).css("display","inline-block").css("margin-right","15px");
        properties.gen.inputColor(fs,"Border: ", "property-color-border",props.colors.border).css("display","inline-block").css("margin-right","15px");
    });
    properties.gen.grid(p, 3, 1, [
        function (col) {
            properties.gen.inputNumber(col, "Minimum", "property-min", -32767, props.max, props.min).css("margin-bottom","10px").on("change",function (e) {
                $("#property-value").attr("min",e.target.value);
                $("#property-max").attr("min",e.target.value);
            });
        },
        function (col) {
            properties.gen.inputNumber(col, "Value", "property-value", props.min, props.max, props.value).css("margin-bottom","10px")
        },
        function (col) {
            properties.gen.inputNumber(col, "Maximum", "property-max", props.min, 32767, props.max).css("margin-bottom","10px").on("change",function (e) {
                $("#property-value").attr("max",e.target.value);
                $("#property-min").attr("max",e.target.value);
            });
        }
    ])
    properties.gen.checkBox(p,"Enabled?", "property-enabled", props.enabled);
    properties.gen.checkBox(p,"Visible?", "property-visible", props.visible);
}