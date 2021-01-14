var require = { paths: { 'vs': 'res/code-editor/monaco-editor/min/vs' } };

loadJsCssFile("res/code-editor/monaco-editor/min/vs/loader.js");
loadJsCssFile("res/code-editor/monaco-editor/min/vs/editor/editor.main.nls.js");
loadJsCssFile("res/code-editor/monaco-editor/min/vs/editor/editor.main.js");

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
        value: "void a(){\n    \n}",
        automaticLayout: true,
        theme: "GVE-"+$("html").attr('theme'),
    }, ...(JSON.parse(localStorage.getItem("monacoGlobalOptions"))),
       ...(JSON.parse(localStorage.getItem("monacoCppOptions"))),
       ...(JSON.parse(localStorage.getItem("monacoMainCodeEditorOptions")))});

    
    var exitFullScreen = monacoInstance.addCommand(monaco.KeyCode.Escape, function() {
        $('#monaco-container').removeClass('fullscreen');
    });
}

function codeEditorFullScreen() {
    if($("#code-editor").hasClass('hiddenbox')){
        $('#monaco-container').addClass('fullscreen');
        notification.createNotification("info","Press <kbd>Esc</kbd> to exit full screen");
    }
}