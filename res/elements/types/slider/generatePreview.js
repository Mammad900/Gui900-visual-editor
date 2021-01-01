'use strict';
function LP_GV_El_Slider_3(){
    elements.types["Slider"].generatePreview=
    /**
     * 
     * @param {Number} index 
     * @param {JQuery<HTMLCanvasElement>} canvas 
     */
    function (index,canvas) {
        var slider=elements.data[index];
        if(!slider.visible)return;
        var ctx=canvas[0].getContext("2d");
        ctx.imageSmoothingEnabled=false;
        var x=slider.position.x, y=slider.position.y, w=slider.size.width, h=slider.size.height;
        var tw= slider.thumbWidth;
        var val_px=preview.map(slider.value, slider.min, slider.max, 0, w-2-tw);

        // Left area
        var clr_left= slider.enabled ? preview.lowQualityPixel(slider.colors.background.left) : preview.lowQualityDimPixel(slider.colors.background.left);
        ctx.beginPath();
        ctx.fillStyle=clr_left;
        ctx.fillRect(x+1,y+1,val_px,h-1);

        // Thumb
        var clr_thumb= slider.enabled ? preview.lowQualityPixel(slider.colors.thumb) : preview.lowQualityDimPixel(slider.colors.thumb);
        ctx.beginPath();
        ctx.fillStyle=clr_thumb;
        ctx.fillRect(x+1+val_px,y+1,tw,h-1);

        // Right area
        var clr_right= slider.enabled ? preview.lowQualityPixel(slider.colors.background.right) : preview.lowQualityDimPixel(slider.colors.background.right);
        ctx.beginPath();
        ctx.fillStyle=clr_right;
        ctx.fillRect(x+1+val_px+tw,y+1,w-tw-val_px-1,h-1);

        // Border
        var clr_border=slider.enabled ? preview.lowQualityPixel(slider.colors.border) : preview.lowQualityDimPixel(slider.colors.border);
        ctx.beginPath();
        ctx.strokeStyle=clr_border;
        ctx.strokeRect(x+0.5,y+0.5,w,h);
    }
}