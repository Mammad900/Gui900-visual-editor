'use strict';
function LP_GV_ElementsTableRows() {
    elements.table.rows=
    {
        /**
         * Gets the #th row of the table
         * @param {number} index The # of the row
         */
        getRow: function(index){
            return $("#elements_table tr:nth-child("+String(index+2)+")")[0]; // nth-child is one-based, not zero based
        },

        new:
        /**
         * Creates a new row in the table
         * @param {string} name The text to show in the "Text" column
         * @param {"Button"|"Label"|"Check-box"|"Slider"|"Radio-button"} type Text to show inside 'type' column
         */
        function(name,type,titleEditable=false){
            var num=this.data.length;
            var td1=$("<td></td>");
            var tr=$("<tr></tr>").append(td1);
            var buttons= elements.table.buttons.generateTripleButtons(td1);
            tr.append($("<td></td>").text(num));
            var td3=$("<td></td>").text(name).attr("contenteditable",titleEditable);
            if(titleEditable){ 
                td3.on("input", function (e) {
                    if(elements.selectedElement==num){
                        elements.updatePropertiesTitle(num);
                    }
                })
                // https://stackoverflow.com/a/44162034/13561926
                .on('paste', function(e) {
                    //strips elements added to the editable tag when pasting
                    var $self = $(this);
                    setTimeout(function() {$self.html($self.text());}, 0);
                })
                .on('keypress', function(e) {
                    //ignores enter key
                    return e.which != 13;
                });
            }
            tr.append(td3);
            tr.append($("<td></td>").text(type));
            this.data.push(buttons);
            $("#elements_table").append(tr);
            buttons[1].prop("disabled",true);
            if(num==0){
                buttons[0].prop("disabled",true);
            }
            else{
                this.data[num-1][1].prop("disabled",false);
            }
            this.sortNumbers();
            return tr;
        },

        /**
         * Sorts the cells in '#' column
         */
        sortNumbers: function(){
            var trs= $("#elements_table tr");
            for(var i=1;i<trs.length;i++){
                $(trs[i]).children(":nth-child(2)").text(i-1);
            }
        },
        
        data: []
    }
}
