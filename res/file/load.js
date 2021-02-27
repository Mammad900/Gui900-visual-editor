'use strict';
function LP_GV_loadProject() {
    fileIO.load=function (json) {
        var data=JSON.parse(json);
        if(!data){
            notification.error("Project is corrupt");
            return;
        }
        if((data.fileVersion!="0.0.3")&&
           (data.fileVersion!="0.0.2")&&
           (data.fileVersion!="0.0.1")){
            notification.error("This project was saved in an incompatible version of Gui900 visual editor");
            return;
        }
        localStorage.setItem("fileToBeLoaded",json);
        location.reload();
    }

    fileIO.loadProject= function (json) {
        var data=JSON.parse(json);


        // Validation

        if(!data){
            notification.error("Project is corrupt");
            return;
        }
        if((data.fileVersion!="0.0.3")&&
           (data.fileVersion!="0.0.2")&&
           (data.fileVersion!="0.0.1")){
            notification.error("This project was saved in an incompatible version of Gui900 visual editor");
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

        var title = data.title || "Untitled project";
        document.title = title + " - Gui900 visual editor";
        $("#project-name").text(title);




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
}
