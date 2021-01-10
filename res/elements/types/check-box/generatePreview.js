'use strict';
function LP_GV_El_Checkbox_4(){
    elements.types["Check-box"].generatePreview=
    /**
     * 
     * @param {Number} index 
     * @param {JQuery<HTMLCanvasElement>} canvas 
     */
    function (index,canvas) {
        var checkBox=elements.data[index];
        if(!checkBox.visible)return;
        var ctx=canvas[0].getContext("2d");
        ctx.imageSmoothingEnabled=false;
        var x=checkBox.position.x, y=checkBox.position.y;

        var size=[0,18,28,42,56][checkBox.size];
        
        ctx.fillStyle= checkBox.enabled ? preview.lowQualityPixel(checkBox.colors.box.background) : preview.lowQualityDimPixel(checkBox.colors.box.background);
        ctx.strokeStyle= checkBox.enabled ? preview.lowQualityPixel(checkBox.colors.box.border) : preview.lowQualityDimPixel(checkBox.colors.box.border);
        ctx.fillRect(x+0.5,y+0.5,size,size);
        ctx.strokeRect(x+0.5,y+0.5,size,size);

        if(checkBox.checked){
            ctx.strokeStyle= checkBox.enabled ? preview.lowQualityPixel(checkBox.colors.box.tick) : preview.lowQualityDimPixel(checkBox.colors.box.tick);
            var third=Number.parseInt(size/3);
            ctx.beginPath();
            ctx.moveTo(x+2.5, y+(third*2)+0.5);
            ctx.lineTo(x+third+0.5, y+size-1.5);
            ctx.lineTo(x+size-1.5, y+1.5);
            ctx.stroke();
        }

        ctx.fillStyle= checkBox.enabled ? preview.lowQualityPixel(checkBox.colors.text) : preview.lowQualityDimPixel(checkBox.colors.text);
        ctx.font= size+'px'+' sans-serif';
        ctx.fillText(checkBox.text, x+size+5, y+(size*0.8));
        
    }
}