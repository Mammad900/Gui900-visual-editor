'use strict';
var preview={
    refresh: function(){
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
    }
}