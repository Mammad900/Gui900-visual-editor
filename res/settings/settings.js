'use strict';
var settings= {
    showSettingsDialog: function () {
        var div=$("<div><h2 style='margin-top:0;user-select:none'>Project settings</h2></div>").attr("id","settings");
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
        settings.gen.fieldset(div, "Screen options", function (fs) {
            settings.gen.grid(fs,2,1,[
                function (c) {
                    settings.gen.inputNumber(c,"Screen width", "settings-screen-width",100,32767,((settings.data.orientation%2)==1) ? settings.data.screenSize.height : settings.data.screenSize.width);
                },
                function (c) {
                    settings.gen.inputNumber(c,"Screen height", "settings-screen-height",100,32767,((settings.data.orientation%2)==1) ? settings.data.screenSize.width : settings.data.screenSize.height);
                }
            ],true)
            settings.gen.grid(fs,2,1,[
                function(c){
                    settings.gen.inputNumber(c,'Brightness','settings-screen-brightness',0,255,settings.data.screenBrightness.value);
                },
                function(c){
                    c.css('width','unset');
                    settings.gen.checkBox(c,'Simulate in preview?','settings-screen-brightness-preview',settings.data.screenBrightness.simulateInPreview).parent().attr('id','settings-screen-brightness-preview-field').css('margin-right','0');
                }
            ],true);
            settings.gen.grid(fs, 2, 1, [
                function (col) {
                    settings.gen.select(col,"Orientation", "settings-orientation", {
                        0:"Portrait",
                        1:"Landscape",
                        2:"Portrait reverse",
                        3:"Landscape reverse"
                    }, String(settings.data.orientation));
                },
                function (col) {
                    settings.gen.inputText(col, "Backlight pin (-1 to disable)", 'settings-backlight-pin', settings.data.backlightPin);
                }
            ])
            settings.gen.fieldset(fs, "Screen time-out", function (fs2) {
                fs2.css('margin-top', '10px');
                settings.gen.checkBox(fs2, "Enable", 
                            'settings-screen-timeout-enabled',
                            settings.data.screenTimeout.enabled)
                            .parent().css({'display':'block', 'margin-bottom':'10px'})
                            .on('click',function (e) {
                                if(($("#settings-screen-timeout-enabled").data("checked"))=="1"){
                                    $("#settings-screen-timeout-options").show();
                                    $("#settings-screen-timeout-remove-scr-on-off-funcs").parent().hide();
                                }
                                else{
                                    $("#settings-screen-timeout-options").hide();
                                    $("#settings-screen-timeout-remove-scr-on-off-funcs").parent().show();
                                }
                            }
                );
                settings.gen.grid(fs2, 2, 1, [
                    function (col) {
                        settings.gen.inputNumber(col, "Inactivity in seconds to turn off screen", 'settings-screen-timeout', 5, 3600, settings.data.screenTimeout.value);
                    },
                    function (col) {
                        settings.gen.inputNumber(col, "Animation duration(in seconds)", 'settings-screen-timeout-duration', 0, 10.24, settings.data.screenTimeout.animationTime).attr('step',0.256);
                    }
                ]).attr('id', 'settings-screen-timeout-options').css('display',settings.data.screenTimeout.enabled?'flex':'none');
                settings.gen.checkBox(fs2, 
                            "Remove <code>scrOn()</code> and <code>scrOff()</code> functions", 
                            'settings-screen-timeout-remove-scr-on-off-funcs', settings.data.screenTimeout.removeScrOnOffCode).parent().css('display',settings.data.screenTimeout.enabled?'none':'block');
            })
        });
        settings.gen.fieldset(div, "Appearance", function (fs) {
            settings.gen.checkBox(fs, "Dim disabled elements", "settings-dim-disabled-elements", settings.data.appearance.dimDisabledElements);
        });
        settings.gen.fieldset(div, "Max elements per page (0 for auto)", function (fs) {
            settings.gen.grid(fs, 3, 2, [
                   function (oC) { oC.addClass(["l6","m12","s12"]); settings.gen.grid(oC, 2, 1, [
                        function (col) { settings.gen.inputNumber(col, "Button", "settings-maxElement-button", 0, 50, settings.data.maxElPerPage.button); },
                        function (col) { settings.gen.inputNumber(col, "Label", "settings-maxElement-label", 0, 50, settings.data.maxElPerPage.label); },
                    ])
                }, function (oC) { oC.addClass(["l6","m12","s12"]); settings.gen.grid(oC, 2, 1, [
                        function (col) { settings.gen.inputNumber(col, "Check-box", "settings-maxElement-checkBox", 0, 50, settings.data.maxElPerPage.checkBox); },
                        function (col) { settings.gen.inputNumber(col, "Slider", "settings-maxElement-slider", 0, 50, settings.data.maxElPerPage.slider); },
                    ])
                }, function (oC) {oC.addClass(["l3","m12","s12"]);
                    settings.gen.inputNumber(oC, "Radio-button", "settings-maxElement-radioButton", 0, 50, settings.data.maxElPerPage.radioButton);
                },
            ])
        });
        settings.gen.fieldset(div, "Touch-screen pins & calibration",function (fs) {
            settings.gen.grid(fs, 4, 1, [
                function (iC) { settings.gen.inputNumber(iC, "TS_LEFT", "settings-touchCalibration-TS_LEFT", 0,  1023, settings.data.touchCalibration.TS_LEFT);},
                function (iC) { settings.gen.inputNumber(iC, "TS_TOP" , "settings-touchCalibration-TS_TOP" , 0,  1023, settings.data.touchCalibration.TS_TOP );},
                function (iC) { settings.gen.inputNumber(iC, "TS_RT"  , "settings-touchCalibration-TS_RT"  , 0,  1023, settings.data.touchCalibration.TS_RT  );},
                function (iC) { settings.gen.inputNumber(iC, "TS_BOT" , "settings-touchCalibration-TS_BOT" , 0,  1023, settings.data.touchCalibration.TS_BOT ); },
            ],true);
            settings.gen.grid(fs, 4, 1, [
                function (iC) { settings.gen.inputText(iC, "XP", "settings-touchCalibration-XP", settings.data.touchCalibration.XP); },
                function (iC) { settings.gen.inputText(iC, "XM", "settings-touchCalibration-XM", settings.data.touchCalibration.XM); },
                function (iC) { settings.gen.inputText(iC, "YP", "settings-touchCalibration-YP", settings.data.touchCalibration.YP); },
                function (iC) { settings.gen.inputText(iC, "YM", "settings-touchCalibration-YM", settings.data.touchCalibration.YM); },
            ],true);
            settings.gen.grid(fs, 2, 1, [
                function (iC) { settings.gen.inputNumber(iC, "MINPRESSURE", "settings-touchCalibration-MINPRESSURE", 0,  10000, settings.data.touchCalibration.MINPRESSURE); },
                function (iC) { settings.gen.inputNumber(iC, "MAXPRESSURE", "settings-touchCalibration-MAXPRESSURE", 0,  10000, settings.data.touchCalibration.MAXPRESSURE); },
            ]);
        });
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
        settings.data.touchCalibration= {
            XP: g("settings-touchCalibration-XP"), XM: g("settings-touchCalibration-XM"),
            YP: g("settings-touchCalibration-YP"), YM: g("settings-touchCalibration-YM"),
            MINPRESSURE: n("settings-touchCalibration-MINPRESSURE"), MAXPRESSURE: n("settings-touchCalibration-MAXPRESSURE"),
            TS_LEFT: n("settings-touchCalibration-TS_LEFT"), TS_RT: n("settings-touchCalibration-TS_RT"),
            TS_TOP: n("settings-touchCalibration-TS_TOP"), TS_BOT: n("settings-touchCalibration-TS_BOT")
        }
        settings.data.backlightPin= g("settings-backlight-pin");
        settings.data.screenTimeout= {
            enabled: b("settings-screen-timeout-enabled"),
            value: n("settings-screen-timeout"),
            animationTime: n("settings-screen-timeout-duration"),
            removeScrOnOffCode: b("settings-screen-timeout-remove-scr-on-off-funcs"),
        }
        settings.data.appearance.dimDisabledElements= b("settings-dim-disabled-elements");
        settings.data.maxElPerPage= {
            button: n("settings-maxElement-button"),
            label: n("settings-maxElement-label"),
            checkBox: n("settings-maxElement-checkBox"),
            slider: n("settings-maxElement-slider"),
            radioButton: n("settings-maxElement-radioButton"),
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
        },
        orientation: 0,
        touchCalibration:{
            XP: "6",   XM: "A2",   YP: "A1",   YM: "7",
            MINPRESSURE: 10,  MAXPRESSURE: 1000,
            TS_LEFT: 1023, TS_RT: 0, TS_TOP: 0, TS_BOT: 1023
        },
        backlightPin: "-1",
        screenTimeout: {
            enabled: true,
            value: 60,
            animationTime: 1.024,
            removeScrOnOffCode: true,
        },
        appearance: {
            dimDisabledElements: true,
        },
        maxElPerPage: {
            button: 0, label: 0, checkBox: 0, slider: 0, radioButton: 0,
        },
    }
}
function LP_GV_SettingsGenerator() {
    settings.gen=properties.gen;
}