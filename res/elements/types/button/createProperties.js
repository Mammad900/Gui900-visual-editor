'use strict';
elements.types["Button"].createProperties= function (index) {
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
                        properties.gen.inputNumber(inCol,"Width","property-size-x",0,240,props.size.width).on('change',function(e){
                            $("#property-radius").attr("max",Math.min($("#property-size-x").val(),$("#property-size-y").val())/2);
                        });
                    },
                    function (inCol) {
                        properties.gen.inputNumber(inCol,"Height","property-size-y",0,320,props.size.height).on('change',function(){
                            $("#property-radius").attr("max",Math.min($("#property-size-x").val(),$("#property-size-y").val())/2);
                        });
                    }
                ])
            })
        }
    ]),
    properties.gen.inputText(p,"Text","property-text",props.text).on("change",function (e) {
        $($("#elements_table tr")[index+1]).children(":nth-child(3)").text($("#property-text").val())
        elements.updatePropertiesTitle(index);
    });
    properties.gen.fieldset(p,"Colors",function (fs) {
        properties.gen.grid(fs,3,1,[
            function (col) {
                properties.gen.inputColor(col,"Background: ", "properties-color-background",props.colors.background);
            },
            function (col) {
                properties.gen.inputColor(col,"Text: ", "properties-color-text",props.colors.text);
            },
            function (col) {
                properties.gen.inputColor(col,"Border: ", "properties-color-border",props.colors.border);
            }
        ])
    });
    properties.gen.inputNumber(p,"Border radius", "property-radius",0,Math.min(props.size.height,props.size.width)/2,props.radius)
    properties.gen.checkBox(p,"Enabled?", "property-enabled", props.enabled);
    properties.gen.checkBox(p,"Visible?", "property-visible", props.visible);
}