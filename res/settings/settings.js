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
        settings.gen.inputNumber(div,"Screen width", "settings-screen-width",100,32767,settings.data.screenSize.width);
        settings.gen.inputNumber(div,"Screen height", "settings-screen-height",100,32767,settings.data.screenSize.height);
        settings.gen.grid(div,2,1,[
            function(c){
                settings.gen.inputNumber(c,'Screen brightness','settings-screen-brightness',0,255,settings.data.screenBrightness.value);
            },
            function(c){
                settings.gen.checkBox(c,'Simulate in preview?','settings-screen-brightness-preview',settings.data.screenBrightness.simulateInPreview).parent().attr('id','settings-screen-brightness-preview-field')
            }
        ]);
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
        }
    }
}
function LP_GV_SettingsGenerator() {
    settings.gen=properties.gen;
}