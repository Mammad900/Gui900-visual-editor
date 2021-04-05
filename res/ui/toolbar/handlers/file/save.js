'use strict';
var toolBar= toolBar || {};
toolBar.handlers= toolBar.handlers || {};
toolBar.handlers.file= toolBar.handlers.file || {};
toolBar.handlers.file.save= toolBar.handlers.file.save || {};

toolBar.handlers.file.save.saveToFile = function(e) {
    // https://stackoverflow.com/a/30832210/13561926 deleted IE code
    // Function to download data to a file
    function download(data, filename, type) {
        var file = new Blob([data], {type: type});
        
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }

    download(JSON.stringify(fileIO.createJSON()), "Untitled.gui900", "gui900")
}

toolBar.handlers.file.save.saveToJSON = function(e) {
    dialog(("<textarea style='height: 300px;width: 350px' readonly>"+JSON.stringify(fileIO.createJSON())+"</textarea>"), [
        {
            "id": 0,
            "text": "OK"
        }
    ], function () {
        dialog.close();
    })
}