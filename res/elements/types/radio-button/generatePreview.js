'use strict';
function LP_GV_El_RadioButton_4(){
    elements.types["Radio button"].generatePreview=
    /**
     * 
     * @param {Number} index 
     * @param {JQuery<HTMLCanvasElement>} canvas 
     */
    function (index,canvas) {
        var radio=elements.data[index];
        if(!radio.visible)return;
        var ctx=canvas[0].getContext("2d");
        ctx.imageSmoothingEnabled=false;
        var x=radio.position.x, y=radio.position.y;

        var size=[0,18,28,42,56][radio.size];
        
        ctx.fillStyle= radio.enabled ? preview.lowQualityPixel(radio.colors.box.background) : preview.lowQualityDimPixel(radio.colors.box.background);
        ctx.strokeStyle= radio.enabled ? preview.lowQualityPixel(radio.colors.box.border) : preview.lowQualityDimPixel(radio.colors.box.border);
       var half= Number.parseInt(size/2);
        ctx.beginPath();
        ctx.arc(x+half, y+half, half, 0, 2 * Math.PI /*2 radians*/, false);
        ctx.fill(); ctx.stroke();

        if(radio.checked){
            ctx.fillStyle= radio.enabled ? preview.lowQualityPixel(radio.colors.box.indicator) : preview.lowQualityDimPixel(radio.colors.box.indicator);
            ctx.beginPath();
            ctx.arc(x+half, y+half, Number.parseInt(half/2), 0, 2 * Math.PI /*2 radians*/, false);
            ctx.fill();
        }

        ctx.fillStyle= radio.enabled ? preview.lowQualityPixel(radio.colors.text) : preview.lowQualityDimPixel(radio.colors.text);
        ctx.font= (size*0.83)+'px'+' sans-serif';
        ctx.fillText(radio.text, x+size+5, y+(size*0.8));
        
    }
}