var require = { paths: { 'vs': 'res/code-editor/monaco-editor/min/vs' } };

loadJsCssFile("res/code-editor/monaco-editor/min/vs/loader.js");
loadJsCssFile("res/code-editor/monaco-editor/min/vs/editor/editor.main.nls.js");
loadJsCssFile("res/code-editor/monaco-editor/min/vs/editor/editor.main.js");

function LP_LoadEditor() {
    monaco.editor.create($("#monaco-container")[0],{
        language: "cpp",
        value: "void a(){\n    \n}",
        automaticLayout: true,
    })
}