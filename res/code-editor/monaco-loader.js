var require = { paths: { 'vs': 'res/code-editor/monaco-editor/min/vs' } };

loadJsCssFile("res/code-editor/monaco-editor/min/vs/loader.js");
loadJsCssFile("res/code-editor/monaco-editor/min/vs/editor/editor.main.nls.js");
loadJsCssFile("res/code-editor/monaco-editor/min/vs/editor/editor.main.js");

var monacoInstance=undefined;

function LP_LoadEditor() {
    monaco.editor.defineTheme('GVE-dark', {
        base: 'vs-dark',
        inherit: true,
        rules: [{  }],
    });
    monaco.editor.defineTheme('GVE-light', {
        base: 'vs',
        inherit: true,
        rules: [{  }],
    });

    monacoInstance= monaco.editor.create($("#monaco-container")[0],{
        language: "cpp",
        value: "void a(){\n    \n}",
        automaticLayout: true,
        theme: "GVE-"+$("html").attr('theme')
    })
}