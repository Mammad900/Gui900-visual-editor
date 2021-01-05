'use strict';
function LP_GV_SettingsFields_ScreenBrightness(){
    settings.fields.screenBrightness={
        save: function (value, preview) {
            settings.data.screenBrightness.value=value;
            settings.data.screenBrightness.simulateInPreview=preview;
            $("#preview-canvas").css('filter',(preview?('brightness('+(value/255)+')'):'none'))
        }
    }
}