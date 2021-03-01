'use strict';
var settings= settings || {};
settings.fields= settings.fields || {};
settings.fields.screenBrightness={
    save: function (value, preview) {
        settings.data.screenBrightness.value=value;
        settings.data.screenBrightness.simulateInPreview=preview;
        if((value<20)&(preview)){
            notification.warning("Preview can be unreadable with so low brightness, it is recommended to either disable emulating brightness, or increase brightness.")
        }
        window.preview.getCanvas().css('filter',(preview?('brightness('+(value/255)+')'):'none'));
    }
}
