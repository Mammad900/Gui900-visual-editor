
elements.table={
    buttons : {
        generateTripleButtons: function(td) {
            var container=$("<div></div>");
            container.addClass("buttons");

            var b1=elements.table.buttons.generateButton(
                `<i class="fas fa-arrow-up"></i>`,
                "Move up", function(){
                    var e=$(this).parent().parent().parent().parent();
                    e.prev().insertAfter(e);
                    var i=$("#elements_table tr").index(e)-1;

                    var arr=elements.table.rows.data[i];
                    elements.table.rows.data[i]=elements.table.rows.data[i+1];
                    elements.table.rows.data[i+1]=arr;
                    if(i==0){
                        elements.table.rows.data[0][0].prop("disabled",true);
                        elements.table.rows.data[1][0].prop("disabled",false);
                    }
                    var n=elements.table.rows.data.length-1;
                    if(i+1==n){
                        elements.table.rows.data[n][1].prop("disabled",true);
                        elements.table.rows.data[n-1][1].prop("disabled",false);
                    }
                    elements.table.rows.sortNumbers();
                    
                    var arr2=elements.data[i];
                    elements.data[i]=elements.data[i+1];
                    elements.data[i+1]=arr2;
                });
            container.append(b1[0]);
            var b2=elements.table.buttons.generateButton(
                `<i class="fas fa-arrow-down"></i>`,
                "Move down", function(){
                    var e=$(this).parent().parent().parent().parent();
                    e.next().insertBefore(e);
                    var i=$("#elements_table tr").index(e)-1;

                    var arr=elements.table.rows.data[i];
                    elements.table.rows.data[i]=elements.table.rows.data[i-1];
                    elements.table.rows.data[i-1]=arr;

                    if(i==1){
                        elements.table.rows.data[0][0].prop("disabled",true);
                        elements.table.rows.data[1][0].prop("disabled",false);
                    }
                    var n=elements.table.rows.data.length-1;
                    if(i++==n){
                        elements.table.rows.data[n][1].prop("disabled",true);
                        elements.table.rows.data[n-1][1].prop("disabled",false);
                    }
                    elements.table.rows.sortNumbers();

                    var arr2=elements.data[i];
                    elements.data[i]=elements.data[i-1];
                    elements.data[i-1]=arr2;
                });
            container.append(b2[0]);
            var b3=elements.table.buttons.generateButton(
                `<i class="fas fa-times"></i>`,
                "Delete element", function(){
                    var row=$(this);
                    dialog.new("Do you really want to <strong>delete</strong> this element?<br>This cannot be undone.",[
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
                            if(this.selectedElement!=-1)
                                elements.types[elements.data[elements.selectedElement].type].saveProperties(elements.selectedElement);
                            properties.getElement().children().remove();
                            $("#properties-header-details").text("No item selected");

                            var tr= row.parent().parent().parent().parent();
                            var i=$("#elements_table tr").index(tr)-1;
                            tr.remove();
                            elements.table.rows.data.splice(i, 1)
                            if(!elements.table.rows.data.length==0){
                                if(i==0){
                                    elements.table.rows.data[0][0].prop("disabled",true)
                                }
                                if(i==elements.table.rows.data.length){
                                    elements.table.rows.data[i-1][1].prop("disabled",true);
                                }
                            }
                            elements.data.splice(i, 1)
                            elements.selectedElement=-1;
                        }
                        elements.table.rows.sortNumbers();
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
function LP_HandleNewElementButton(){
    $("#new-element-button").on("click",function(){
        elements.create("Button");
    });
    $("#new-element-label").on("click",function(){
        elements.create("Label");
    });
    $("#new-element-checkbox").on("click",function(){
        elements.create("Check-box");
    });
    $("#new-element-slider").on("click",function(){
        elements.create("Slider", true);
    });
    $("#new-element-radio-button").on("click",function(){
        elements.create("Radio button");
    });
}