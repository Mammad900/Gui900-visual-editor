'use strict';
function LP_GV_SettingsFields_ScreenSize() {
    settings.fields.screenSize= {
        save: function (w,h) {
            if((settings.data.orientation%2)==1) {//Landscape
                [w,h]=[h,w]; // Swap variables
            }
            settings.data.screenSize.width=w;
            settings.data.screenSize.height=h;
            if((w<200)||(h<200)){
                notification.warning("Too low screen resolution might cause problems");
            }
            if(((w>700)&&(h>500))||((w>500)&&(h>700))){
                if(((w==1280)&&(h==720))||((w==720)&&(h==1280))){
                    notification.warning("HD resolution might be too much for an Arduino board.");
                }
                else if(((w==1366)&&(h==768))||((w==768)&&(h==1366))){
                    notification.warning("HD resolution might be too much for an Arduino board.");
                }
                else if(((w==1920)&&(h==1080))||((w==1080)&&(h==1920))){
                    notification.warning("FullHD resolution is too much for an Arduino board.");
                }
                else if(((w==2560)&&(h==1440))||((w==1440)&&(h==2560))){
                    notification.warning("Do you think an Arduino board can handle QuadHD?");
                }
                else if(((w==3840)&&(h==2160))||((w==2160)&&(h==3840))){
                    notification.warning("UHD on an Arduino board? Really?");
                }
                else if(((w==4096)&&(h==2160))||((w==2160)&&(h==4096))){
                    notification.warning("UHD on an Arduino board? Really?");
                }
                else{
                    var pixels=w*h;
                    if(pixels>100000000){
                        notification.warning("A computer can barely handle this resolution, let alone an Arduino board.");
                    }
                    else if(pixels>25000000){
                        notification.warning("That's an Arduino, not an RTX!");
                    }
                    else if(pixels>12500000){
                        notification.warning("Does a display with this resolution even exist?");
                    }
                    else{
                        notification.warning("This resolution is too much for an Arduino board")
                    }
                }
            }
            $("html").css("--settings-screen-width-px",w+"px");
            preview.getCanvas().attr("width",w+"px");
            $("html").css("--settings-screen-height-px",h+"px");
            preview.getCanvas().attr("height",h+"px");
            preview.refresh();
        }
    };
    
}
