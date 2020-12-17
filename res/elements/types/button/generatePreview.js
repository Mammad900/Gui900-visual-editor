'use strict';
elements.types["Button"].generatePreview=
/**
 * 
 * @param {Number} index 
 * @param {JQuery<HTMLCanvasElement>} canvas 
 */
function (index,canvas) {
    var button=elements.data[index];
    if(!button.visible)return;
    var ctx=canvas[0].getContext("2d");
    ctx.imageSmoothingEnabled=false;
    var x=button.position.x, y=button.position.y, w=button.size.width, h=button.size.height;

    // Draw square
    var clr_bg=button.enabled ? preview.lowQualityPixel(button.colors.background) : preview.lowQualityDimPixel(button.colors.background);
    ctx.fillStyle=clr_bg;
    var clr_border=button.enabled ? preview.lowQualityPixel(button.colors.border) : preview.lowQualityDimPixel(button.colors.border);
    ctx.strokeStyle=clr_border;
    preview.roundRect(ctx, x+0.5, y+0.5, w, h, button.radius, true, true);

    ctx.fillStyle= button.enabled ? preview.lowQualityPixel(button.colors.text) : preview.lowQualityDimPixel(button.colors.text);
    ctx.font= "9pt arial";
    var txt=button.text;
    var sz=ctx.measureText(txt);
    var tx=preview.centerAlign(sz.width, w, x);
    var ty=preview.centerAlign(16, h, y);
    ctx.fillText(txt, tx, ty+16);
}