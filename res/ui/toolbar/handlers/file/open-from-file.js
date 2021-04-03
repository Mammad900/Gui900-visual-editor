'use strict';
var toolBar= toolBar || {};
toolBar.handlers= toolBar.handlers || {};
toolBar.handlers.file= toolBar.handlers.file || {};
toolBar.handlers.file.open= toolBar.handlers.file.open || {};

toolBar.handlers.file.open.open_from_file=function (e) {
    $("#fileinput").trigger("click");
}

function LP_CreateHiddenFileInput(){
    $(document.body).append($('<input type="file" class="hidden" name="fileinput" id="fileinput" accept=".gui900"/>'));
    $('#fileinput').on('change', function() { 
        if(($("#fileinput")[0].value.match(/\.([^\.]+)$/)[1])!="gui900"){
            notification.error("This file is not a Gui900 visual editor project file");
            return;
        }
        var fr=new FileReader(); 
        fr.onload=function(){ 
            fileIO.load(fr.result)
        } 
        
        fr.readAsText(this.files[0]); 
    }) 
}
