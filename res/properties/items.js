function LP_Properties() {
    var p=properties.getElement();
    properties.gen.grid(p,2,2,[
        function (col) {
            properties.gen.fieldset(col,"Position",function (fs) {
                properties.gen.grid(fs,2,1,[
                    function (inCol) {
                        properties.gen.inputNumber(inCol,"X","property-position-x",0,240,0);
                    },
                    function (inCol) {
                        properties.gen.inputNumber(inCol,"Y","property-position-y",0,320,0);
                    }
                ])
            })
        },
        function (col) {
            properties.gen.fieldset(col,"Size",function (fs) {
                properties.gen.grid(fs,2,1,[
                    function (inCol) {
                        properties.gen.inputNumber(inCol,"Width","property-size-x",0,240,0);
                    },
                    function (inCol) {
                        properties.gen.inputNumber(inCol,"Height","property-size-y",0,320,0);
                    }
                ])
            })
        }
    ]),
    properties.gen.inputText(p,"Text","property-text","Untitled");
    properties.gen.fieldset(p,"Colors",function (fs) {
        properties.gen.grid(fs,3,1,[
            function (col) {
                properties.gen.inputColor(col,"Background: ", "properties-color-background");
            },
            function (col) {
                properties.gen.inputColor(col,"Text: ", "properties-color-text");
            },
            function (col) {
                properties.gen.inputColor(col,"Border: ", "properties-color-border");
            }
        ])
    })
    var list=   ['&FreeMono12pt7b', '&FreeMono18pt7b', '&FreeMono24pt7b', '&FreeMono9pt7b', '&FreeMonoBold12pt7b', '&FreeMonoBold18pt7b', '&FreeMonoBold24pt7b', '&FreeMonoBold9pt7b', '&FreeMonoBoldOblique12pt7b', '&FreeMonoBoldOblique18pt7b', '&FreeMonoBoldOblique24pt7b', '&FreeMonoBoldOblique9pt7b', '&FreeMonoOblique12pt7b', '&FreeMonoOblique18pt7b', '&FreeMonoOblique24pt7b', '&FreeMonoOblique9pt7b', '&FreeSans12pt7b', '&FreeSans18pt7b', '&FreeSans24pt7b', '&FreeSans9pt7b', '&FreeSansBold12pt7b', '&FreeSansBold18pt7b', '&FreeSansBold24pt7b', '&FreeSansBold9pt7b', '&FreeSansBoldOblique12pt7b', '&FreeSansBoldOblique18pt7b', '&FreeSansBoldOblique24pt7b', '&FreeSansBoldOblique9pt7b', '&FreeSansOblique12pt7b', '&FreeSansOblique18pt7b', '&FreeSansOblique24pt7b', '&FreeSansOblique9pt7b', '&FreeSerif12pt7b', '&FreeSerif18pt7b', '&FreeSerif24pt7b', '&FreeSerif9pt7b', '&FreeSerifBold12pt7b', '&FreeSerifBold18pt7b', '&FreeSerifBold24pt7b', '&FreeSerifBold9pt7b', '&FreeSerifBoldItalic12pt7b', '&FreeSerifBoldItalic18pt7b', '&FreeSerifBoldItalic24pt7b', '&FreeSerifBoldItalic9pt7b', '&FreeSerifItalic12pt7b', '&FreeSerifItalic18pt7b', '&FreeSerifItalic24pt7b', '&FreeSerifItalic9pt7b', '&Org_01', '&Picopixel', '&Tiny3x3a2pt7b', '&TomThumb'];
    properties.gen.datalist(p,properties.gen.inputText(p,"Font","property-font","&FreeSans9pt7b").on("change",function (e) {
        var input=$(e.target);
        var v=input.val();
        if((v!="NULL")&&(!v.startsWith('&'))){
            input.addClass("wrong");
        }
        else{
            input.removeClass("wrong");
        }
    }),"property-font-list",list);
    properties.gen.checkBox(p,"Enabled?", "property-enabled", true);
    properties.gen.checkBox(p,"Visible?", "property-visible", true);
}