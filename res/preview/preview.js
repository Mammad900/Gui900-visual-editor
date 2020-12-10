'use strict';
var preview={
    refresh: function(){
        var ctx= $("#preview-canvas")[0].getContext("2d");
        ctx.fillStyle = $("#page_bc_color_input").val();
        ctx.fillRect(0, 0, 240, 320);
    },
}