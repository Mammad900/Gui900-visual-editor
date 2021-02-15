'use strict';
function LP_GV_Toolbar_Handler_3(){
    toolBar.handlers.help= {
        about: function (e) {
            dialog(
                `Gui900 UI Editor 0.1.0<br>
                By <a href="https://github.com/Mammad900" target="_blank">Mammad900</a><br>
                JQuery 3.5.1<br>
                JQuery UI 1.10.3<br>
                Monaco editor 0.21.3<br>
                Font Awesome Free 5.15.1`,[
                {
                    "id": 0,
                    "text": "OK",
                    "key": 27
                }
            ],function (id,e) {dialog.close();}, true)
        }
    }
}
