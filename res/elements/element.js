var elements={
    data:[],
    create:
    /**
     * 
     * @param {"Button"|"Label"|"Check-box"|"Slider"|"Radio-button"} type 
     */
    function (type) {
        var i=this.data.length;
        var tr= this.table.rows.new("Untitled",type,type=="Slider");
        tr.data("index",i);
        this.data.push(elements.types[type].createDefaultDataObject());
        elements.selectElement(i);
        tr.on("click",function (e) {
            if(e.target==tr.children()[0]){
                elements.selectElement(i);
            }
        });
    },
    types: {},
    selectElement:
    function (index){
        var type=this.data[index].type;
        elements.types[type].saveProperties(this.selectedElement);
        properties.getElement().children().remove();
        elements.types[type].createProperties(index);
        $("#properties-header-details").text(this.data[index].type+' #'+index+' ('+$($("#elements_table").children().children()[index+1]).children()[2].innerHTML+")");
        elements.selectedElement=index;
    },
    selectedElement: -1
}
var fontsList=   ['&FreeMono12pt7b', '&FreeMono18pt7b', '&FreeMono24pt7b', '&FreeMono9pt7b', '&FreeMonoBold12pt7b', '&FreeMonoBold18pt7b', '&FreeMonoBold24pt7b', '&FreeMonoBold9pt7b', '&FreeMonoBoldOblique12pt7b', '&FreeMonoBoldOblique18pt7b', '&FreeMonoBoldOblique24pt7b', '&FreeMonoBoldOblique9pt7b', '&FreeMonoOblique12pt7b', '&FreeMonoOblique18pt7b', '&FreeMonoOblique24pt7b', '&FreeMonoOblique9pt7b', '&FreeSans12pt7b', '&FreeSans18pt7b', '&FreeSans24pt7b', '&FreeSans9pt7b', '&FreeSansBold12pt7b', '&FreeSansBold18pt7b', '&FreeSansBold24pt7b', '&FreeSansBold9pt7b', '&FreeSansBoldOblique12pt7b', '&FreeSansBoldOblique18pt7b', '&FreeSansBoldOblique24pt7b', '&FreeSansBoldOblique9pt7b', '&FreeSansOblique12pt7b', '&FreeSansOblique18pt7b', '&FreeSansOblique24pt7b', '&FreeSansOblique9pt7b', '&FreeSerif12pt7b', '&FreeSerif18pt7b', '&FreeSerif24pt7b', '&FreeSerif9pt7b', '&FreeSerifBold12pt7b', '&FreeSerifBold18pt7b', '&FreeSerifBold24pt7b', '&FreeSerifBold9pt7b', '&FreeSerifBoldItalic12pt7b', '&FreeSerifBoldItalic18pt7b', '&FreeSerifBoldItalic24pt7b', '&FreeSerifBoldItalic9pt7b', '&FreeSerifItalic12pt7b', '&FreeSerifItalic18pt7b', '&FreeSerifItalic24pt7b', '&FreeSerifItalic9pt7b', '&Org_01', '&Picopixel', '&Tiny3x3a2pt7b', '&TomThumb'];
