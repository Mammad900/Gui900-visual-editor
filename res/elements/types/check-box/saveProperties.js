'use strict';
function LP_GV_El_CheckBox_3(){
    elements.types["Check-box"].saveProperties=function (index) {
        if(index==-1)return;
        function g(id) {
            return $("#"+id).val();
        }
        function n(id) {
            return $("#"+id)[0].valueAsNumber;
        }
        function b(id) {
            return (($("#"+id).data("checked"))=="1");
        }
        elements.data[index]={
            type: "Check-box",
            position: {
                x: n("property-position-x"),
                y: n("property-position-y")
            },
            text: g("property-text"),
            colors: {
                text: g("properties-color-text"),
                box: {
                    background: g("properties-color-box-background"),
                    border: g("properties-color-box-border"),
                    tick: g("properties-color-tick")
                }
            },
            size: n("property-size"),
            checked: b("property-checked"),
            enabled: b("property-enabled"),
            visible: b("property-visible")
        }
    }
}