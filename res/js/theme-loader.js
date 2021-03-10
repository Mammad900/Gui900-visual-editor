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
    var def=(window.matchMedia("(prefers-color-scheme: dark)").matches)?"dark":"light";
    var t=localStorage.getItem('theme');
    if(!t){
        currentTheme=t=def;
        localStorage.setItem('theme',def);
    }
    else{
        currentTheme=t;
    }
    $("html").attr('theme', t);
    $("head").append($(html`<meta name="theme-color" id="theme-color-meta" content="${$(":root").css("--toolbar-background")}">`));
}

function ThemeMenuGenerator(themes) {
    themeCatalog.forEach(function (val) {
        if(val==""){
            toolBar.separator(themes);
        }
        else{
            var name=(val[0].toUpperCase())+(val.replace(/-/g,' ').slice(1)); // Replace "-" with " " and capitalize
            var icon=(val==currentTheme)?"fa-check":"fa";
            var it= toolBar.subMenuItem(themes, name, icon, function (e) {
                $("html").attr("theme",val);
                $("#theme-color-meta").attr("content",$(":root").css("--toolbar-background"));
                for(var w in floatingBoxes){
                    var win=floatingBoxes[w];
                    win.changeTheme(val);
                }
                toolBar.menuItemIconChange(it.siblings(),"fa");
                toolBar.menuItemIconChange(it,"fa-check");
                localStorage.setItem('theme', val);
                monacoInstance.updateOptions({
                    theme: "GVE-"+val
                })
            },function (e) {}, false, false);
        }
    })
}
