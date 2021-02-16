'use strict';
var preview={
    getCanvas(){
        var x= $("#preview-canvas");
        if(x.length==0){ // Preview box is floating
            x=$(floatingBoxes.Preview.document.getElementById("preview-canvas"));
        }
        return x;
    },
    refresh(){
        if(elements.selectedElement!=-1){
            elements.types[elements.data[elements.selectedElement].type].saveProperties(elements.selectedElement)
        }
        var ctx= preview.getCanvas()[0].getContext("2d");
        ctx.fillStyle = $("#page_bc_color_input").val();
        ctx.fillRect(0, 0, settings.data.screenSize.width, settings.data.screenSize.height);
        if(preview.doesPageExceedMaxElementPerPage()){
            notification.error("Arduino crashed");
            return;
        }
        ["Button", "Label", "Check-box", "Slider", "Radio button"].forEach(function (el) {
            elements.data.forEach(function (val, index) {
                if((val.type)==el){
                    elements.types[val.type].generatePreview(index,preview.getCanvas());
                }
            })
        })
    },

    doesPageExceedMaxElementPerPage () {
        function checkElType(typeStr, count) {
            if(count==0) return false;
            var c=0;
            elements.data.forEach(function (val) {
                if(val.type==typeStr){
                    c++;
                }
            });
            return(c>count)
        }
        return checkElType("Button", settings.data.maxElPerPage.button) ||
               checkElType("Label", settings.data.maxElPerPage.label) ||
               checkElType("Check-box", settings.data.maxElPerPage.checkBox) ||
               checkElType("Slider", settings.data.maxElPerPage.slider) ||
               checkElType("Radio button", settings.data.maxElPerPage.radioButton) ;
    },
    
    /**
     * 
     * @param {Number} rgb565 
     */
    rgb565toHex(rgb565){
        rgb565;
        var R = (rgb565 & 0xF800)>>11;
        var G = (rgb565 & 0x7E0)>>5;
        var B = (rgb565 & 0x1F);
        R = ( R * 527 + 23 ) >> 6; // https://stackoverflow.com/a/9069480/13561926
        G = ( G * 259 + 33 ) >> 6;
        B = ( B * 527 + 23 ) >> 6;
        return "#"+(R.toString(16).padStart(2, '0'))+(G.toString(16).padStart(2, '0'))+(B.toString(16).padStart(2, '0'));
    },

    /**
     * 
     * @param {Number|Object} r 
     * @param {Number} g 
     * @param {Number} b 
     */
    color565(r, g, b)
    {
        if((typeof r)=='object'){
            [r,g,b]=[r.r, r.g, r.b];
        }
        return (( ( r & 0xF8 ) << 8 ) | ( ( g & 0xFC ) << 3 ) | ( ( b & 0xF8 ) >> 3));
    },

    lowQualityPixel (color) {
        var rgb=this.hexToRgb(color);
        return this.rgb565toHex(this.color565(rgb.r, rgb.g, rgb.b));
    },

    lowQualityDimPixel (color, multiplier=0.5) {
        if(!settings.data.appearance.dimDisabledElements){ return this.lowQualityPixel(color); }
        var rgb=this.hexToRgb(color);
        return this.rgb565toHex(this.color565(rgb.r*multiplier, rgb.g*multiplier, rgb.b*multiplier));
    },

    hexToRgb (hex) { // https://stackoverflow.com/a/5624139/13561926
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
          return r + r + g + g + b + b;
        });
      
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
    },

    map (x, in_min, in_max, out_min, out_max) {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    },

    centerAlign(objectSize, parentSize, parentPosition){
        return (parentSize / 2) - (objectSize / 2) + parentPosition;
    }
}

//https://stackoverflow.com/a/7838871/13561926
CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.beginPath();
    this.moveTo(x+r, y);
    this.arcTo(x+w, y,   x+w, y+h, r);
    this.arcTo(x+w, y+h, x,   y+h, r);
    this.arcTo(x,   y+h, x,   y,   r);
    this.arcTo(x,   y,   x+w, y,   r);
    this.closePath();
    return this;
}
