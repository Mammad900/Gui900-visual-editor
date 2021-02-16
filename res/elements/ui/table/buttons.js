'use strict';
function LP_GV_ElementsTableButtons(){
elements.table={
    buttons : {
        /**
         * Generates buttons 'move up', 'move down', 'delete element' and puts it in the given element
         * @param {JQuery<HTMLElement>} td The <td> element to put buttons into
         */
        generateTripleButtons(td) {
            var container=$("<div></div>");
            container.addClass("buttons");

            var b1=elements.table.buttons.generateButton(
                `<i class="fas fa-arrow-up"></i>`,
                "Move up", elements.table.buttons.actions.moveUp);
            container.append(b1[0]);
            var b2=elements.table.buttons.generateButton(
                `<i class="fas fa-arrow-down"></i>`,
                "Move down", elements.table.buttons.actions.moveDown);
            container.append(b2[0]);
            var b3=elements.table.buttons.generateButton(
                `<i class="fas fa-times"></i>`,
                "Delete element", elements.table.buttons.actions.delete)
            container.append(b3[0]);

            td.append(container);
            return [b1[1],b2[1],b3[1]];
        },
        /**
         * Generates a button for use in elements table
         * @param {string} content HTML contents of the button
         * @param {string} title Tooltip to show on hover, using HTML 'title' property
         * @param {void} onclick onClick event of the button
         * @param {style} style HTML 'style' attributes for the <span> element containing button
         */
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
            moveUp(){
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
                if(i+1==elements.selectedElement){
                    elements.selectedElement--;
                }
                else if(i==elements.selectedElement){
                    elements.selectedElement++;
                }
                elements.table.rows.sortNumbers();
                
                var arr2=elements.data[i];
                elements.data[i]=elements.data[i+1];
                elements.data[i+1]=arr2;
            },
            moveDown(){
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
                if(i==n){
                    elements.table.rows.data[n][1].prop("disabled",true);
                    elements.table.rows.data[n-1][1].prop("disabled",false);
                }
                if(i-1==elements.selectedElement){
                    elements.selectedElement++;
                }
                else if(i==elements.selectedElement){
                    elements.selectedElement--;
                }
                elements.table.rows.sortNumbers();

                var arr2=elements.data[i];
                elements.data[i]=elements.data[i-1];
                elements.data[i-1]=arr2;
            },
            delete(index){
                var hasIndex=typeof(index)=='number';
                var row=(!hasIndex)?$(this):undefined;
                dialog("Do you really want to <strong>delete</strong> this element?<br>This cannot be undone.",[
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
                        if(elements.selectedElement!=-1)
                            elements.types[elements.data[elements.selectedElement].type].saveProperties(elements.selectedElement);
                        $("#properties-header-details").text("No item selected");

                        var tr =(!hasIndex)?(row.parent().parent().parent().parent()):(elements.table.rows.getRow(index));
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
                        elements.data.splice(i, 1);
                        elements.selectElement(-1, false);
                    }
                    elements.table.rows.sortNumbers();
                    dialog.close();
                })
            }
        }
    }
};
}
function LP_HandleNewElementButton(){
    $("#new-element-button").on("click",async function(){
        await elements.create("Button");
    });
    $("#new-element-label").on("click",async function(){
        await elements.create("Label");
    });
    $("#new-element-checkbox").on("click",async function(){
        await elements.create("Check-box");
    });
    $("#new-element-slider").on("click",async function(){
        await elements.create("Slider", true);
    });
    $("#new-element-radio-button").on("click",async function(){
        await elements.create("Radio button");
    });
}

function cetnbtp() {
    var tooltip=$("#new_element_button .tooltiptext");
    if(($("#preview").hasClass("hiddenbox"))&&($("#properties").hasClass("hiddenbox"))){
        if(!tooltip.hasClass("bottom"))tooltip.addClass("bottom");
    }
    else{
        if(tooltip.hasClass("bottom"))tooltip.removeClass("bottom");
    }
}
