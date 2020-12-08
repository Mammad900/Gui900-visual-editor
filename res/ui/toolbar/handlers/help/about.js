'use strict';
toolBar.handlers.help= {
    about: function (e) {
        dialog.new(
            `Gui900 UI Editor<br>
            By <a href="https://github.com/Mammad900" target="_blank">Mammad900</a><br>
            JQuery 3.5.1<br>
            Font Awesome Free 5.15.1`,[
            {
                "id": 0,
                "text": "OK",
                "key": 27
            }
        ],function (id,e) {dialog.close();})
    }
}