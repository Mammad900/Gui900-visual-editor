'use strict';
var themeCatalog=[
    "light",
    "dark",
    "", // Empty string means separator
    "dark-red",
    "dark-green",
    "dark-blue",
    "dark-yellow",
    "",
    "light-red",
    "light-green",
    "light-blue",
    "light-yellow",
    "",
    "rainbow",
    "",
    "high-contrast",
];
themeCatalog.forEach(function(val){
    if(val!="")
        loadJsCssFile("res/ui/themes/"+val+".css");
})

function ThemeMenuGenerator(themes) {
    themeCatalog.forEach(function (val) {
        if(val==""){
            toolBar.separator(themes);
        }
        else{
            var name=(val[0].toUpperCase())+(val.replace('-',' ').slice(1)); // Replace "-" with " " and capitalize
            var icon=(val=="dark")?"fa-check":"fa";
            var it= toolBar.subMenuItem(themes, name, icon, function (e) {
                $("html").attr("theme",val);
                toolBar.menuItemIconChange(it.siblings(),"fa");
                toolBar.menuItemIconChange(it,"fa-check");
            },function (e) {}, false, false);
        }
    })
}