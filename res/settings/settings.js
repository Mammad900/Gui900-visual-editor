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
            settings.saveSettings();
            dialog.close();
        },false);
    },
    createFields: function (div) {
        settings.gen.inputNumber(div,"Screen width", "settings-screen-width",10,32767,settings.data.screenSize.width);
        settings.gen.inputNumber(div,"Screen height", "settings-screen-height",10,32767,settings.data.screenSize.height);
    },
    saveSettings: function () {
        function g(id) {
            return $("#"+id).val();
        }
        function n(id) {
            return $("#"+id)[0].valueAsNumber;
        }
        settings.fields.screenSize.save(n("settings-screen-width"),n("settings-screen-height"))
    },
    fields:{},
    data:{
        screenSize:{
            width: 240,
            height: 320
        }
    }
}
function LP_GV_SettingsGenerator() {
    settings.gen=properties.gen;
}