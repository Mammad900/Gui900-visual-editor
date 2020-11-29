function LP_GV_ElementsTableRows() {
    elements.table.rows=
    {
        getRow: function(index){
            return $("#elements_table>tr:nth-child("+String(index+1)+")")[0];
        },

        new:
        /**
         * 
         * @param {string} name The text to show in the "Text" column
         * @param {"Button"|"Label"|"Check-box"|"Slider"|"Radio-button"} type 
         */
        function(name,type,titleEditable=false){
            var num=this.data.length;
            var td1=$("<td></td>");
            var tr=$("<tr></tr>").append(td1);
            var buttons= elements.table.buttons.generateTripleButtons(td1);
            tr.append($("<td></td>").text(num));
            tr.append($("<td></td>").text(name).attr("contenteditable",titleEditable));
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

        sortNumbers: function(){
            var trs= $("#elements_table tr");
            for(var i=1;i<trs.length;i++){
                $(trs[i]).children(":nth-child(2)").text(i-1);
            }
        },
        
        data: []
    }
}
