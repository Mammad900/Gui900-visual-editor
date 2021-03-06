'use strict';
var elements= elements || {};
elements.types= elements.types || {};
elements.types["Slider"] = elements.types["Slider"] || {};

elements.types["Slider"].createProperties= function (index) {
    var props=elements.data[index];
    var p=properties.getElement();
    properties.gen.grid(p,2,2,[
        function (col) {
            properties.gen.fieldset(col,"Position",function (fs) {
                properties.gen.grid(fs,2,1,[
                    function (inCol) {
                        properties.gen.inputNumber(inCol,"X","property-position-x",0,settings.data.screenSize.width,props.position.x);
                    },
                    function (inCol) {
                        properties.gen.inputNumber(inCol,"Y","property-position-y",0,settings.data.screenSize.height,props.position.y);
                    }
                ])
            })
        },
        function (col) {
            properties.gen.fieldset(col,"Size",function (fs) {
                properties.gen.grid(fs,3,1,[
                    function (inCol) {
                        properties.gen.inputNumber(inCol,"Width","property-size-x",0,settings.data.screenSize.width,props.size.width);
                    },
                    function (inCol) {
                        properties.gen.inputNumber(inCol,"Height","property-size-y",0,settings.data.screenSize.height,props.size.height);
                    },
                    function (inCol) {
                        properties.gen.inputNumber(inCol,"Touch area height","property-size-area-y",0,settings.data.screenSize.height,props.size.touchAreaHeight);
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
    properties.gen.grid(p, 2, 2, [
        function (col) {
            col.addClass(["l9 m12 s12"]);
            properties.gen.grid(col, 3, 1, [
                function (inCol) {
                    properties.gen.inputNumber(inCol, "Minimum", "property-min", -32767, props.max, props.min).on("change",function (e) {
                        $("#property-value").attr("min",e.target.value);
                        $("#property-max").attr("min",e.target.value);
                    });
                },
                function (inCol) {
                    properties.gen.inputNumber(inCol, "Value", "property-value", props.min, props.max, props.value)
                },
                function (inCol) {
                    properties.gen.inputNumber(inCol, "Maximum", "property-max", props.min, 32767, props.max).on("change",function (e) {
                        $("#property-value").attr("max",e.target.value);
                        $("#property-min").attr("max",e.target.value);
                    });
                }
            ])
        },
        function (col) {
            col.addClass(["l3 m12 s12"]);
            properties.gen.grid(col, 1, 0, [
                function (inCol) {
                    properties.gen.inputNumber(inCol, "Thumb width", "property-thumb-width", 0, 50, props.thumbWidth);
                }
            ])
        }
    ]).css("margin-bottom","10px");
    properties.gen.checkBox(p,"Enabled?", "property-enabled", props.enabled);
    properties.gen.checkBox(p,"Visible?", "property-visible", props.visible);
}
