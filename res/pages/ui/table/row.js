function LP_GV_PagesTableRows() {
    pages.table.rows=
    {
        getRow: function(index){
            return $("#pages_table>tr:nth-child("+String(index+1)+")")[0];
        },

        create: function(name){
            var num=this.data.length;
            var td1=$("<td></td>");
            var tr=$("<tr></tr>").append(td1);
            var buttons= pages.table.buttons.generateTripleButtons(td1);
            tr.append($("<td></td>").text(num));
            tr.append($("<td></td>").text(name).attr("contenteditable",true));
            this.data.push(buttons);
            $("#pages_table").append(tr);
            buttons[1].prop("disabled",true);
            if(num==0){
                buttons[0].prop("disabled",true);
            }
            else{
                this.data[num-1][1].prop("disabled",false);
            }
            this.sortNumbers();
        },

        sortNumbers: function(){
            var trs= $("#pages_table tr");
            for(var i=1;i<trs.length;i++){
                $(trs[i]).children(":nth-child(2)").text(i-1);
            }
        },
        
        data: []
    }
}
function LP_CreateFirstPageRow(){
    pages.table.rows.create("Home");
};