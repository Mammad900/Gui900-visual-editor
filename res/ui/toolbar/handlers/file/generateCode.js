'use strict';
var toolBar= toolBar || {};
toolBar.handlers= toolBar.handlers || {};
toolBar.handlers.file= toolBar.handlers.file || {};

toolBar.handlers.file.generateCode= function (e) {
    var p= localStorage.getItem("generateCodePath") || "gui900.h";
    var path=prompt("Please enter the path of Gui900 library, to include it in the generated code.\nThis file name will be used in an #include statement, you can change it later.",p);
    if(!path)return;
    localStorage.setItem("generateCodePath", path);
    var code=generateCode(path);

    var el=$("<div></div>").css({"height": "300px", "width": "350px"});
    monaco.editor.create(el[0],{...{
        language: "cpp",
        value: code,
        automaticLayout: true,
        theme: "GVE-"+$("html").attr('theme'),
        readOnly: true,
        minimap: {
            enabled: false
        },
        scrollbar:{
            alwaysConsumeMouseWheel: false
        }
    }, ...(JSON.parse(localStorage.getItem("monacoGlobalOptions"))),
        ...(JSON.parse(localStorage.getItem("monacoCppOptions"))),
        ...(JSON.parse(localStorage.getItem("monacoGenerateCodeResultOptions")))});
    
    
    dialog(el, [
        {
            "id": 0,
            "text": "OK"
        }
    ], function () {
        dialog.close();
    });
    $("#dialog .content").addClass(["doNotTouchCss","defaultCursor"]);
}
