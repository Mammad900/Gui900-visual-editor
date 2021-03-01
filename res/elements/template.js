var elements=elements || {};
elements.templates=elements.templates || {};

elements.templates.setGlobalTemplate= function(){
    if(elements.selectedElement!=-1){
        elements.types[elements.data[elements.selectedElement].type].saveProperties(elements.selectedElement)
        var el=elements.data[elements.selectedElement];
        localStorage.setItem("elementTemplate-"+el.type.replace(' ','-'), JSON.stringify(el));
        notification.success(`New ${el.type}s will be created exactly like the selected element.`);
        notification.info("You can delete this element now.");
    }else{
        notification.error("Please select an element so it can be set as template element.");
    }
}

elements.templates.clearGlobalTemplate=function(type){
    localStorage.removeItem("elementTemplate-"+type.replace(' ','-'));
    notification.success(`New ${type}s will use the default template.`);
}