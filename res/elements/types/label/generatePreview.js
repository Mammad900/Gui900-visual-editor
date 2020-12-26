'use strict';
elements.types["Label"].generatePreview=
/**
 * 
 * @param {Number} index 
 * @param {JQuery<HTMLCanvasElement>} canvas 
 */
function (index,canvas) {
    var label=elements.data[index];
    if(!label.visible)return;
    var ctx=canvas[0].getContext("2d");
    ctx.imageSmoothingEnabled=false;
    var x=label.position.x, y=label.position.y;

    /**@type {string}*/
    var font=label.font;
    var regex=/&Free(Sans|Mono|Serif)(|Bold)(|Oblique)(9|12|18|24)pt7b/;
    var size=20;
    if(regex.test(font)){
        var style=/(Sans|Serif|Mono)/.exec(font)[0];
        switch(style){
            case "Sans":
                style= "sans-serif";
                break;
            case "Serif":
                style= "serif";
                break;
            case "Mono":
                style= "monospace";
                break;
        }
        var bold=font.includes("Bold");
        var italic=font.includes("Oblique");
        size= /(9|12|18|24)pt/.exec(font)[0];
        switch (size) {
            case "24pt":
                size=56;
                break;
            case "18pt":
                size=42;
                break;
            case "12pt":
                size=29;
                break;
            case "9pt":
                size=22;
                break;
        }
        ctx.font=(bold?"bold ":"")+(italic?"italic ":"")+size+"px "+style;
    }
    else{
        if(font=="NULL"){
            size=8;
            ctx.font="8px monospace"
        }
        else ctx.font="20px serif";
    }

    ctx.save();
    ctx.fillStyle= label.enabled ? preview.lowQualityPixel(label.color) : preview.lowQualityDimPixel(label.color);
    ctx.scale(label.text_size.x,label.text_size.y)
    var txt=label.text;

    ctx.fillText(txt, x, y+size);
    ctx.restore();
}