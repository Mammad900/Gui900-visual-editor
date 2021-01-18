function LP_GV_Toolbar_Handler_7() {
    toolBar.handlers.file.generateCode= function (e) {
        var path=prompt("Please enter the path of Gui900 library, to include it in the generated code.\nThis file name will be used in an #include statement, you can change it later.","gui900.h");
        var code=generateCode(path);

        var el=$("<div></div>").css("height", "300px");
        monaco.editor.create(el[0],{...{
            language: "cpp",
            value: code,
            automaticLayout: true,
            theme: "GVE-"+$("html").attr('theme'),
            readOnly: true,
            minimap: {
                enabled: false
            }
        }, ...(JSON.parse(localStorage.getItem("monacoGlobalOptions"))),
           ...(JSON.parse(localStorage.getItem("monacoGenerateCodeResultOptions"))),
           ...(JSON.parse(localStorage.getItem("monacoCppOptions")))});
        
        
        dialog.new(el, [
            {
                "id": 0,
                "text": "OK"
            }
        ], function () {
            dialog.close();
        });
        $("#dialog .content").addClass("doNotTouchCss");
    }
}