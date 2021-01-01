'use strict';
function LP_GV_Toolbar_Handler_2(){
    toolBar.handlers.open_from_file=function (e) {
        $("#fileinput").trigger("click");
    }
}
function LP_CreateHiddenFileInput(){
    $(document.body).append($('<input type="file" class="hidden" name="fileinput" id="fileinput"/>'));
    $('#fileinput').on('change', function() { 
        
        var fr=new FileReader(); 
        fr.onload=function(){ 
            alert(fr.result);
        } 
        
        fr.readAsText(this.files[0]); 
    }) 
}