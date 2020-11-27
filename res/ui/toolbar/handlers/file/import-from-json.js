toolBar.handlers={
    file: {
        open: {
            import_from_json: function (e) {
                dialog.new("Please paste the JSON code here: <textarea id='dialog-json-input' rows='8'></textarea>",[
                    {
                        "id": 0,
                        "text": "Cancel"
                    },
                    {
                        "id": 1,
                        "text": "Continue"
                    }
                ],function (id,e) {
                    if(id==1){
                        alert($("#dialog-json-input").val());
                    }
                    //fileIO.load($("#dialog-json-input").val());
                    dialog.close();
                })
            }
        }
    }
}