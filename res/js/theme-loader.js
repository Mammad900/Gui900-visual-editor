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
    "",
    "windows-10-UWP-dark-style"
];
themeCatalog.forEach(function(val){
    if(val!="")
        loadJsCssFile("res/ui/themes/"+val+".css");
})

var currentTheme;
function LP_SetTheme(){
    var t=cookies.getCookie('theme');
    if(t==''){
        currentTheme='dark';
        cookies.setCookie('theme','dark', 365);
    }
    else{
        currentTheme=t;
        $("html").attr('theme', t)
    }
}

function ThemeMenuGenerator(themes) {
    themeCatalog.forEach(function (val) {
        if(val==""){
            toolBar.separator(themes);
        }
        else{
            var name=(val[0].toUpperCase())+(val.replaceAll('-',' ').slice(1)); // Replace "-" with " " and capitalize
            var icon=(val==currentTheme)?"fa-check":"fa";
            var it= toolBar.subMenuItem(themes, name, icon, function (e) {
                $("html").attr("theme",val);
                toolBar.menuItemIconChange(it.siblings(),"fa");
                toolBar.menuItemIconChange(it,"fa-check");
                cookies.setCookie('theme', val, 365);
            },function (e) {}, false, false);
        }
    })
}