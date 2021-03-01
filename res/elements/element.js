'use strict';
var elements = elements || {};


elements.sawHints= false;

elements.data=[];
/**
 * 
 * @param {"Button"|"Label"|"Check-box"|"Slider"|"Radio-button"|Object} el 
 */
elements.create=async function (el, saveCurrentElement=true, doNotModifyDOM=false) {
    var type;
    var elementData;
    if(typeof(el)=="object"){
        type=el.type;
        elementData=el;
    }
    else{
        type=el;
        elementData=elements.types[type].createDefaultDataObject();
    }
    var i=this.data.length;
    var tr= this.table.rows.new(((type=="Slider") ? (elementData.title) : (elementData.text)),type,type=="Slider");
    tr.data("index",i);
    this.data.push(elementData);
    elements.selectElement(i, saveCurrentElement, doNotModifyDOM);
    tr.on("click",function (e) {
        if(e.target==tr.children()[0]){
            var num= $("#elements_table tr").index(tr)-1
            elements.selectElement(num);
        }
    });
    if(!elements.sawHints){
        elements.sawHints=true;
        await createHint("selectElement",$(tr.children()[0]), "Click on the empty area to select the element.", true, "top");
        await createHint("moveElementUp",$("#elements_table tr:last-child .buttons>*:first-child"), "Click on this to move this element above the element above it (move it up).<br> It's disabled for the first element.<br>You can use it to move an element behind another.", true, "right");
        await createHint("moveElementDown",$("#elements_table tr:last-child .buttons>*:nth-child(2)"), "Click on this to move this element below the element below it (move it down).<br> It's disabled for the last element.<br>You can use it to move an element in front of another.", true, "right");
        await createHint("deleteElement",$("#elements_table tr:last-child .buttons>*:nth-child(3)"), "Click on this to delete the element.", false, "right");
    }
};

elements.types= {};

elements.selectElement=function(index, saveCurrentElement=true, doNotModifyDOM=false){
    if(this.selectedElement!=-1){
        if(saveCurrentElement){
            elements.types[this.data[this.selectedElement].type].saveProperties(this.selectedElement);
        }
        $(elements.table.rows.getRow(this.selectedElement)).removeClass("selected");
    }
    if(!doNotModifyDOM){
        properties.getElement().children().remove();
        if(index!=-1){
            var type=this.data[index].type;
            elements.types[type].createProperties(index);
            this.updatePropertiesTitle(index);
            $(elements.table.rows.getRow(index)).addClass("selected");
            $("#toolbar>.menuitem:nth-child(3)>div>.dropdown>.menuitem:nth-child(2)>.toolbar-button").removeClass("disabled");
            $("#toolbar>.menuitem:nth-child(3)>div>.dropdown>.menuitem:nth-child(3)>.toolbar-button").removeClass("disabled");
        }
        else{
            $("#toolbar>.menuitem:nth-child(3)>div>.dropdown>.menuitem:nth-child(2)>.toolbar-button").addClass("disabled");
            $("#toolbar>.menuitem:nth-child(3)>div>.dropdown>.menuitem:nth-child(3)>.toolbar-button").addClass("disabled");
        }
    }
    elements.selectedElement=index;
};

elements.updatePropertiesTitle=function (index) {
    $("#properties-header-details").text(this.data[index].type + ' #' + index + ' (' + $($("#elements_table").children().children()[index + 1]).children()[2].innerHTML + ")");
},
elements.selectedElement= -1;

var fontsList=   ['&FreeMono12pt7b', '&FreeMono18pt7b', '&FreeMono24pt7b', '&FreeMono9pt7b', '&FreeMonoBold12pt7b', '&FreeMonoBold18pt7b', '&FreeMonoBold24pt7b', '&FreeMonoBold9pt7b', '&FreeMonoBoldOblique12pt7b', '&FreeMonoBoldOblique18pt7b', '&FreeMonoBoldOblique24pt7b', '&FreeMonoBoldOblique9pt7b', '&FreeMonoOblique12pt7b', '&FreeMonoOblique18pt7b', '&FreeMonoOblique24pt7b', '&FreeMonoOblique9pt7b', '&FreeSans12pt7b', '&FreeSans18pt7b', '&FreeSans24pt7b', '&FreeSans9pt7b', '&FreeSansBold12pt7b', '&FreeSansBold18pt7b', '&FreeSansBold24pt7b', '&FreeSansBold9pt7b', '&FreeSansBoldOblique12pt7b', '&FreeSansBoldOblique18pt7b', '&FreeSansBoldOblique24pt7b', '&FreeSansBoldOblique9pt7b', '&FreeSansOblique12pt7b', '&FreeSansOblique18pt7b', '&FreeSansOblique24pt7b', '&FreeSansOblique9pt7b', '&FreeSerif12pt7b', '&FreeSerif18pt7b', '&FreeSerif24pt7b', '&FreeSerif9pt7b', '&FreeSerifBold12pt7b', '&FreeSerifBold18pt7b', '&FreeSerifBold24pt7b', '&FreeSerifBold9pt7b', '&FreeSerifBoldItalic12pt7b', '&FreeSerifBoldItalic18pt7b', '&FreeSerifBoldItalic24pt7b', '&FreeSerifBoldItalic9pt7b', '&FreeSerifItalic12pt7b', '&FreeSerifItalic18pt7b', '&FreeSerifItalic24pt7b', '&FreeSerifItalic9pt7b', '&Org_01', '&Picopixel', '&Tiny3x3a2pt7b', '&TomThumb'];
