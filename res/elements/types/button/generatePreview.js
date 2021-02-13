'use strict';
function LP_GV_El_Button_3(){
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
        ctx.roundRect(x+0.5, y+0.5, w, h, button.radius);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle= button.enabled ? preview.lowQualityPixel(button.colors.text) : preview.lowQualityDimPixel(button.colors.text);
        var txt=button.text;

        var th=56*0.83; // FreeSana24pt7b
        ctx.font= th+"px arial";
        var sz=ctx.measureText(txt);
        if((sz.width>w)||(th>h)){
            th=42*0.83; // FreeSans18pt7b
            ctx.font= th+"px arial";
            sz=ctx.measureText(txt);
            if((sz.width>w)||(th>h)){
                th=29*0.83; // FreeSans12pt7b
                ctx.font= th+"px arial";
                sz=ctx.measureText(txt);
                if((sz.width>w)||(th>h)){
                    th=22*0.83; // FreeSans9pt7b
                    ctx.font= th+"px arial";
                    sz=ctx.measureText(txt);
                }
            }
        }

        var tx=preview.centerAlign(sz.width, w, x);
        var ty=preview.centerAlign(th*1.25, h, y);
        ctx.fillText(txt, tx, ty+th);
    }
}
