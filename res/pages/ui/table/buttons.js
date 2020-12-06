
pages.table= {
    buttons : {
        generateTripleButtons: function(td) {
            var container=$("<div></div>");
            container.addClass("buttons");

            var b1=pages.table.buttons.generateButton(
                `<i class="fas fa-arrow-up"></i>`,
                "Move up", function(){
                    var e=$(this).parent().parent().parent().parent();
                    e.prev().insertAfter(e);
                    var i=$("#pages_table tr").index(e)-1;

                    var arr=pages.table.rows.data[i];
                    pages.table.rows.data[i]=pages.table.rows.data[i+1];
                    pages.table.rows.data[i+1]=arr;
                    if(i==0){
                        pages.table.rows.data[0][0].prop("disabled",true);
                        pages.table.rows.data[1][0].prop("disabled",false);
                    }
                    var n=pages.table.rows.data.length-1;
                    if(i+1==n){
                        pages.table.rows.data[n][1].prop("disabled",true);
                        pages.table.rows.data[n-1][1].prop("disabled",false);
                    }
                    pages.table.rows.sortNumbers();
                });
            container.append(b1[0]);
            var b2=pages.table.buttons.generateButton(
                `<i class="fas fa-arrow-down"></i>`,
                "Move down", function(){
                    var e=$(this).parent().parent().parent().parent();
                    e.next().insertBefore(e);
                    var i=$("#pages_table tr").index(e)-1;

                    var arr=pages.table.rows.data[i];
                    pages.table.rows.data[i]=pages.table.rows.data[i-1];
                    pages.table.rows.data[i-1]=arr;

                    if(i==1){
                        pages.table.rows.data[0][0].prop("disabled",true);
                        pages.table.rows.data[1][0].prop("disabled",false);
                    }
                    var n=pages.table.rows.data.length-1;
                    if(i++==n){
                        pages.table.rows.data[n][1].prop("disabled",true);
                        pages.table.rows.data[n-1][1].prop("disabled",false);
                    }
                    pages.table.rows.sortNumbers();
                });
            container.append(b2[0]);
            var b3=pages.table.buttons.generateButton(
                `<i class="fas fa-times"></i>`,
                "Delete page", function(){
                    var row=$(this);
                    dialog.new("Do you really want to <strong>delete</strong> this page?<br>This cannot be undone.",[
                        {
                            "id": 0,
                            "text": "No",
                            "key": 27
                        },
                        {
                            "id": 1,
                            "text": "Yes",
                            "key": 13
                        }
                    ],function (id,e) {
                        if(id==1){
                            var tr= row.parent().parent().parent().parent();
                            var i=$("#pages_table tr").index(tr)-1;
                            tr.remove();
                            pages.table.rows.data.splice(i, 1)
                            if(!pages.table.rows.data.length==0){
                                if(i==0){
                                    pages.table.rows.data[0][0].prop("disabled",true)
                                }
                                if(i==pages.table.rows.data.length){
                                    pages.table.rows.data[i-1][1].prop("disabled",true);
                                }
                            }
                        }
                        pages.table.rows.sortNumbers();
                        dialog.close();
                    })
                })
            container.append(b3[0]);

            td.append(container);
            return [b1[1],b2[1],b3[1]];
        },
        generateButton: function(content, title, onclick,style=""){
            var span= $("<span></span>");
            span.addClass(["inline","block"]);
            span.attr("style",style);

            var button= $("<button></button>");
            button.addClass(["button","size38"]);
            button.attr("title",title);
            button.on("click",onclick);
            button.html(content);

            span.append(button);

            return [span,button];
        }
    }
};
function LP_handleNewPageButton(){
    $("#new_page_button").on("click",function(){
        pages.table.rows.create("Untitled");
    });
}