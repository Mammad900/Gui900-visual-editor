'use strict';
var dialog=
{
    new:
    /**
     * H
     * @param {String|JQuery|HTMLElement} Content The content of the dialog
     * @param {Array<object>} options Buttons of the dialog
     * @param {(result:Number|String,event:JQuery.ClickEvent)=>void} callback 
     */
    function(Content, options, callback, defaultKeys=true){

        var dialogE=$("<div></div>").attr("id","dialog"); // dialogE= dialog element

        var content=$("<div></div>").addClass("content");
        dialogE.append(content);

        var content2=$("<div></div>");
        content.append(Content); // It accepts String, DOM object and JQuery object.

        var optionDiv=$("<div></div>").addClass("options");

        function compare( a, b ) {
            if ( a.id < b.id ){
              return -1;
            }
            if ( a.id > b.id ){
              return 1;
            }
            return 0;
        }
          
        options.sort( compare );
        var act=undefined;
        options.forEach(function(option){
            var btn=$('<button></button>').addClass("option").text(option["text"]);
            btn.on("click",function(e){
                var button=$(e.target);
                callback(option["id"],e);
            });
            if(option["key"]!=undefined){
                if(option["key"]==13)
                    act=btn;
                var kd= function(e){
                    if(e.which==option["key"]){
                        var id=option["id"];
                        callback(id,e);
                    }
                    $(document).off("keydown",kd)
                };
                $(document).on("keydown",kd);
            }
            optionDiv.append(btn);
        });

        dialogE.on("click",function(e){
            if(e.target==dialogE[0]){
                callback(-1,e);
            }
        });
        content.append(optionDiv);
        dialogE.append(content);
        $(document.body).append(dialogE);
        if(act!=undefined)act.focus();
        return content2;
    },
    
    close: function () {
        $("#dialog, #dialog *").remove();
    }
}