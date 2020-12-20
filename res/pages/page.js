'use strict';
var pages = {
    data: [],
    create:
        /**
         * 
         */
        function () {
            var i = pages.data.length;
            var tr = pages.table.rows.create("Untitled");
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
    selectPage:
        /**
         * 
         * @param {Number} i 
         */
        function (i) {
            $(pages.table.rows.getRow(pages.currentPage)).removeClass("selected");
            if(elements.selectedElement!=-1)
                elements.types[elements.data[elements.selectedElement].type].saveProperties(elements.selectedElement);
            properties.getElement().children().remove();
            elements.selectedElement=-1;

            pages.data[pages.currentPage].elements=elements.data;
            pages.data[pages.currentPage].background=$("#page_bc_color_input").val();
            elements.data=[];
            $("#elements_table tr:not(:first-child)").remove();
            elements.table.rows.data=[];

            pages.currentPage = i;

            pages.data[pages.currentPage].elements.forEach(function(v){
               elements.create(v);
            });
            $("#page_bc_color_input").val(pages.data[pages.currentPage].background).css("background-color",pages.data[pages.currentPage].background)

            $(pages.table.rows.getRow(i)).addClass("selected");
        },
    currentPage: 0
}
