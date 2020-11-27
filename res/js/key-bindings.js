/**
 * 
 * @param {JQuery.KeyDownEvent} e 
 */
function onKeyDown(e){
    if((e.ctrlKey)&&(e.which==79)){
        e.preventDefault();
        toolBar.handlers.open_from_file();
    }
}
function LP_keyBindings(){
    $(document).on("keydown",onKeyDown);
}