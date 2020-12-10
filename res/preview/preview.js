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
}