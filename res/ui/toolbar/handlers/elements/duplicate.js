toolBar.handlers.elements = {
    duplicate: function (e) {
        if(elements.selectedElement!=-1) {
            var dt=elements.data[elements.selectedElement];
            if(dt.type=="Slider"){
                dt.title+=" - Copy";
            }
            else{
                dt.text+=" - Copy";
            }
            elements.create(dt);
        };
    }
}