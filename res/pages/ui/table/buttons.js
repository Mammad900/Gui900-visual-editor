'use strict';
function LP_GV_PagesTableButtons(){
pages.table= {
    buttons : {
        generateTripleButtons(td) {
            var container=$("<div></div>");
            container.addClass("buttons");

            var b1=pages.table.buttons.generateButton(`<i class="fas fa-arrow-up"></i>`,"Move up", pages.table.buttons.actions.moveUp);
            container.append(b1[0]);
            var b2=pages.table.buttons.generateButton(`<i class="fas fa-arrow-down"></i>`, "Move down", pages.table.buttons.actions.moveDown);
            container.append(b2[0]);
            var b3=pages.table.buttons.generateButton(`<i class="fas fa-times"></i>`, "Delete page",pages.table.buttons.actions.delete);
            container.append(b3[0]);

            td.append(container);
            return [b1[1],b2[1],b3[1]];
        },
        generateButton(content, title, onclick,style=""){
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
        },
        actions: {
            delete(index){
                if(pages.data.length==1){
                    notification.error("You can't delete the last page");
                    return;
                }
                var hasIndex=typeof(index)=='number';
                var row=(!hasIndex)?$(this):undefined;
                dialog("Do you really want to <strong>delete</strong> this page?<br>This cannot be undone.",[
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
                        var tr =(!hasIndex)?(row.parent().parent().parent().parent()):(pages.table.rows.getRow(index));
                        var i=$("#pages_table tr").index(tr)-1;
                        var ib=false;
                        if(i==pages.currentPage){
                            pages.selectPage((i==0)?1:0);
                        }
                        else{
                            ib=i<pages.currentPage;
                        }

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

                        pages.data.splice(i, 1);
                        if(ib){
                            pages.currentPage--;
                        }
                    }
                    pages.table.rows.sortNumbers();
                    dialog.close();
                })
            },
            moveDown(){
                var e=$(this).parent().parent().parent().parent();
                e.next().insertBefore(e);
                var i=$("#pages_table tr").index(e)-1;

                var arr=pages.table.rows.data[i];
                pages.table.rows.data[i]=pages.table.rows.data[i-1];
                pages.table.rows.data[i-1]=arr;

                var arr2=pages.data[i];
                pages.data[i]=pages.data[i-1];
                pages.data[i-1]=arr2;
                
                if(pages.currentPage==i){
                    pages.currentPage--;
                }
                else if(pages.currentPage==i-1){
                    pages.currentPage++;
                }

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
            },
            moveUp(){
                var e=$(this).parent().parent().parent().parent();
                e.prev().insertAfter(e);
                var i=$("#pages_table tr").index(e)-1;

                var arr=pages.table.rows.data[i];
                pages.table.rows.data[i]=pages.table.rows.data[i+1];
                pages.table.rows.data[i+1]=arr;

                var arr2=pages.data[i];
                pages.data[i]=pages.data[i+1];
                pages.data[i+1]=arr2;
                
                if(pages.currentPage==i){
                    pages.currentPage++;
                }
                else if(pages.currentPage==i+1){
                    pages.currentPage--;
                }

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
            }
        }
    }
};
}
