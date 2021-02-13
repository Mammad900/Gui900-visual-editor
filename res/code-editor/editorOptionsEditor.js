'use strict';
function showMonacoEditorOptionOverridesEditor() {
    var cont=$("<div>")
            .attr("id", "settings"); // A hack to apply setting field styles to editor instance selector

    var lastMod="monacoGlobalOptions";
    var modSelect= properties.gen.select(cont, "", "monacoEditorOptionsOverridesEditor_Class", {
        "monacoGlobalOptions"               : "All monaco editor instances",
        "monacoCppOptions"                  : "All C++ monaco editor instances",
        "monacoJsonOptions"                 : "All JSON monaco editor instances",
        "monacoPropertiesWindowOptions"     : "All monaco editor instances in properties window",
        "monacoOptionsEditorOptions"        : "Monaco editor custom options editor instance",
        "monacoGenerateCodeResultOptions"   : "Code generator result monaco instance",
        "monacoMainCodeEditorOptions"       : "Main code editor instance",
        "monacoButtonEventOptions"          : "Button click event editor monaco instance",
    }, lastMod);

    var mC=$("<div>").height("350px")
                .addClass(["doNotTouchCss", "defaultCursor"])
                .css({
                    "margin-top": "10px",
                    "margin-bottom": "10px"
                });
    var OEMS= monaco.editor.create(mC[0],{...{
        language: "json",
        value: localStorage.getItem("monacoGlobalOptions") || "{\n    \n}",
        automaticLayout: true,
        theme: "GVE-"+$("html").attr('theme'),
        scrollbar:{
            alwaysConsumeMouseWheel: false
        }
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

    $("#dialog .content").addClass(["doNotTouchCss","defaultCursor"]);
}
