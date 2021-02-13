'use strict';
function LP_GV_SettingsFields_ScreenBrightness(){
    settings.fields.screenBrightness={
        save: function (value, preview) {
            settings.data.screenBrightness.value=value;
            settings.data.screenBrightness.simulateInPreview=preview;
            if((value<20)&(preview)){
                notification.warning("Preview can be unreadable with so low brightness, it is recommended to either disable emulating brightness, or increase brightness.")
            }
            $("#preview-canvas").css('filter',(preview?('brightness('+(value/255)+')'):'none'));
        }
    }
}
