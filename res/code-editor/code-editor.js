'use strict';

var monacoInstance=undefined;

function LP_LoadEditor() {
    monaco.editor.defineTheme('GVE-dark', { base: 'vs-dark', inherit: true, rules: [{  }], });
    monaco.editor.defineTheme('GVE-dark-red'   , { base: 'vs-dark', inherit: true, rules: [{ background: "200000" }], colors: { "editor.background": "#200000" } });
    monaco.editor.defineTheme('GVE-dark-green' , { base: 'vs-dark', inherit: true, rules: [{ background: "002000" }], colors: { "editor.background": "#002000" } });
    monaco.editor.defineTheme('GVE-dark-blue'  , { base: 'vs-dark', inherit: true, rules: [{ background: "000020" }], colors: { "editor.background": "#000020" } });
    monaco.editor.defineTheme('GVE-dark-yellow', { base: 'vs-dark', inherit: true, rules: [{ background: "202000" }], colors: { "editor.background": "#202000" } });
    monaco.editor.defineTheme('GVE-light-red'   , { base: 'vs', inherit: true, rules: [{ background: "ff8e8e" }], colors: { "editor.background": "#ff8e8e" } });
    monaco.editor.defineTheme('GVE-light-green' , { base: 'vs', inherit: true, rules: [{ background: "8eff8e" }], colors: { "editor.background": "#8eff8e" } });
    monaco.editor.defineTheme('GVE-light-blue'  , { base: 'vs', inherit: true, rules: [{ background: "8e8eff" }], colors: { "editor.background": "#8e8eff" } });
    monaco.editor.defineTheme('GVE-light-yellow', { base: 'vs', inherit: true, rules: [{ background: "ffff8e" }], colors: { "editor.background": "#ffff8e" } });
    monaco.editor.defineTheme('GVE-high-contrast', { base: 'hc-black', inherit: true, rules: [{  }], });
    monaco.editor.defineTheme('GVE-windows-10-UWP-dark-style', { base: 'vs-dark', inherit: true, rules: [{ background: "000000" }], colors: { "editor.background": "#000000" } });
    monaco.editor.defineTheme('GVE-light', { base: 'vs', inherit: true, rules: [{  }], });

    monacoInstance= monaco.editor.create($("#monaco-container")[0],{...{
        language: "cpp",
        value: projectCode["globalBeginning"],
        automaticLayout: true,
        theme: "GVE-"+$("html").attr('theme'),
        scrollbar:{
            alwaysConsumeMouseWheel: false
        }
    }, ...(JSON.parse(localStorage.getItem("monacoGlobalOptions"))),
       ...(JSON.parse(localStorage.getItem("monacoCppOptions"))),
       ...(JSON.parse(localStorage.getItem("monacoMainCodeEditorOptions")))});
    
    monacoInstance.addCommand(monaco.KeyCode.Escape, function() {
        $('#monaco-container').removeClass('fullscreen');
    });
    monacoInstance.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_D, function () {
        if((window.docWin!=undefined) && (!window.docWin.closed)){
            window.docWin.focus();
        }
        else {
            window.docWin=window.open("https://github.com/Mammad900/Gui900/wiki/","_blank", "width=500;height=500");
            notification.info("Use <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>D</kbd> on code editor to re-focus documentation window.",[], 15000)
        }
    })

    $("#codeParts span").on("click", function (e) {
        var el=$(e.target);
        if(el[0].tagName=="CODE"){
            el=el.parent();
        }
        projectCode[$("#codeParts span[data-selected=true]").attr("data-name")]=monacoInstance.getValue();
        $("#codeParts span[data-selected]").attr("data-selected","false");
        monacoInstance.setValue(projectCode[el.attr("data-name")]);
        el.attr("data-selected","true");
    })
}

function codeEditorFullScreen() {
    if(!$("#code-editor").hasClass('hiddenbox')){
        $('#monaco-container').addClass('fullscreen');
        notification.createNotification("info","Press <kbd>Esc</kbd> to exit full screen");
    }
}

var projectCode= {
    "globalBeginning": "",
    "globalAfterConfig": "",
    "globalAfterLibrary": "",
    "setupBeginning": "",
    "setupBeforeStart": "",
    "setupAfterStart": "",
    "loop": "",
    "globalAfterLoop": "",
}
