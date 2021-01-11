'use strict';
var settings= {
    showSettingsDialog: function () {
        var div=$("<div><h2 style='margin-top:0'>Project settings</h2></div>").attr("id","settings");
        settings.createFields(div);
        dialog.new(div,[
            {
                "text": "Save",
                "id": 1
            },
            {
                "text": "Cancel",
                "id": 0
            }
        ], function (result, e) {
            if(result==1)
                settings.saveSettings();
            dialog.close();
        },false);
    },
    createFields: function (div) {
        settings.gen.grid(div,2,1,[
            function (c) {
                settings.gen.inputNumber(c,"Screen width", "settings-screen-width",100,32767,((settings.data.orientation%2)==1) ? settings.data.screenSize.height : settings.data.screenSize.width);
            },
            function (c) {
                settings.gen.inputNumber(c,"Screen height", "settings-screen-height",100,32767,((settings.data.orientation%2)==1) ? settings.data.screenSize.width : settings.data.screenSize.height);
            }
        ],true)
        settings.gen.grid(div,2,1,[
            function(c){
                settings.gen.inputNumber(c,'Brightness','settings-screen-brightness',0,255,settings.data.screenBrightness.value);
            },
            function(c){
                c.css('width','unset');
                settings.gen.checkBox(c,'Simulate in preview?','settings-screen-brightness-preview',settings.data.screenBrightness.simulateInPreview).parent().attr('id','settings-screen-brightness-preview-field').css('margin-right','0');
            }
        ],true);
        settings.gen.select(div,"Orientation", "settings-orientation", {
            0:"Portrait",
            1:"Landscape",
            2:"Portrait reverse",
            3:"Landscape reverse"
        }, String(settings.data.orientation))
    },
    saveSettings: function () {
        function g(id) {
            return $("#"+id).val();
        }
        function n(id) {
            return $("#"+id)[0].valueAsNumber;
        }
        function b(id) {
            return (($("#"+id).data("checked"))=="1");
        }
        settings.data.orientation= Number(g("settings-orientation"));
        settings.fields.screenBrightness.save(n('settings-screen-brightness'),b('settings-screen-brightness-preview'))
        settings.fields.screenSize.save(n("settings-screen-width"),n("settings-screen-height"))
    },
    fields:{},
    data:{
        screenSize:{
            width: 240,
            height: 320
        },
        screenBrightness:{
            value: 255,
            simulateInPreview: true
        },
        orientation: 0
    }
}
function LP_GV_SettingsGenerator() {
    settings.gen=properties.gen;
}