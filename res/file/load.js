'use strict';
var fileIO=fileIO || {};
fileIO.load=function (json) {
    var data;
    try{
        data = migrateOlderProject(json);
    }
    catch(err){
        if(err.constructor==SyntaxError){
            notification.error("Project is corrupt");
            return;
        }
    }
    if(!data){
        notification.error("Project is corrupt");
        return;
    }
    localStorage.setItem("fileToBeLoaded",JSON.stringify(data));
    location.reload();
}

fileIO.loadProject= function (json) {
    var data=JSON.parse(json);


    // Validation

    if(!data){
        notification.error("Project is corrupt");
        return;
    }




    // Settings

    settings.data=data.settings;

    settings.fields.screenBrightness.save(settings.data.screenBrightness.value,settings.data.screenBrightness.simulateInPreview);
    if((settings.data.orientation%2)==1){
        settings.fields.screenSize.save(settings.data.screenSize.height, settings.data.screenSize.width);
    }
    else{
        settings.fields.screenSize.save(settings.data.screenSize.width, settings.data.screenSize.height);
    }





    // Title

    document.title = data.title + " - Gui900 visual editor";
    $("#project-name").text(data.title);




    // Pages & elements

    data.pages.forEach(function (pg,i) {
        pages.create();
        $("#page_bc_color_input").val(pg.background);
        pg.elements.forEach(element => {
            elements.create(element)
        });
    })

    $("#pages_table tr:not(:first-of-type) td:nth-child(3)").each(function (index, element) {
        element.innerHTML=data.pages[index].name;
    });





    // Project code

    projectCode=data.code;
}
