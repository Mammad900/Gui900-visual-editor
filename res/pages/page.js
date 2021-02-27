'use strict';
var pages = {
    data: [],
        create () {
            var i = pages.data.length;
            var tr = pages.table.rows.create(i==0?"The only page":"Untitled");
            if((i>0)&&($(pages.table.rows.getRow(0)).children()[2].innerHTML=="The only page")){
                $(pages.table.rows.getRow(0)).children()[2].innerHTML="Main page"
            }
            pages.data.push({
                elements: [],
                background: "#000000"
            });
            pages.selectPage(i);

            
            tr.on("click",function (e) {
                if(e.target==tr.children()[0]){
                    var num= $("#pages_table tr").index(tr)-1
                    pages.selectPage(num);
                }
            });
        },
        /**
         * 
         * @param {Number} i 
         */
        selectPage (i) {
            $(pages.table.rows.getRow(pages.currentPage)).removeClass("selected");
            elements.selectElement(-1);

            pages.data[pages.currentPage].elements=elements.data;
            pages.data[pages.currentPage].background=$("#page_bc_color_input").val();
            elements.data=[];
            $("#elements_table tr:not(:first-child)").remove();
            elements.table.rows.data=[];

            pages.currentPage = i;

            pages.data[pages.currentPage].elements.forEach(function(v,i){
               elements.create(v,false,i!=(pages.data[pages.currentPage].elements.length-1));
            });
            $("#page_bc_color_input").val(pages.data[pages.currentPage].background).css("background-color",pages.data[pages.currentPage].background)

            $(pages.table.rows.getRow(i)).addClass("selected");
        },
    currentPage: 0
}

function LP_createFirstPage() {
    $("#new_page_button").on("click", function (e) {
        if(!(e.target.innerHTML=='OK')){
            pages.create()
        }
    })
    if(!localStorage.getItem("fileToBeLoaded")){
        pages.create();
    }
    else{
        fileIO.loadProject(localStorage.getItem("fileToBeLoaded"));
        localStorage.setItem("fileToBeLoaded","");
    }
}
