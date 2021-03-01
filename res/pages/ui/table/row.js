'use strict';
var pages= pages || {};
pages.table = pages.table || {};
pages.table.rows =  {
    getRow(index){
        return $("#pages_table tr:nth-child("+String(index+2)+")")[0];
    },

    create(name){
        var num=this.data.length;
        var td1=$("<td></td>");
        var tr=$("<tr></tr>").append(td1);
        var buttons= pages.table.buttons.generateTripleButtons(td1);
        tr.append($("<td></td>").text(num));
        tr.append(
            $("<td></td>")
            .text(name)
            .attr("contenteditable",true)
            // https://stackoverflow.com/a/44162034/13561926
            .on('paste', function(e) {
                //strips elements added to the editable tag when pasting
                var $self = $(this);
                setTimeout(function() {$self.html($self.text());}, 0);
            })
            .on('keypress', function(e) {
                //ignores enter key
                return e.which != 13;
            })
        );
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
        return tr;
    },

    sortNumbers(){
        var trs= $("#pages_table tr");
        for(var i=1;i<trs.length;i++){
            $(trs[i]).children(":nth-child(2)").text(i-1);
        }
    },
    
    data: []
}
