'use strict';
var elements= elements || {};
elements.types= elements.types || {};
elements.types["Button"] = elements.types["Button"] || {}

elements.types["Button"].createProperties= function (index) {
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
                properties.gen.grid(fs,2,1,[
                    function (inCol) {
                        properties.gen.inputNumber(inCol,"Width","property-size-x",0,settings.data.screenSize.width,props.size.width).on('change',function(e){
                            $("#property-radius").attr("max",Math.min($("#property-size-x").val(),$("#property-size-y").val())/2);
                        });
                    },
                    function (inCol) {
                        properties.gen.inputNumber(inCol,"Height","property-size-y",0,settings.data.screenSize.height,props.size.height).on('change',function(){
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
    (function(){
        p.append(html`
            <div style="margin: 0;
                    margin-top: 10px;
                    display: flex;">
                <label for="property-event" class="block" 
                    style="white-space: nowrap;">
                    Click event
                </label>
                <div style="float: right; width: 100%;">
                    <div class="fas fa-ellipsis-v fa-fw tooltip" style="float: right;">
                        <div class="tooltiptext left small-indicator" style="font-family: var(--default-font); font-weight: initial">
                            <div class="button tooltip">
                                Place code for page navigation
                                <div class="left tooltiptext">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);
        var pl= $("div div div.fas div.tooltiptext div.button div.tooltiptext");
        pages.data.forEach(function(page, i){
            pl.append(
                $("<button>").addClass("button block")
                    .text(`#${i}: ${$("#pages_table tr:not(:first-of-type) td:nth-child(3)").eq(i).html()}`)
                    .data("index", i).on("click", function (e) {
                        monacoEditorPropertiesInstances["property-event"].setValue(`navigatePage(${$(e.target).data("index")});`);
                    }));
        });
    })();
    properties.gen.monacoEditor(p, "Click event", "property-event", {
        language: "cpp",
        value: (props.clickEvent || ""),
        automaticLayout: true,
        theme: "GVE-"+$("html").attr('theme'),
        scrollbar:{
            alwaysConsumeMouseWheel: false
        }
    }, "monacoButtonEventOptions", 400, false)[0].prev().css("margin-top", "10px");
}
