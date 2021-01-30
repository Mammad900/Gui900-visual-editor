function showMonacoEditorOptionOverridesEditor() {
    var cont=$("<div>");

    var lastMod="monacoGlobalOptions";
    var modSelect= properties.gen.select(cont, "", "monacoEditorOptionsOverridesEditor_Class", {
        "monacoGlobalOptions"               : "All monaco editor instances",
        "monacoCppOptions"                  : "All C++ monaco editor instances",
        "monacoJsonOptions"                 : "All JSON monaco editor instances",
        "monacoOptionsEditorOptions"        : "Monaco editor custom options editor instance",
        "monacoGenerateCodeResultOptions"   : "Code generator result monaco instance",
        "monacoMainCodeEditorOptions"       : "Main code editor instance"
    }, lastMod).css({
        "background": "var(--input-color)",
        "color": "var(--text-color",
        "padding": "7px",
        "border": "none"
    });

    var mC=$("<div>").height("350px").addClass(["noNotTouchCss", "defaultCursor"]);
    var OEMS= monaco.editor.create(mC[0],{...{
        language: "json",
        value: localStorage.getItem("monacoGlobalOptions"),
        automaticLayout: true,
        theme: "GVE-"+$("html").attr('theme'),
    }, ...(JSON.parse(localStorage.getItem("monacoGlobalOptions"))),
       ...(JSON.parse(localStorage.getItem("monacoJsonOptions"))),
       ...(JSON.parse(localStorage.getItem("monacoOptionsEditorOptions")))});
    
    modSelect.on("change", function (e) {
        localStorage.setItem(lastMod, OEMS.getValue());
        OEMS.setValue(localStorage.getItem(modSelect.val()) || "{\n    \n}");
        lastMod=modSelect.val();
    })

    cont.append(mC);
    cont.append("Changes will be applied at next creation of each monaco editor instance (after restart for main code editor)");
    
    dialog(cont, [
        {
            "text": "OK",
            "id": 0
        }
    ], function (id, e) {
        if(id==0){
            localStorage.setItem(lastMod, OEMS.getValue());
            dialog.close();
        }
    })
}