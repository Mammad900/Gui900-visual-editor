'use strict';
var toolBar= toolBar || {};
toolBar.handlers= toolBar.handlers || {};
toolBar.handlers.file= toolBar.handlers.file || {};
toolBar.handlers.file.open= toolBar.handlers.file.open || {};

toolBar.handlers.file.open.open_from_file=function (e) {
    $("#fileinput").trigger("click");
}

function LP_CreateHiddenFileInput(){
    $(document.body).append($('<input type="file" class="hidden" name="fileinput" id="fileinput"/>'));
    $('#fileinput').on('change', function() { 
        
        var fr=new FileReader(); 
        fr.onload=function(){ 
            fileIO.load(fr.result)
        } 
        
        fr.readAsText(this.files[0]); 
    }) 
}
