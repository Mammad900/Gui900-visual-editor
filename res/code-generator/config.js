'use strict';
function CodeGen_Config() {
    var str=``;
    str+="#define PAGES "+pages.data.length+"\n";
    if (settings.data.screenTimeout.enabled) {
        str+="#define SCREENTIMEOUT "+settings.data.screenTimeout.value+"\n";
        if(settings.data.screenTimeout.animationTime!=0){
            str+="#define SCROFFANITIME "+(Number.parseInt(settings.data.screenTimeout.animationTime/0.256))+"\n";
        }
    }
    else{
        if(!settings.data.screenTimeout.removeScrOnOffCode){
            str+="#define ALLOWSCREENCONTROL\n"
        }
    }
    str+="byte brightness="+settings.data.screenBrightness.value+";\n";
    if(!settings.data.appearance.dimDisabledElements){
        str+="#define DONOTDIMDISABLED\n";
    }
    str+="uint16_t page_backColors[PAGES]{";
    pages.data.forEach(function (el,i) {
        str+=(i!=0?",":"")+String(preview.color565(preview.hexToRgb(el.background)));
    })
    str+="};\n";
    if(settings.data.backlightPin!="-1"){
        str+="#define BACKLIGHT_PIN "+settings.data.backlightPin+"\n";
    }
    function setElementMaxPerPageCount(capsName, settingsId, elTypeId) { // The penalty of using inconsistent names: 3 arguments instead of 1
        function maxElCountBetweenPages(userSpecifiedSetting,typeStr) {
            if(userSpecifiedSetting!=0) return userSpecifiedSetting;
            function elTypeCountInPage(page,typeStr) {
                var c=0;
                pages.data[page].elements.forEach(function (val) {
                    if(val.type==typeStr){
                        c++;
                    }
                });
                return c;
            }
            var max=0;
            pages.data.forEach(function (el, i) {
                max=Math.max(max, elTypeCountInPage(i, typeStr));
            });
            return max;
        }
        var res=maxElCountBetweenPages(settings.data.maxElPerPage[settingsId], elTypeId);
        if(res>0){
            str+="#define "+capsName+' '+String(res)+"\n";
        }
    }
    setElementMaxPerPageCount("BUTTON", "button", "Button");
    setElementMaxPerPageCount("LABEL", "label", "Label");
    setElementMaxPerPageCount("CHECKBOX", "checkBox", "Check-box");
    setElementMaxPerPageCount("SLIDER", "slider", "Slider");
    setElementMaxPerPageCount("RADIOBUTTON", "radioButton", "Radio button");

    str+="#define Orientation "+settings.data.orientation+"\n";
    str+="#define MINPRESSURE "+settings.data.touchCalibration.MINPRESSURE+"\n";
    str+="#define MAXPRESSURE "+settings.data.touchCalibration.MAXPRESSURE+"\n";

    str+="const int TS_LEFT = "+settings.data.touchCalibration.TS_LEFT+
                 ", TS_RT = "+settings.data.touchCalibration.TS_RT+
                 ", TS_TOP = "+settings.data.touchCalibration.TS_TOP+
                 ", TS_BOT = "+settings.data.touchCalibration.TS_BOT+
                 ", XP = "+settings.data.touchCalibration.XP+
                 ", XM = "+settings.data.touchCalibration.XM+
                 ", YP = "+settings.data.touchCalibration.YP+
                 ", YM = "+settings.data.touchCalibration.YM+ ";\n";
    return str;
}