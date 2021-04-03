'use strict';
/**
 * 
 * @param {JQuery.KeyDownEvent} e 
 */
function onKeyDown(e){
    if((e.ctrlKey)&&(e.key=="o")){
        e.preventDefault();
        toolBar.handlers.file.open.open_from_file();
    }
    if((e.ctrlKey)&&(e.key=="s")){
        e.preventDefault();
        toolBar.handlers.file.save.saveToFile();
    }
}
function LP_keyBindings(){
    $(document).on("keydown",onKeyDown);
}
