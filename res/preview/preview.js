'use strict';
var preview={
    refresh: function(){
        if(elements.selectedElement!=-1){
            elements.types[elements.data[elements.selectedElement].type].saveProperties(elements.selectedElement)
        }
        var ctx= $("#preview-canvas")[0].getContext("2d");
        ctx.fillStyle = $("#page_bc_color_input").val();
        ctx.fillRect(0, 0, 240, 320);
        elements.data.forEach(function (val, index) {
            elements.types[val.type].generatePreview(index,$("#preview-canvas"));
        })
    },

    
    /**
     * 
     * @param {Number} rgb565 
     */
    rgb565toHex: function(rgb565){
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
     * @param {Number} r 
     * @param {Number} g 
     * @param {Number} b 
     */
    color565: function(r, g, b)
    {
        return (( ( r & 0xF8 ) << 8 ) | ( ( g & 0xFC ) << 3 ) | ( ( b & 0xF8 ) >> 3));
    },

    lowQualityPixel: function (color) {
        var rgb=this.hexToRgb(color);
        return this.rgb565toHex(this.color565(rgb.r, rgb.g, rgb.b));
    },

    lowQualityDimPixel: function (color, multiplier=0.5) {
        var rgb=this.hexToRgb(color);
        return this.rgb565toHex(this.color565(rgb.r*multiplier, rgb.g*multiplier, rgb.b*multiplier));
    },

    hexToRgb: function (hex) { // https://stackoverflow.com/a/5624139/13561926
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

    map: function (x, in_min, in_max, out_min, out_max) {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    },

    /**
     * Draws a rounded rectangle using the current state of the canvas.
     * If you omit the last three params, it will draw a rectangle
     * outline with a 5 pixel border radius
     * https://stackoverflow.com/a/3368118/13561926
     * @param {CanvasRenderingContext2D} ctx
     * @param {Number} x The top left x coordinate
     * @param {Number} y The top left y coordinate
     * @param {Number} width The width of the rectangle
     * @param {Number} height The height of the rectangle
     * @param {Number} [radius = 5] The corner radius; It can also be an object 
     *                 to specify different radii for corners
     * @param {Number} [radius.tl = 0] Top left
     * @param {Number} [radius.tr = 0] Top right
     * @param {Number} [radius.br = 0] Bottom right
     * @param {Number} [radius.bl = 0] Bottom left
     * @param {Boolean} [fill = false] Whether to fill the rectangle.
     * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
     */
    roundRect: function(ctx, x, y, width, height, radius, fill, stroke) {
        if (typeof stroke === 'undefined') {
            stroke = true;
        }
        if (typeof radius === 'undefined') {
            radius = 5;
        }
        if (typeof radius === 'number') {
            radius = {tl: radius, tr: radius, br: radius, bl: radius};
        } else {
            var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
            for (var side in defaultRadius) {
                radius[side] = radius[side] || defaultRadius[side];
            }
        }
        ctx.beginPath();
        ctx.moveTo(x + radius.tl, y);
        ctx.lineTo(x + width - radius.tr, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
        ctx.lineTo(x + width, y + height - radius.br);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
        ctx.lineTo(x + radius.bl, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
        ctx.lineTo(x, y + radius.tl);
        ctx.quadraticCurveTo(x, y, x + radius.tl, y);
        ctx.closePath();
        if (fill) {
            ctx.fill();
        }
        if (stroke) {
            ctx.stroke();
        }
    
    },

    centerAlign: function(objectSize, parentSize, parentPosition){
        return (parentSize / 2) - (objectSize / 2) + parentPosition;
    }
}