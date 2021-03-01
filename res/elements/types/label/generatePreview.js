'use strict';
var elements= elements || {};
elements.types= elements.types || {};
elements.types["Label"] = elements.types["Label"] || {}

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
    var regex=/&Free((Sans|Mono)(|Bold)(|Oblique)|Serif(|Bold)(|Italic))(9|12|18|24)pt7b/;
    var size=20;
    if(regex.test(font)){
        var style={"Sans":'sans-serif', "Serif":'serif', "Mono":'monospace'} [/(Sans|Serif|Mono)/.exec(font)[0]];
        var bold=font.includes("Bold");
        var italic=font.includes("Oblique")||font.includes("Italic");
        var size= {"24pt":56, "18pt":42, "12pt":29, "9pt":22} [/(9|12|18|24)pt/.exec(font)[0]]
        ctx.font=(bold?"bold ":"")+(italic?"italic ":"")+(size*0.83)+"px "+style;
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
